import type { GuildMember } from "discord.js";
import { MessageEmbed } from "discord.js";
import { Listener, Events, ListenerOptions } from "@sapphire/framework";
import { sus } from './../../scripts/suspicious'
import { ApplyOptions } from "@sapphire/decorators";
import { MoonRaidModel } from "#root/src/Schemas/moonraid";
import { GuildModel } from '#root/src/Schemas/config'

@ApplyOptions<ListenerOptions>({ event: Events.GuildMemberAdd })
export class UserListener extends Listener<typeof Events.GuildMemberAdd> {
    public async run(member: GuildMember) {

        const result = await sus(member)

        if(result == true){
            const config = await MoonRaidModel.findOne({guildId: `${member.guild.id}`})
            const config2 = await GuildModel.findOne({guildId: `${member.guild.id}`});

            const embed = new MessageEmbed()
            .setTitle(`You've Been Muted In ${member.guild.name}`)
            .setDescription("Reason: Threat Threshold Has Been Reached.");

            const action = config?._action;
            const role = config2?.mutedId;

            if(role == '0'){
                const go = await member.guild.fetchOwner()
                await go.send("You Need To Set A Muted Role in The Database.");
            }

            if(action == 1){
                const muted = await member.roles.add(`${role}`, "Member Has Reached The Threat Threshold")
                try{
                muted.send({
                    embeds: [embed]
                })
            } catch (err){
                console.log("User Cannot Be DM'd")
            }
            }
        }
        else console.log("DAUB");
    }
}