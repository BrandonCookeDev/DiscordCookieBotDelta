import moment from 'moment'

export default class Command{

	/* STATIC */
	public static parse(command: string, callback: (...params: any)=>any){
		return new Command(
			command,
			callback,
			moment().utc().toDate().toISOString(),
		)
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


}