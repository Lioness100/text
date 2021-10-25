import { ApplyOptions } from '@sapphire/decorators';
import { Events, Listener, ListenerOptions } from '@sapphire/framework';
import type { GuildMember } from 'discord.js';
import { Sus } from './../../scripts/suspicious'
import { JoinGateModel } from './../../Schemas/moongate';

@ApplyOptions<ListenerOptions>({ event: Events.GuildMemberAdd })
export class CommandDeniedListener extends Listener<typeof Events.GuildMemberAdd> {
  public async run(member: GuildMember) {

    const res = await JoinGateModel.findOne({_guildId: `${member.guild.id}`});

    if(res?._enabled == false){
      return;
    }

    if(member.user.bot == true){
      if(res?._BAF == true){
        member.guild.fetchAuditLogs()
    
      }
    }
    
    const result = await Sus(member)

    if(result == false){
      return;
    }

    await member.ban({reason: "Suspicious Account!"});
  }
}