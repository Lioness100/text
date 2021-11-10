import type { GuildMember } from 'discord.js'
import { JoinGateModel } from './../Schemas/moongate';


export async function sus(member: GuildMember){
    const time = await JoinGateModel.findOne({_guildId: `${member.guild.id}`});
    const time2 = time?._age ?? 3;
    
    if(member.user.avatarURL() == null){
        return true;
    }

    if(Date.now() - member.user.createdTimestamp <=  time2 * 24 * 60 * 60 * 1000){
        return true;
    }

    return false;
}