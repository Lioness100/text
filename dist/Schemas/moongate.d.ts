import type { Snowflake } from 'discord.js';
declare class MoonGate {
    _guildId: Snowflake;
    _enabled: boolean;
    _DM: boolean;
    _BAF: boolean;
    _sus: boolean;
    _advert: boolean;
    _UBF: boolean;
    _noAv: boolean;
    _reqAge: boolean;
    _age: number;
}
export declare const JoinGateModel: import("@typegoose/typegoose").ReturnModelType<typeof MoonGate, import("@typegoose/typegoose/lib/types").BeAnObject>;
export {};
//# sourceMappingURL=moongate.d.ts.map