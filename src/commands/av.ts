import { ApplyOptions } from '@sapphire/decorators';
import { Command, CommandOptions, Args } from '@sapphire/framework';
import { send } from '@sapphire/plugin-editable-commands';
import type { Message } from 'discord.js';
import { MessageEmbed } from 'discord.js';

@ApplyOptions<CommandOptions>({
	name: 'av',
    aliases: ['avatar'],
	description: 'This Will Bring Up Someones Avatar, Aswell As Basic Information'
})
export class UserCommand extends Command {
	public async messageRun(message: Message, args: Args) {
        const member = await args.rest( 'member' ).catch( () => undefined)

        if(member == null){
            let member = await args.rest( 'user' )

            const embed = new MessageEmbed()
            .setDescription(`User Tag: \`${member.tag}\` \n User ID: \`${member.id}\``)
            .setImage(member.displayAvatarURL({size: 4096}));

            return message.reply({embeds: [embed] })
        }

        const embed = new MessageEmbed()
        .setDescription(`User Tag: \`${member.user.tag}\` \n User ID: \`${member.id}\``)
        .setImage(member.displayAvatarURL({size: 4096}));

		return send(message, {embeds: [embed] });   
	}
}