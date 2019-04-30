import moment from 'moment'
import Discord from "discord.js";

export default class Message {

	private static parse(data: Discord.Message): Message {
		return new Message(
			data.author.username,
			data.content,
			moment().utc().toDate(),
		)
	}

	private user: string
	private content: string
	private timestamp: Date

	constructor(user: string, content: string, timestamp: Date){
		this.user = user
		this.content = content
		this.timestamp = timestamp
	}

	public getUser(): string { return this.user }

	public setUser(user: string): void {
		this.user = user
	}

	public getContent(): string { return this.content }

	public setContent(content: string): void {
		this.content = content
	}

	public getTimestamp(): Date { return this.timestamp }

	public setTimestamp(timestamp: Date): void {
		this.timestamp = timestamp
	}

}