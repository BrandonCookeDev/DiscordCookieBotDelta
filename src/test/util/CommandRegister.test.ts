import chai from 'chai'
const expect = chai.expect

import moment from 'moment'
import Command from '../../models/Command'
import CommandRegister from '../../util/CommandRegistry'

/* TEST RESOURCES */
const TEST_CALLBACK_1 = (err: Error | undefined): string => {
	return 'hello from test!'
}
const TEST_CALLBACK_2 = (err: Error | undefined): string => {
	return 'hello world'
}
const TEST_CALLBACK_3 = (err: Error | undefined): string => {
	return 'test callback 3'
}

const TEST_COMMAND_1 = new Command('test', TEST_CALLBACK_1, moment().toDate())
const TEST_COMMAND_2 = new Command('helloworld', TEST_CALLBACK_2, moment().toDate())
const TEST_COMMAND_3 = new Command('test callback 3', TEST_CALLBACK_3, moment().toDate())

const EXPECTED_REGISTRY: {[x: string]: Command} = {
	'test': TEST_COMMAND_1,
	'helloworld': TEST_COMMAND_2,
	'test callback 3': TEST_COMMAND_3,
}

describe('Command Register test', () => {

	beforeEach(() => {
		CommandRegister.getInstance().setCommands({})
	})

	it('should contain the expected commands after additions 1', () => {
		CommandRegister.getInstance().add(TEST_COMMAND_1.getCommand(), TEST_COMMAND_1)
		expect(CommandRegister.getInstance().getCommands()).to.deep.equal({[TEST_COMMAND_1.getCommand()]: TEST_COMMAND_1})
	})

	it('should contain the expected commands after additions 2', () => {
		CommandRegister.getInstance().add(TEST_COMMAND_2.getCommand(), TEST_COMMAND_2)
		expect(CommandRegister.getInstance().getCommands()).to.deep.equal({[TEST_COMMAND_2.getCommand()]: TEST_COMMAND_2})
	})

	it('should contain the expected command after additions 3', () => {
		CommandRegister.getInstance().add(TEST_COMMAND_3.getCommand(), TEST_COMMAND_3)
		expect(CommandRegister.getInstance().getCommands()).to.deep.equal({[TEST_COMMAND_3.getCommand()]: TEST_COMMAND_3})
	})

	it('should contain the expected commands after additions 4', () => {
		CommandRegister.getInstance().add(TEST_COMMAND_1.getCommand(), TEST_COMMAND_1)
		CommandRegister.getInstance().add(TEST_COMMAND_2.getCommand(), TEST_COMMAND_2)
		CommandRegister.getInstance().add(TEST_COMMAND_3.getCommand(), TEST_COMMAND_3)
		expect(CommandRegister.getInstance().getCommands()).to.deep.equal(EXPECTED_REGISTRY)
	})

})