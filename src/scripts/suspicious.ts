import type { GuildMember } from 'discord.js'

export async function Sus(member: GuildMember){
    if(member.user.avatarURL() == null){
        return true;
    }

    if(Date.now() - member.user.createdTimestamp <= 259200000){
        return true;
    }

    return false;
}