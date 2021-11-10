import { ApplyOptions } from '@sapphire/decorators';
import { Args, Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { GuildModel } from '../../Schemas/config'
import { ModModel } from '../../Schemas/mod'

@ApplyOptions<CommandOptions>({
	name: 'eclectic',
    aliases: ['ec'],
    flags: ['set'],
    prefixes: ['?'],
    description: 'This Command Is For Miscelanious Things'
})
export class UserCommand extends Command {
	public async messageRun(message: Message, args: Args) {

        const arg = await args.pick( 'string' )


        if(args.getFlags('set')){
            const number = await args.pick( 'number' ).catch(() => undefined);

            if(number == undefined){
                return;
            }

            if(number == 1){
             await GuildModel.findOneAndUpdate({_id: `${message.guildId}`, prefix: arg})


             const embed = new MessageEmbed()
             .setTitle("Success!")
             .setDescription("The Prefix Has Been Successfully Updated!");

             return message.reply({embeds: [embed] });
            }

            if(number == 2){

                if(arg == null){
                    const eror = new MessageEmbed()
                    .setTitle("Unsuccessful Operation!")
                    .setDescription("The Role Given Is Invalid.");

                    return message.reply({embeds: [eror]});
                }
                  await ModModel.findOneAndUpdate({_id: `${message.guildId}`, _modid: arg})
            }

            const daub = new MessageEmbed()
            .setTitle("Unsuccessful Operation!")
            .setDescription("You Didn't Specify A Valid Set To Set It To.")

            return message.reply({embeds: [daub] })
        }
        const embed = new MessageEmbed()
        .setTitle("Unsuccessful Operation!")
        .setDescription("You Did Not Specify What To Do With That.")

        return message.reply({embeds: [embed]})

	}
}