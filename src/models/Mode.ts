
export default abstract class Mode{

	/* INSTANCE */
	private name: string
	private effect: (...params: any[])=>any

	constructor(name: string, effect: (...params: any[])=>any){
		this.name = name
		this.effect = effect
	}

	/* GETTERS AND SETTERS */
	public getName(): string { return this.name }

	public setName(name: string): void {
		this.name = name
	}

	public getEffect(): (...params: any[])=>any { return this.effect }

	public setEffect(effect: (...params: any[])=>any): void {
		this.effect = effect
	}

	/* ABSTRACT */
	public abstract doEffect(...params: any): any;
}