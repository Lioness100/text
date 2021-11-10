import type { GuildMember } from "discord.js";
import { Listener, Events } from "@sapphire/framework";
export declare class UserListener extends Listener<typeof Events.GuildMemberAdd> {
    run(member: GuildMember): Promise<void>;
}
//# sourceMappingURL=memberadd.d.ts.map