import IInformalCommand from '../../interfaces/IInformalCommand'

const command: IInformalCommand = {
	name: 'divide',
	callback: (numbers: any[]): number => {
		let answer = numbers.shift()
		numbers.forEach((num: string) => answer /= parseInt(num))
		return answer
	},
	helpString: 'divide numbers:: params <numbers>',
}

export default command