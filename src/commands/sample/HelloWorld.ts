import IInformalCommand from '../../interfaces/IInformalCommand'

const command: IInformalCommand = {
	name: 'helloworld',
	callback: () => {
		return 'helloworld'
	},
}

export default command