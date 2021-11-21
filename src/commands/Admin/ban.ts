import { ApplyOptions } from '@sapphire/decorators';
import { Args, Command, CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { ModModel } from './../../Schemas/mod';
import { CaseModel } from './../../Schemas/case';
import uniqid from 'uniqid';

@ApplyOptions<CommandOptions>({
	name: 'ban',
    aliases: ['b'],
    prefixes: ['?'],
    flags: ['dm', 'p', 'r', 'h'],
	description: 'This Will Ban A User In The Best Possible Way Ever.'
})
export class UserCommand extends Command {
	public async messageRun(message: Message, args: Args) {
       const member = await args.rest( 'member' ).catch( () => undefined)

        const guild = await ModModel.findOne({_id: `${message.guildId}`}).lean();
        const cancel = this.container.client.emojis.cache.get('902377399746957402');


        const author = message.member;

        if(author == null){
            return;
        }

        if(author.roles.cache.has(`${guild?._adminid}`)){

            const embed = new MessageEmbed()
            .setTitle("Ban Confirmation:")
            .setDescription("Are You Sure You Want To Ban This User? If So, Reply With `yes // y`, else, reply with `no // n`")
            .setFooter("You Have 10 Seconds To Respond.");

            const msg = await message.reply({embeds: [embed]})
            
            const collector = message.channel.createMessageCollector({ time: 10000});

            collector.on('collect',  m => {
				if(m.content == 'yes' || m.content == 'y'){
                    msg.delete();

                    message.delete();

                    console.log("Banned That User.")

                    collector.stop();


                    CaseModel.create({
                        _guildId: `${message.guildId}`,
                        _caseid: `${uniqid()}`,
                        _modid: `${message.author.tag}`,
                        _targetId: `${member?.user.tag}`,
                        _reason: 'For Being Baud',
                        _type: 'Ban',
                    })

                }

                if(m.content == 'no' || m.content =='n'){
                    const edit = new MessageEmbed()
                    .setDescription("Cancelled!");

                    msg.edit({embeds: [edit] });

                    message.delete();
                }

                else m.delete();
            })

        }

            const embed = new MessageEmbed()
            .setTitle("Unsuccessful Operation!")
            .setDescription(`${cancel}Only Admins (Threshold 3 - 5) Can Use This Command.`)

            return message.reply({embeds: [embed] });



	}
}

exports.UserCommand = UserCommand;