import type { User } from 'discord.js'
const date = new Date();

export async function Sus(user: User){
    if(user.avatarURL() == null){
        return true;
    }

    if(Date.now() - user.createdAt.getDay() > date.getDay()){
        return true
    }
    return false;
}