import { ApplyOptions } from '@sapphire/decorators';
import { Command, CommandOptions, Args } from '@sapphire/framework';
import { send } from '@sapphire/plugin-editable-commands';
import type { Message } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import get from 'axios'

@ApplyOptions<CommandOptions>({
	name: 'pp',
    aliases: ['howbigismycock', 'peepee'],
	description: 'This Will Request ItsukiAPI On How Long Someones PP'
})
export class UserCommand extends Command {
	public async messageRun(message: Message, args: Args) {
        const member = await args.pick( 'member' ).catch(() => null)

		const result = await get("http://localhost:4000/api/pp", {
            headers: {
                'x-key': '8513c62d-f384-4533-802f-b904886b5e6c'
            }
        });

        if(member == null){
            const embed = new MessageEmbed()
            .setTitle(`${message.author.username}'s PP Result`)
            .setDescription(`PP Size Is ${result.data.msg}`)
            .setFooter("Powered By ItsukiAPI");

            return send(message, {embeds: [embed] });
        }

        const embed = new MessageEmbed()
        .setTitle(`${member.user.username}'s PP Result`)
        .setDescription(`PP Size Is ${result.data.msg}`)
        .setFooter("Powered By ItsukiAPI");

        return send(message, {embeds: [embed] });
	}
}