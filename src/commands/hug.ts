import { ApplyOptions } from '@sapphire/decorators';
import { Command, CommandOptions, Args } from '@sapphire/framework';
import { reply } from '@sapphire/plugin-editable-commands';
import type { Message } from 'discord.js';
import { MessageEmbed } from 'discord.js';

import { Sus } from './../scripts/suspicious'

@ApplyOptions<CommandOptions>({
	name: 'hug',
	description: 'gives a hug to a user'
})
export class UserCommand extends Command {
	public async run(message: Message, args: Args) {

        const user = await args.rest( 'user' )

        const result = await Sus(user);

        if(result == true){
            console.log("DAUb")
        }

        const embed = new MessageEmbed().setTitle("hi")

        

        return reply(message, {embeds: [embed] });

	}
}