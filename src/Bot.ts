import Discord from 'discord.js'
import Config from './config/Config'
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
		Log.info('Initializing bot connection...')
		Log.debug('Using token: %s', Config.discord.token)
		await this.client.login(Config.discord.token)
		Log.info('Connected to Discord!')
		this.client.user.setStatus('online')
	}

}