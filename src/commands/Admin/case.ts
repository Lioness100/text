import { ApplyOptions } from '@sapphire/decorators';
import { Args, Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { CaseModel } from './../../Schemas/case'

@ApplyOptions<CommandOptions>({
	name: 'case',
	description: 'This will fetch the case from the database.'
})
export class UserCommand extends Command {
	public async messageRun(message: Message, args: Args) {

        const string = await args.rest( 'string' ).catch(() => undefined);

        if(string == null){
            return;
        }

        const guild = await CaseModel.findOne({_guildId: `${message.guildId}`, _caseid: `${string}`}).lean()

        if (!CaseModel.exists({_guildId: `${message.guildId}`, _caseid: `${string}`})){
            const msh = new MessageEmbed()
            .setTitle("An Error Has Occured!")
            .setDescription(`Case ID ${string} Was Not Found In The Database!`)

            return message.reply({embeds: [msh] });
        }

        const embed = new MessageEmbed()
        .setTitle(`Case ${string}`)
        .setDescription("Here Is Some Information On That Case!")
        .addField("Target:", `${guild?._targetId ?? "null"}`)
        .addField("Executor:", `${guild?._modid ?? "null"}`)
        .addField("Reason:", `${guild?._reason ?? "None Provided"}`)
        .addField("Type:", `${guild?._type ?? "null"}`);

        return message.reply({embeds: [embed] });
        
	}
}