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

const Initializer = require('./dist/config/Initializer').default
const Log = require('./dist/util/Logger').default

/* MAIN */
~async function main(){
	try{
		Log.info('Initializing cookiE-bot')
		await Initializer.initialize()
		return true 
	} catch(e){
		Log.error('Unexpected Error: %s\n%s', e.message, e);
		return false
	}
}()