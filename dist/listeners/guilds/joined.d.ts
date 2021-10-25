import { Events, Listener } from '@sapphire/framework';
import type { GuildMember } from 'discord.js';
export declare class CommandDeniedListener extends Listener<typeof Events.GuildMemberAdd> {
    run(member: GuildMember): Promise<void>;
}
//# sourceMappingURL=joined.d.ts.map