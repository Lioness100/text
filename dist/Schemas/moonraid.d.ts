import type { Snowflake } from 'discord.js';
declare class MoonRaid {
    _guildId: Snowflake;
    _enabled: Boolean;
    _action: Number;
    _create: Boolean;
    _pfp: Boolean;
    _trigger: Number;
    _under: Number;
    _duration: Number;
}
export declare const MoonRaidModel: import("@typegoose/typegoose").ReturnModelType<typeof MoonRaid, import("@typegoose/typegoose/lib/types").BeAnObject>;
export {};
//# sourceMappingURL=moonraid.d.ts.map