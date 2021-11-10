import { Guild } from "discord.js";
import { Listener, Events } from "@sapphire/framework";
export declare class UserListener extends Listener<typeof Events.GuildCreate> {
    run(guild: Guild): Promise<void>;
}
//# sourceMappingURL=guildcreate.d.ts.map