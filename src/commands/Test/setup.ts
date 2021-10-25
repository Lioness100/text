import { ApplyOptions } from '@sapphire/decorators';
import { Command, CommandOptions } from '@sapphire/framework';
import { send } from '@sapphire/plugin-editable-commands';
import type { Message } from 'discord.js';
import { MessageEmbed } from 'discord.js';
import { JoinGateModel } from './../../Schemas/moongate';

@ApplyOptions<CommandOptions>({
	name: 'setup',
	description: 'Simply a test command.'
})
export class UserCommand extends Command {
	public async messageRun(message: Message) {

        await JoinGateModel.create({
            _guildId: `${message.guildId}`,
            _enabled: true,
            _DM: true,
            _BAF: true,
            _sus: true,
            _advert: true,
            _UBF: true,
            _noAv: true,
            _reqAge: true,
            _age: 3,
        }).catch(() =>{
            console.log("This Server Already Has Join Gate Setup!")
            return;
        })

		
		const daub = new MessageEmbed()
        .setTitle("Done!");

		await send(message, {embeds: [daub] });
	}
}