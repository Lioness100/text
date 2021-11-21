import { ApplyOptions } from '@sapphire/decorators';
import { Args, Command, CommandOptions } from '@sapphire/framework';
import { send } from '@sapphire/plugin-editable-commands';
import type { Message } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import text_ms, { StringValue } from './../../ms/index'

@ApplyOptions<CommandOptions>({
	name: 'test',
	description: 'Simply a test command.'
})
export class UserCommand extends Command {
	public async messageRun(message: Message, args: Args) {
        const string = await args.rest( 'string' ).catch(() => null) as StringValue

		if(string == null){
			return send(message, "Invalid Property.");
		}

        
		const res = text_ms(string)
		
		const daub = new MessageEmbed()
        .setTitle("Maintennance Description:")
		.setDescription(`The Result From \`ms/index.ts\` is ${res}`);

		return send(message, {embeds: [daub] });
	}
}