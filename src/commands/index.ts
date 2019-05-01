import IInformalCommand from '../interfaces/IInformalCommand'
const commands: IInformalCommand[] = []

/* COMMAND IMPORTS HERE */
import help from './help'
import helloworld from './sample/HelloWorld'
import helloworldP from './sample/HelloWorldPromise'
import helloworldC from './sample/HelloWorldParams'

/* REGISTER COMMANDS HERE */
commands.push(help)
commands.push(helloworld)
commands.push(helloworldP)
commands.push(helloworldC)

export default commands