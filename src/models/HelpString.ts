import {format} from 'util'

export default class HelpString{

	private static helpStringFormat: string = '%s:: \t\t\t%s'
	private helpString: string[]

	constructor(helpString: string[]){
		this.helpString = helpString
	}

	/* INSTANCE */
	public add(commandName: string, helpString: string){
		this.helpString.push(
			format(
				HelpString.helpStringFormat,
				commandName,
				helpString,
			),
		)
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