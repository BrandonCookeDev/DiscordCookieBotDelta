import IInformalCommand from '../../interfaces/IInformalCommand'

const command: IInformalCommand = {
	name: 'multiply',
	callback: (numbers: any[]): number => {
		let answer = numbers.shift()
		numbers.forEach((num: string) => answer *= parseInt(num))
		return answer
	},
	helpString: '**params <numbers>** :: multiply numbers',
}

export default command