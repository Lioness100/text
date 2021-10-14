import { ApplyOptions } from '@sapphire/decorators';
import { Command, CommandOptions } from '@sapphire/framework';
import { send } from '@sapphire/plugin-editable-commands';
import type { Message } from 'discord.js';
import { MessageEmbed } from 'discord.js';

@ApplyOptions<CommandOptions>({
	name: 'ping',
	description: 'ping pong'
})
export class UserCommand extends Command {
	public async run(message: Message) {

		const daub = new MessageEmbed()
		.setTitle("Hello!")
		.setDescription(`The Ping Is Immaculate! Coming In At ${this.container.client.ws.ping}`)

		return send(message, {embeds: [daub] });
	}
}