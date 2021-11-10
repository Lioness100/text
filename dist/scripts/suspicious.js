"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sus = void 0;
const moongate_1 = require("./../Schemas/moongate");
async function sus(member) {
    const time = await moongate_1.JoinGateModel.findOne({ _guildId: `${member.guild.id}` });
    const time2 = time?._age ?? 3;
    if (member.user.avatarURL() == null) {
        return true;
    }
    if (Date.now() - member.user.createdTimestamp <= time2 * 24 * 60 * 60 * 1000) {
        return true;
    }
    return false;
}
exports.sus = sus;
//# sourceMappingURL=suspicious.js.map