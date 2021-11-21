import { ApplyOptions } from '@sapphire/decorators';
import { Command, CommandOptions, Args } from '@sapphire/framework';
import { send } from '@sapphire/plugin-editable-commands';
import type { Message } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import axios from 'axios';

@ApplyOptions<CommandOptions>({
	name: 'translate',
    aliases: ['tr'],
	description: 'This Will Translate To Any Available Language.'
})
export class UserCommand extends Command {
	public async messageRun(message: Message, args: Args) {
        
        await message.channel.sendTyping();
        
        const langfrom = await args.pick( 'string' );

        const langto = await args.pick( 'string' );

        const tr = await args.rest( 'string' );

        const result = await axios({
            method: 'post',
            url: 'https://dev-api.itranslate.com/translation/v2/',
            headers: {
                'Authorization': 'Bearer dea7fcf6-2606-47c9-8985-29d787d5d4af',
                'Content-Type': 'application/json'
            },
            data: {
                "source": {
                    "dialect": langfrom, "text": tr
                },
                "target": {
                    "dialect": langto
                }
            }
        })

        const embed = new MessageEmbed()
        .setTitle(`Translated From ${langfrom} To ${langto}`)
        .setDescription(`\`\`\`${result.data.target.text}\`\`\``)
        .setFooter(`Powered By TextAPI || Latency: ${result.data.times.total_time}`);

        
        return send(message, {embeds: [embed] });
	}
}