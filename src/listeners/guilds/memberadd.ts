import type { GuildMember } from "discord.js";
import { Listener, Events, ListenerOptions } from "@sapphire/framework";
import { sus } from './../../scripts/suspicious'
import { ApplyOptions } from "@sapphire/decorators";

@ApplyOptions<ListenerOptions>({ event: Events.GuildMemberAdd })
export class UserListener extends Listener<typeof Events.GuildMemberAdd> {
    public async run(member: GuildMember) {

        const result = await sus(member)

        if(result == true){
            console.log("MEMBER IS SUS YK");
        }
        else console.log("DAUB");
    }
}