import IInformalCommand from '../interfaces/IInformalCommand'
import Log from '../util/Logger'
const commands: IInformalCommand[] = []

/* COMMAND IMPORTS HERE */
import help from './help'
import helloworld from './sample/HelloWorld'
import helloworldP from './sample/HelloWorldPromise'
import add from './math/Add'
import sub from './math/Subtract'
import mul from './math/Multiply'
import div from './math/Divide'
import shittalk from './modes/Shittalk'
import HelpString from '../models/HelpString';

// initialize help string
const helpString = HelpString.getInstance()

function addCommand(cmd: IInformalCommand){
	helpString.add(cmd.name, cmd.helpString)
	commands.push(cmd)
}

function addMultiple(...multiple: IInformalCommand[]){
	multiple.forEach((c: IInformalCommand )=> addCommand(c))
}

function addSection(sectionHeader: string, ...sectionCommands: IInformalCommand[]){
	Log.info('Registering Section: %s [%d commands]', sectionHeader, sectionCommands.length)
	HelpString.getInstance().addHeader(sectionHeader)
	addMultiple(...sectionCommands)
}

/* REGISTER COMMANDS HERE */
addCommand(help)
addSection('Modes', shittalk)
addSection('Maths', add, sub, mul, div)

export default commands