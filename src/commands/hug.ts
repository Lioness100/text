import { ApplyOptions } from '@sapphire/decorators';
import { Command, CommandOptions, Args } from '@sapphire/framework';
import { reply } from '@sapphire/plugin-editable-commands';
import type { Message } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import get from 'axios';

@ApplyOptions<CommandOptions>({
	name: 'hug',
	description: 'gives a hug to a user'
})
export class UserCommand extends Command {
	public async messageRun(message: Message, args: Args) {

        const user = await args.rest( 'member' ).catch( () => undefined)

        if(user == null){
            return;
        }


        const result = await get("http://localhost:4000/api/hug", {
            headers: {
                'x-key': '8513c62d-f384-4533-802f-b904886b5e6c'
            }
        });

        const embed = new MessageEmbed()
        .setDescription(`${message.author.username} Has Hugged ${user.user.username}`)
        .setImage(`${result.data.msg}`)
        .setFooter("Powered By TextAPI")


        return reply(message, {embeds: [embed] });

	}
}