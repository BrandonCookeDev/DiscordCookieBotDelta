import IInformalCommand from '../../interfaces/IInformalCommand'

const command: IInformalCommand = {
	name: 'divide',
	callback: (numbers: any[]): number => {
		let answer = numbers.shift()
		numbers.forEach((num: string) => answer /= parseInt(num))
		return answer
	},
	helpString: '**params <numbers>** :: divide numbers',
}

export default command