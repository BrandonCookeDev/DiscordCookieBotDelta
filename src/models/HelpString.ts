import {format} from 'util'
import Log from '../util/Logger'
import command from '../commands/sample/HelloWorldPromise';

export default class HelpString{

	/* STATICS */
	public static getInstance(): HelpString{
		if(!HelpString.initialized){
			const versionLine = format(
				HelpString.headerLine,
				'cookiE-bot Delta',
				'1.0.0',
				HelpString.seperator,
			)
			HelpString.instance = new HelpString([versionLine])
			HelpString.initialized = true
		}
		return HelpString.instance
	}

	protected static getSpacing(commandName: string): string{
		const spaces = []
		const len = HelpString.spaceLimit - commandName.length
		if(len <= 0)
			Log.warn('command %s is %d long. Max padding: %d. Difference: %d',
				commandName, commandName.length, HelpString.spaceLimit, len,
			)

		if(len >= 0){
			for(let i = 0; i < len; i++)
				spaces.push(' ')
		}
		return spaces.join(' ')
	}

	private static headerLine = '%s %s\n%s'
	private static seperator = '----------------'
	private static spaceLimit = 25
	private static helpStringFormat: string = '%s::%s%s'
	private static instance: HelpString
	private static initialized: boolean = false

	/* INSTANCE */
	private helpString: string[]

	constructor(helpString: string[]){
		this.helpString = helpString
	}

	public add(commandName: string, helpString: string): void {
		this.helpString.push(
			format(
				HelpString.helpStringFormat,
				commandName,
				HelpString.getSpacing(commandName),
				helpString,
			),
		)
	}

	public addHeader(header: string): void {
		this.helpString.push('')
		this.helpString.push(header)
		this.helpString.push('----------------')
	}

	public toString(): string {
		return this.helpString.join('\n')
	}

	/* GETTERS AND SETTERS */
	public getHelpString(): string[] { return this.helpString }

	public setHelpString(helpString: string[]){
		this.helpString = helpString
	}

}