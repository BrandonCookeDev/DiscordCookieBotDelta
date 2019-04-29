///////////////////////////////////
// UNCAUGHT ERROR HANDLER
//
function errHandler(e){
	console.error('CRITICAL: uncaught error')
	console.error(e)
	process.exit(1)
}
process.on('error', errHandler)
process.on('unhandledRejection', errHandler)
process.on('uncaughtException', errHandler)

function killHandler(){
	console.warn('process terminating due to signal....')
	process.exit(2)
}
process.on('SIGINT', killHandler)
process.on('SIGTERM', killHandler)
//
//////////////////////////////////

/* IMPORTS */
const path = require('path')
require('dotenv').config({path: path.join(__dirname, '.env')})

const Bot = require('./dist/Bot').default

/* MAIN */
~async function main(){
	await Bot.getInstance().startup()
}()