import {expect} from 'chai'
import sinon from 'sinon'
import moment from 'moment'
import Command from '../../models/Command'
let clock = sinon.useFakeTimers()

const TEST_TIME_1 = moment().subtract(4, 'years').toDate()
const TEST_TIME_2 = moment().subtract(2, 'years').toDate()
const TEST_TIME_3 = moment().subtract(2, 'weeks').toDate()
const TEST_COMMAND_1 = 'helloworld'
const TEST_COMMAND_2 = 'hellomoto'
const TEST_COMMAND_3 = 'hellohell'
const TEST_CALLBACK_1 = () => 'helloworld'
const TEST_CALLBACK_2 = () => (200 + 200 + 100)
const TEST_CALLBACK_3 = () => new Promise((resolve) => resolve('hellohell'))
const TEST_TIMESTAMP_1 = moment(TEST_TIME_1).toISOString()
const TEST_TIMESTAMP_2 = moment(TEST_TIME_2).toISOString()
const TEST_TIMESTAMP_3 = moment(TEST_TIME_3).toISOString()

const EXPECTED_COMMAND_1 = new Command(TEST_COMMAND_1, TEST_CALLBACK_1, TEST_TIMESTAMP_1)
const EXPECTED_COMMAND_2 = new Command(TEST_COMMAND_2, TEST_CALLBACK_2, TEST_TIMESTAMP_2)
const EXPECTED_COMMAND_3 = new Command(TEST_COMMAND_3, TEST_CALLBACK_3, TEST_TIMESTAMP_3)
const EXPECTED_EXECUTION_1 = 'helloworld'
const EXPECTED_EXECUTION_2 = 500
const EXPECTED_EXECUTION_3 = 'hellohell'

describe('Command model', () => {

	beforeEach(setupEach)

	it('should parse a command correctly 1', () => {
		clock = sinon.useFakeTimers(TEST_TIME_1)
		const command: Command = Command.parse(TEST_COMMAND_1, TEST_CALLBACK_1)
		expect(command).to.deep.equal(EXPECTED_COMMAND_1)
	})

	it('should parse a command correctly 2', () => {
		clock = sinon.useFakeTimers(TEST_TIME_2)
		const command: Command = Command.parse(TEST_COMMAND_2, TEST_CALLBACK_2)
		expect(command).to.deep.equal(EXPECTED_COMMAND_2)
	})

	it('should parse a command correctly 3', () => {
		clock = sinon.useFakeTimers(TEST_TIME_3)
		const command: Command = Command.parse(TEST_COMMAND_3, TEST_CALLBACK_3)
		expect(command).to.deep.equal(EXPECTED_COMMAND_3)
	})

	it('should execute the command 1', () => {
		expect(EXPECTED_COMMAND_1.execute()).to.be.equal(EXPECTED_EXECUTION_1)
	})

	it('should execute the command 2', () => {
		expect(EXPECTED_COMMAND_2.execute()).to.be.equal(EXPECTED_EXECUTION_2)
	})

	it('should execute the command 3', async () => {
		expect(await EXPECTED_COMMAND_3.execute()).to.be.equal(EXPECTED_EXECUTION_3)
	})

})

async function setupEach(){
	clock.restore()
	return true
}