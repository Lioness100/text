import { ApplyOptions } from '@sapphire/decorators';
import { Args, Command, CommandOptions } from '@sapphire/framework';
import { send } from '@sapphire/plugin-editable-commands';
import type { Message } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { Sus } from './../../scripts/suspicious';

@ApplyOptions<CommandOptions>({
	name: 'test',
	description: 'Simply a test command.'
})
export class UserCommand extends Command {
	public async messageRun(message: Message, args: Args) {
        const member = await args.rest( 'member' );

        const result = await Sus(member);

		
		const daub = new MessageEmbed()
        .setTitle("Heres The Results On The Script `suspicious.ts`")
        .setDescription(`Is This User Sus: ${result}`);

		return send(message, {embeds: [daub] });
	}
}