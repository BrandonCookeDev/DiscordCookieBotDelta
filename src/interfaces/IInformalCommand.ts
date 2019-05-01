export default interface IInformalCommand {
	name: string,
	callback: (...params: any[])=>any,
	helpString: string
}