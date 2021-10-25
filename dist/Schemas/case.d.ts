import type { Snowflake } from 'discord.js';
declare class Case {
    _guildId: Snowflake;
    _caseid: String;
    _modid: String;
    _targetId: String;
    _reason: String;
    _type: String;
}
export declare const CaseModel: import("@typegoose/typegoose").ReturnModelType<typeof Case, import("@typegoose/typegoose/lib/types").BeAnObject>;
export {};
//# sourceMappingURL=case.d.ts.map