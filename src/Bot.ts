import Discord from 'discord.js'
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
	}

	public parseMessage(message: Discord.Message){
		Log.debug('Bot.parseMessage called: %s', message)

	}

}