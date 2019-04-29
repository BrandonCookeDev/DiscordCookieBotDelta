import _ from 'lodash'
import Command from '../models/Command'

export default class CommandRegistry{

	/* STATICS */
	public static getInstance(): CommandRegistry{
		if(!CommandRegistry.initialized) {
			CommandRegistry.instance = new CommandRegistry({});
			CommandRegistry.initialized = true
		}
		return CommandRegistry.instance
	}

	private static initialized: boolean
	private static instance: CommandRegistry

	/* INSTANCE */
	private commands: ICommandRegister

	constructor(commands: ICommandRegister){
		this.commands = commands
	}

	public getCommands(): ICommandRegister { return this.commands }

	public setCommands(commands: ICommandRegister){
		this.commands = commands
	}

	public get(commandName: string): Command | undefined {
		return this.commands[commandName]
	}

	public add(commandName: string, command: Command): void {
		this.commands[commandName] = command
	}
}

interface ICommandRegister{
	[x: string]: Command
}