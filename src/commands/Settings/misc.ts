import { ApplyOptions } from '@sapphire/decorators';
import { Args, Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { GuildModel } from './../../Schemas/config'

@ApplyOptions<CommandOptions>({
	name: 'misc',
    aliases: ['m'],
    flags: ['p'],
    description: 'This Command Is For Miscelanious Things'
})
export class UserCommand extends Command {
	public async messageRun(message: Message, args: Args) {

        const string = await args.rest( 'string' ).catch(() => undefined)

        if(string == undefined){
            return;
        }

        const smh = string.replace(' ', '');

        if(smh.length > 2){
            return;
        }

        if(args.getFlags('p')){
             await GuildModel.findOneAndUpdate({_id: `${message.guildId}`, prefix: smh})


             const embed = new MessageEmbed()
             .setTitle("Success!")
             .setDescription("The Prefix Has Been Successfully Updated!");

             return message.reply({embeds: [embed] });
        }
        return;

	}
}