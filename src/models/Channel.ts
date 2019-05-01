import Discord, { TextChannel } from 'discord.js'
import Log from '../util/Logger'
import { format } from 'util';

export default class Channel{

	public static parse(data: Discord.TextChannel): Channel {
		const ret: Channel = new Channel(
			data.id,
			data.type,
			data.name,
			data,
		)
		Log.debug('Channel parsed: %s', ret)
		return ret
	}

	private id: string
	private type: string
	private name: string
	private metadata: Discord.TextChannel

	constructor(id: string, type: string, name: string, metadata: TextChannel){
		this.id = id
		this.type = type
		this.name = name
		this.metadata = metadata
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

	public getMetadata(): Discord.TextChannel { return this.metadata }

	public setMetadata(metadata: Discord.TextChannel): void {
		this.metadata = metadata
	}

	public toString(): string {
		return format('[Channel] %s :: %s :: %s', this.name, this.id, this.type)
	}
}