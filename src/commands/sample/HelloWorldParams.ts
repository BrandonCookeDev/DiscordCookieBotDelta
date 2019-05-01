import IInformalCommand from '../../interfaces/IInformalCommand'

const command: IInformalCommand = {
	name: 'helloworld_add',
	callback: (a: number, b: number) => {
		return a + b
	},
	helpString: 'test calculation',
}

export default command