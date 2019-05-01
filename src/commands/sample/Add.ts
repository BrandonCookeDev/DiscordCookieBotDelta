import IInformalCommand from '../../interfaces/IInformalCommand'

const command: IInformalCommand = {
	name: 'add',
	callback: (numbers: any[]): number => {
		let answer = 0
		numbers.forEach((num: string) => answer += parseInt(num))
		return answer
	},
	helpString: 'test calculation',
}

export default command