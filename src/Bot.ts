import Discord, { TextBasedChannel } from 'discord.js'
import Config from './config/Config'
import Message from './models/Message'
import CommandRegistry from './util/CommandRegistry'
import Log from './util/Logger'

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
	public client: Discord.Client

	constructor(){
		this.client = new Discord.Client()
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
		Log.debug('Bot.parseMessage called: %s', message)
		const parsedMessage: Message = Message.parse(message)
		if(!parsedMessage.isCommand()) return
		Log.verbose('Command received: %s', parsedMessage)

		const command = CommandRegistry.getInstance().get(parsedMessage.getCommand())
		if(!command) return

		const results = await Promise.resolve(command.execute(parsedMessage.getArgs()))
		Log.verbose('results: %s', results)
		message.channel.sendMessage(results)
		return true
	}

	public async sendMessage(channel: Discord.Channel, message: string, options?: Discord.MessageOptions){
		let doMessage;
		switch(channel.type){
			case 'text':
				doMessage = (channel as Discord.TextChannel).sendMessage
				break
			case 'dm':
				doMessage = (channel as Discord.DMChannel).sendMessage
				break
			case 'group':
				doMessage = (channel as Discord.GroupDMChannel).sendMessage
				break
			case 'voice':
			case 'category':
				throw new Error('non text based channel type found! type: ' + channel.type)
				break
			default:
				throw new Error('unknown channel type: ' + channel.type)
		}

		await doMessage(message, options)
		return true
	}
}