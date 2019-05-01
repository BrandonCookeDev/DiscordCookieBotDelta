import Discord, { TextBasedChannel } from 'discord.js'
import Config from './config/Config'
import Message from './models/Message'
import Mode from './models/Mode'
import CommandRegistry from './util/CommandRegistry'
import Log from './util/Logger'
import Channel from './models/Channel';

export default class Bot{

	/* STATICS */
	public static initialized: boolean = false
	public static instance: Bot

	public static getInstance(): Bot{
		if(!Bot.initialized){
			Bot.instance = new Bot()
			Bot.initialized = true
		}
		return Bot.instance
	}

	/* INSTANCE */
	private client: Discord.Client
	private activeModes: Mode[] = []

	constructor(){
		this.client = new Discord.Client()
		this.activeModes = []
		this.startup = this.startup.bind(this)
		this.parseMessage = this.parseMessage.bind(this)
	}

	public async startup(){
		Log.debug('Bot.startup called')
		Log.info('Initializing bot connection...')
		Log.debug('Using token: %s', Config.discord.token)
		await this.client.login(Config.discord.token)
		Log.info('Connected to Discord!')
		this.client.user.setStatus('online')

		this.client.on('message', this.parseMessage)
		return true
	}

	public async parseMessage(message: Discord.Message){
		// receive message
		Log.debug('Bot.parseMessage called: %s', message)
		const parsedMessage: Message = Message.parse(message)
		const parsedChannel: Channel = Channel.parse(message.channel as Discord.TextChannel)

		// feed message and channel to the active modes
		this.activeModes.forEach((mode: Mode) => mode.doEffect(parsedMessage, parsedChannel))

		// discard if not a command
		if(!parsedMessage.isCommand()) return
		Log.verbose('Command received: %s', parsedMessage)

		const command = CommandRegistry.getInstance().get(parsedMessage.getCommand())
		if(!command) return

		const results = await Promise.resolve(command.execute(parsedMessage.getArgs()))
		Log.verbose('results: %s', results)
		parsedChannel.send(results)
		return true
	}

	public activateMode(mode: Mode){
		this.activeModes.push(mode)
	}

	public deactiveMode(mode: Mode){
		this.activeModes.splice(this.activeModes.indexOf(mode))
	}

	/* GETTERS AND SETTERS */
	public getClient(): Discord.Client { return this.client }

	public setClient(client: Discord.Client): void {
		this.client = client
	}

	public getActiveModes(): Mode[] { return this.activeModes }

	public setActiveModes(activeModes: Mode[]): void {
		this.activeModes = activeModes
	}
}