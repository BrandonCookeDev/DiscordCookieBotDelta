import IInformalCommand from '../../interfaces/IInformalCommand'

const command: IInformalCommand = {
	name: 'helloworld_add',
	callback: (a: string, b: string): number => {
		console.log('a: %s. Typeof a %s', a, typeof a)
		console.log('b: %s. Typeof b %s', b, typeof b)
		let answer = parseInt(a) + parseInt(b)
		console.log(answer)
		return answer
	},
	helpString: 'test calculation',
}

export default command