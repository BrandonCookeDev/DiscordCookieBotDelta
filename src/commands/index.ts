import IInformalCommand from '../interfaces/IInformalCommand'
const commands: IInformalCommand[] = []

/* COMMAND IMPORTS HERE */
import help from './help'
import helloworld from './sample/HelloWorld'
import helloworldP from './sample/HelloWorldPromise'
import add from './sample/Add'
import sub from './sample/Subtract'
import mul from './sample/Multiply'
import div from './sample/Divide'

function addCommand(cmd: IInformalCommand){
	commands.push(cmd)
}

function addMultiple(...multiple: IInformalCommand[]){
	multiple.forEach((c: IInformalCommand )=> commands.push(c))
}

/* REGISTER COMMANDS HERE */
addCommand(help)
addMultiple(add, sub, mul, div)

export default commands