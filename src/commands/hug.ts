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

        const user = await args.rest( 'user' ).catch( () => undefined)

        if(user == null){
            return;
        }


        await get("https://api.otakugifs.xyz/gif?reaction=kiss", {
            headers: {
                'x-api-key': 'n2Th1GD7NbXOaY5yah5YPaqR4UqoPzbKEOt0MoJEMpBpRBFWrwnBybkbFNjP3pJOe9CvEwclwldtz2UC38Cict',
                format: 'gif'
            }
        }).catch(() => {
            const oops = new MessageEmbed()
            .setTitle("Error!")
            .setDescription("My API Key Has Expired, Please Wait For A Quick Patch Update.");

            return message.reply({embeds: [oops] });
        });

        const embed = new MessageEmbed()
        .setDescription('daubs')

    
        

        return reply(message, {embeds: [embed] });

	}
}