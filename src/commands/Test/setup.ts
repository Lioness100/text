import { ApplyOptions } from '@sapphire/decorators';
import { Command, CommandOptions } from '@sapphire/framework';
import { send } from '@sapphire/plugin-editable-commands';
import type { Message } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { GuildModel } from './../../Schemas/config'

@ApplyOptions<CommandOptions>({
	name: 'setup',
	description: 'Simply a test command.'
})
export class UserCommand extends Command {
	public async messageRun(message: Message) {
        // const cancel = await this.container.client.emojis.cache.get('908440343068950564')
        // const success = await this.container.client.emojis.cache.get('908439898984431646')

        const starting = new MessageEmbed()
        .setTitle("Thank You For Using Itsuki!")
        .setDescription("The Setup Process Will Now Begin...")

        await send(message, {embeds: [starting]})

        // const config = new MessageEmbed()
        // .setTitle("Configuration:")
        // .setDescription(`${cancel} Standard Guild Configuration`)

        // const msg = await send(message, {embeds: [config] });

        if(await GuildModel.exists({
            _guildId: `${message.guildId}`
        })){
        }

       return;


	}
}