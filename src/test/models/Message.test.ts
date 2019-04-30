import {expect} from 'chai'
import sinon from 'sinon'
import Discord from 'discord.js'
import Message from '../../models/Message'
let clock = sinon.useFakeTimers()


describe('Message model', () => {

	beforeEach(setupEach)

})

async function setupEach(){
	clock.restore()
	return true
}