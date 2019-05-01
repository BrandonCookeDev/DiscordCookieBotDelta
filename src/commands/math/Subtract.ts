import IInformalCommand from '../../interfaces/IInformalCommand'

const command: IInformalCommand = {
	name: 'subtract',
	callback: (numbers: any[]): number => {
		let answer = numbers.shift()
		numbers.forEach((num: string) => answer -= parseInt(num))
		return answer
	},
	helpString: '**params <numbers>** :: subtract numbers',
}

export default command