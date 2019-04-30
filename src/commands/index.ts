import IInformalCommand from '../interfaces/IInformalCommand'
const commands: IInformalCommand[] = []

/* COMMAND IMPORTS HERE */
import helloworld from './sample/HelloWorld'

/* REGISTER COMMANDS HERE */
commands.push(helloworld)

export default commands