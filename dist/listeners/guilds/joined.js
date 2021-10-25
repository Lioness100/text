"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandDeniedListener = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const framework_1 = require("@sapphire/framework");
const suspicious_1 = require("./../../scripts/suspicious");
const moongate_1 = require("./../../Schemas/moongate");
let CommandDeniedListener = class CommandDeniedListener extends framework_1.Listener {
    async run(member) {
        const res = await moongate_1.JoinGateModel.findOne({ _guildId: `${member.guild.id}` });
        if (res?._enabled == false) {
            return;
        }
        if (member.user.bot == true) {
            if (res?._BAF == true) {
                const audit = (await member.guild.fetchAuditLogs()).entries.first();
                console.log(audit?.executor);
            }
        }
        const result = await (0, suspicious_1.Sus)(member);
        if (result == false) {
            return;
        }
        await member.ban({ reason: "Suspicious Account!" });
    }
};
CommandDeniedListener = (0, tslib_1.__decorate)([
    (0, decorators_1.ApplyOptions)({ event: framework_1.Events.GuildMemberAdd })
], CommandDeniedListener);
exports.CommandDeniedListener = CommandDeniedListener;
//# sourceMappingURL=joined.js.map