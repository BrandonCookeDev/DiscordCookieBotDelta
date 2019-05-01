import moment from 'moment'
import Discord from 'discord.js';
import {format} from 'util'
import Channel from './Channel'
import Logger from '../util/Logger';

export default class Message {

	/* STATICS */
	public static parse(data: Discord.Message): Message {
		const ret: Message = new Message(
			data.author.username,
			data.content,
			moment().utc().toDate().toISOString(),
			data,
		)
		Logger.debug('Message parsed: %s', ret)
		return ret
	}

	/* INSTANCE */
	private user: string
	private content: string
	private timestamp: string
	private metadata: Discord.Message

	constructor(user: string, content: string, timestamp: string, metadata: Discord.Message){
		this.user = user
		this.content = content
		this.timestamp = timestamp
		this.metadata = metadata
	}

	public isCommand(): boolean {
		return this.content[0] === '!'
	}

	public getCommand(): string {
		return this.content.split(' ')[0].substring(1)
	}

	public getArgs(): string[] {
		return this.content.split(' ').slice(1)
	}

	/* GETTERS AND SETTERS */
	public getUser(): string { return this.user }

	public setUser(user: string): void {
		this.user = user
	}

	public getContent(): string { return this.content }

	public setContent(content: string): void {
		this.content = content
	}

	public getMetadata(): Discord.Message { return this.metadata }

	public setMetadata(metadata: Discord.Message){
		this.metadata = metadata
	}

	public getTimestamp(): string { return this.timestamp }

	public setTimestamp(timestamp: string): void {
		this.timestamp = timestamp
	}

	public toString(): string {
		return format('[Message] {%s} %s: %s | Command: %s Args: %s',
			this.timestamp,
			this.user,
			this.content,
			this.getCommand(),
			this.getArgs(),
		)
	}

}