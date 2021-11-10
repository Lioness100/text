import { Guild, MessageEmbed } from "discord.js";
import { Listener, Events, ListenerOptions } from "@sapphire/framework";
import { ApplyOptions } from "@sapphire/decorators";

@ApplyOptions<ListenerOptions>({ event: Events.GuildCreate })
export class UserListener extends Listener<typeof Events.GuildCreate> {
    public async run(guild: Guild) {

        const owner = await guild.fetchOwner();

        const embed = new MessageEmbed()
        .setTitle("Hello And Thank You For Choosing Itsuki!")
        .setDescription("If You Haven't Yet, Please Read [The Documentation](https://docs.itsuki.dev/) To Properly Configure Itsuki. Please Do Not Attempt To Do Anything Wrong With Itsuki Such As Spam The Commands, Or Spam The Owner Only Commands. If You Do So, This Guild Will Be Blacklisted, You Will Be Blacklisted, And Itsuki Will Leave The Server. In The Event You Have Been Blacklisted, You Can Join The Support Server [here](https://discord.com/invite/By5PjqAQKz) And Contact lying#0001")
        .setFooter("Please keep in mind, This Itsuki Bot (Itsuki Nakano#8605)[824331917402832946] Is The Only Itsuki bot Made by lying#0001 [546475331067052032] If you find any fraud bots, please do join the support server, and report that user.");

        await owner.send({embeds: [embed] }).catch(async () => {
            const oops = new MessageEmbed()
            .setTitle("An Error Has Occured!")
            .setDescription(`<@${owner.id}> cannot be DM'd`);

            const channel = await this.container.client.channels.fetch('906616878401736766')
            if (channel?.isText()) {
                channel.send({content: `<@${owner.id}>`, embeds: [oops]})
              }
        })
    }
}