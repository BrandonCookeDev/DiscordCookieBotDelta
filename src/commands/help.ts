import HelpString from '../models/HelpString'
import IInformalCommand from '../interfaces/IInformalCommand'

const command: IInformalCommand = {
	name: 'help',
	callback: () => {
		return HelpString.getInstance().toString()
	},
	helpString: 'Print a list of the bot\'s commands',
}

export default command