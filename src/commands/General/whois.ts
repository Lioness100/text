import { ApplyOptions } from '@sapphire/decorators';
import { Command, CommandOptions, Args } from '@sapphire/framework';
import { PaginatedMessage } from '@sapphire/discord.js-utilities';
import { Constants, Message } from 'discord.js';
import { MessageEmbed } from 'discord.js';

@ApplyOptions<CommandOptions>({
	name: 'whois',
    aliases: ['i'],
	description: 'This Will Fetch Information About A Given Member',
    flags: ['g', 'r'],
    prefixes: ['?']
})
export class UserCommand extends Command {
	public async messageRun(message: Message, args: Args) {

        const id = await this.container.client.emojis.cache.get('908440368993931264');
        const blank = await this.container.client.emojis.cache.get('908493968969453618');
        const arrow = await this.container.client.emojis.cache.get('908494729166094397')
        const region = await this.container.client.emojis.cache.get('908495430957010944');


        if (args.getFlags('g')){
            let member = message.guild;
            const owner = await member?.fetchOwner();


            const paginated = new PaginatedMessage({
                template: new MessageEmbed()
            });

            paginated.addPageEmbed((embed) => 
            embed .setTitle(`What Is ${member?.name}`)
            .addField(`${id} Basic Information:`, `${blank} ${arrow} ID: ${member?.id} \n ${blank} ${arrow} ${region} Region: ${owner}`)
            )
            .addPageBuilder((builder) =>
				builder //
					.setEmbeds([new MessageEmbed().setImage(`${member?.bannerURL() ?? "https://itsuki-cdx.b-cdn.net/error/err.png"}`).setTitle("Guild Banner")])
			)
            .setActions([
                {
                    customId: '@sapphire/paginated-messages.firstPage',
                    style: 'PRIMARY',
                    emoji: '<:itsuki_doublearrow_right:908530599625654382>',
                    type: Constants.MessageComponentTypes.BUTTON,
                    run: ({ handler }) => (handler.index = 0)
                },
            ])
            paginated.run(message)
        }
	}
}