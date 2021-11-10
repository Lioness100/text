import type { Snowflake } from 'discord.js';
declare class Case {
    _guildId: Snowflake;
    _caseid: string;
    _modid: string;
    _targetId: string;
    _reason: string;
    _type: string;
}
export declare const CaseModel: import("@typegoose/typegoose").ReturnModelType<typeof Case, import("@typegoose/typegoose/lib/types").BeAnObject>;
export {};
//# sourceMappingURL=case.d.ts.map