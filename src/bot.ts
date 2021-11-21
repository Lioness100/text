import '#lib/setup';
import { LogLevel, SapphireClient } from '@sapphire/framework';
import type { Message } from 'discord.js'
const mongoose = require('mongoose');
import { GuildModel } from './Schemas/config'
import '@sapphire/plugin-api/register';



const client = new SapphireClient({
	defaultPrefix: 'i!',
	fetchPrefix: async (message: Message) => {

		const guild = await GuildModel.findOne({ _id: message.guildId ?? '0' }).lean()

		const prefix = guild?.prefix ?? 'i!'

		return prefix;
	},
	api: {
	auth: {
		id: `${process.env.client_id}`,
		secret: `${process.env.client_secret}`,
		cookie: 'TEXT_AUTH',
		redirect: 'textbot.ovh/dash',
		scopes: ['identity'],
		transformers: []
	},
	prefix: '',
	origin: '*',
	listenOptions: {
		port: 4000
	},
},
	regexPrefix: /^(hey +)?bot[,! ]/i,
	caseInsensitiveCommands: true,
	logger: {
		level: LogLevel.Debug
	},
	shards: 'auto',
	intents: [
		'GUILDS',
		'GUILD_MEMBERS',
		'GUILD_BANS',
		'GUILD_EMOJIS_AND_STICKERS',
		'GUILD_VOICE_STATES',
		'GUILD_MESSAGES',
		'GUILD_MESSAGE_REACTIONS',
		'DIRECT_MESSAGES',
		'DIRECT_MESSAGE_REACTIONS'
	],

});


const main = async () => {
	try {
		client.logger.info('Logging in');
		await client.login();
		client.logger.info('logged in');
		await mongoose.connect(process.env.mongo)
		client.logger.info('MongoDB Connected!');
	} catch (error) {
		client.logger.fatal(error);
		client.destroy();
		process.exit(1);
	}
};

main();