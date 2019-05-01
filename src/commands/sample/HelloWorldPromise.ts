import IInformalCommand from '../../interfaces/IInformalCommand'

const command: IInformalCommand = {
	name: 'helloworld_promise',
	callback: () => {
		return new Promise((resolve) => {
			console.log('helloworldP callback')
			resolve('helloworld')
		})
	},
	helpString: 'test promises with helloworld',
}

export default command