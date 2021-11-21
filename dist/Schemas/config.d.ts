import type { Snowflake } from 'discord.js';
declare class Guild {
    _id: Snowflake;
    prefix: string;
    mutedId: Snowflake;
    mainId: Snowflake;
}
export declare const GuildModel: import("@typegoose/typegoose").ReturnModelType<typeof Guild, import("@typegoose/typegoose/lib/types").BeAnObject>;
export {};
//# sourceMappingURL=config.d.ts.map