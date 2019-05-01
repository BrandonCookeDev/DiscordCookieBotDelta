import ShittalkMode from '../../modes/Shittalk'
import IInformalCommand from '../../interfaces/IInformalCommand'
import Bot from '../../Bot';

const command: IInformalCommand = {
	name: 'shittalk',
	callback: (): string => {
		let mode = new ShittalkMode()
		if(!Bot.getInstance().isModeAlreadyActive(mode)){
			Bot.getInstance().activateMode(mode)
			return 'Shittalk mode enabled!'
		}
		else{
			Bot.getInstance().deactiveMode(mode)
			return 'Shittalk mode disabled!'
		}

	},
	helpString: 'activate shittalk mode',
}

export default command