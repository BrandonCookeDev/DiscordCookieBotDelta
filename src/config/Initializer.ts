import Bot from '../Bot'
import Command from '../models/Command'
import CommandRegistery from '../util/CommandRegistry'
import HelpString from '../models/HelpString'
import IInformalCommand from '../interfaces/IInformalCommand'
import Log from '../util/Logger'

import commands from '../commands'

export default class Initializer{

	public static async initialize(){
		// initialize bot
		await Bot.getInstance().startup()

		// initialize help string
		const helpString = HelpString.getInstance()

		// populate the registry
		const registry = CommandRegistery.getInstance()
		commands.forEach((informalCommand: IInformalCommand) => {
			const command = Command.parse(informalCommand.name, informalCommand.callback)
			registry.add(informalCommand.name, command)
			Log.info('Registered command: %s', informalCommand.name)
			helpString.add(informalCommand.name, informalCommand.helpString)
		})

		return true
	}

}