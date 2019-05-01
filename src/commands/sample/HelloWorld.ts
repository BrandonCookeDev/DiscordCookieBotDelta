import IInformalCommand from '../../interfaces/IInformalCommand'

const command: IInformalCommand = {
	name: 'helloworld',
	callback: () => {
		return 'helloworld'
	},
	helpString: 'test command',
}

export default command