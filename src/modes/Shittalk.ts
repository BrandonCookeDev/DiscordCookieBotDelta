import {format} from 'util'
import Mode from '../models/Mode'
import Message from '../models/Message'
import Channel from '../models/Channel'

const UPPER_LIMIT = 50
const getRandomNumber = (): number => Math.ceil(Math.random() * UPPER_LIMIT)

const phrases = ['no.', 'stop', 'k', 'just stop',
'stop talking...', 'shhhhhhh', 'ah cool bro', 'nobody gives a shit',
'Jesus you\'re such a scrub', 'Why are you even here', 'Terrible. Take a lap',
'Do you even have any friends',
];
const getRandomElement = (): string => phrases[Math.floor(Math.random() * phrases.length)]

export default class ShittalkMode extends Mode{

	private static countdown: number = getRandomNumber()

	constructor(name: string, effect: (...params: any[])=>any){
		super(name, effect)
	}

	public doEffect(message: Message, channel: Channel): void {
		if(ShittalkMode.countdown <= 1){
			ShittalkMode.countdown = getRandomNumber()
			const reply = format('%s %s', message.getMetadata().author.tag, getRandomElement())
			channel.send(reply)
		}

		ShittalkMode.countdown--
	}
}
