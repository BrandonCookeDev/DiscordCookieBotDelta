import moment from 'moment'

export default class Command{

	/* STATIC */
	public static parse(command: string, callback: (...params: any)=>any){
		const timestamp = moment().utc().toDate()
		return new Command(command, callback, timestamp)
	}

	/* INSTANCE */
	private command: string
	private callback: (...params: any)=>any
	private timestamp: Date

	constructor(command: string, callback: (...params: any)=>any, timestamp: Date){
		this.command = command
		this.callback = callback
		this.timestamp = timestamp
	}

	public getCommand(): string { return this.command }

	public getCallback(): (...params: any)=>any { return this.callback }

	public getTimestamp(): Date { return this.timestamp }
}