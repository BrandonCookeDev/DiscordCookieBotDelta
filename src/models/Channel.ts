import Discord, { TextChannel } from 'discord.js'
import Log from '../util/Logger'
import { format } from 'util';

export default class Channel{

	/* STATICS */
	public static parse(data: Discord.Channel): Channel {
		switch(data.type){
			case 'text':
				return Channel.parseTextChannel(data as Discord.TextChannel)
			case 'dm':
				return Channel.parseDMChannel(data as Discord.DMChannel)
			case 'group':
				return Channel.parseGroupChannel(data as Discord.GroupDMChannel)
			default:
				throw new Error('Unknown channel type found: ' + data.type)
		}
	}

	private static parseTextChannel(data: Discord.TextChannel): Channel {
		const ret: Channel = new Channel(
			data.id,
			data.type,
			data.name,
			data,
		)
		Log.debug('Channel(text) parsed: %s', ret)
		return ret
	}

	private static parseDMChannel(data: Discord.DMChannel): Channel {
		const ret: Channel = new Channel(
			data.id,
			data.type,
			'dm: ' + data.recipient.username,
			data,
		)
		Log.debug('Channel(dm) parsed: %s', ret)
		return ret
	}

	private static parseGroupChannel(data: Discord.GroupDMChannel): Channel {
		const ret: Channel = new Channel(
			data.id,
			data.type,
			'group: ' + data.recipients.map((r: Discord.User) => r.username).join(','),
			data,
		)
		Log.debug('Channel(dm) parsed: %s', ret)
		return ret
	}

	/* INSTANCE */
	private id: string
	private type: string
	private name: string
	private metadata: Discord.TextChannel | Discord.DMChannel | Discord.GroupDMChannel

	constructor(
		id: string,
		type: string,
		name: string,
		metadata: Discord.TextChannel | Discord.DMChannel | Discord.GroupDMChannel,
	){
		this.id = id
		this.type = type
		this.name = name
		this.metadata = metadata
	}

	public send(message: string): void {
		this.metadata.sendMessage(message)
	}

	public toString(): string {
		return format('[Channel] %s :: %s :: %s', this.name, this.id, this.type)
	}

	/* GETTERS AND SETTERS */
	public getId(): string { return this.id }

	public setId(id: string): void {
		this.id = id
	}

	public getType(): string { return this.type }

	public setType(type: string): void {
		this.type = type
	}

	public getName(): string { return this.name }

	public setName(name: string): void {
		this.name = name
	}

	public getMetadata(): Discord.TextChannel | Discord.DMChannel | Discord.GroupDMChannel { return this.metadata }

	public setMetadata(metadata: Discord.TextChannel | Discord.DMChannel | Discord.GroupDMChannel): void {
		this.metadata = metadata
	}

}