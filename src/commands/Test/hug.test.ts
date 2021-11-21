import { ApplyOptions } from '@sapphire/decorators';
import { Command, CommandOptions } from '@sapphire/framework';
import { send } from '@sapphire/plugin-editable-commands';
import type { Message } from 'discord.js';
import { MessageEmbed } from 'discord.js';

@ApplyOptions<CommandOptions>({
	name: 'test-hug',
	description: 'Simply a test command.'
})
export class UserCommand extends Command {
	public async messageRun(message: Message) {

		
		const daub = new MessageEmbed()
        .setTitle("OVH CDN Test")
        .setImage('https://storage.bhs.cloud.ovh.net/v1/AUTH_1a10e40f300b476db6f9086c40dd8ada/TextCDN/hug/hug_001.gif')

		return send(message, {embeds: [daub] });
	}
}