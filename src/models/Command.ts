import moment from 'moment'
import Logger from '../util/Logger';
import { format } from 'util';

export default class Command{

	/* STATIC */
	public static parse(command: string, callback: (...params: any)=>any){
		const ret: Command = new Command(
			command,
			callback,
			moment().utc().toDate().toISOString(),
		)
		Logger.debug('Command parsed: %s', ret)
		return ret
	}

	/* INSTANCE */
	private command: string
	private callback: (...params: any)=>any
	private timestamp: string

	constructor(command: string, callback: (...params: any)=>any, timestamp: string){
		this.command = command
		this.callback = callback
		this.timestamp = timestamp
	}

	public execute(...params: any[]): any {
		return this.callback(...params);
	}

	/* GETTERS AND SETTERS */
	public getCommand(): string { return this.command }

	public setCommand(command: string): void {
		this.command = command
	}

	public getCallback(): (...params: any)=>any { return this.callback }

	public setCallback(callback: (...params: any)=>any): void {
		this.callback = callback
	}

	public getTimestamp(): string { return this.timestamp }

	public setTimestmap(timestamp: string): void {
		this.timestamp = timestamp
	}

	public toString(): string {
		return format('[Command] {%s} %s', this.timestamp, this.command)
	}
}