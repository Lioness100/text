"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sus = void 0;
async function Sus(member) {
    if (member.user.avatarURL() == null) {
        return true;
    }
    if (Date.now() - member.user.createdTimestamp <= 259200000) {
        return true;
    }
    return false;
}
exports.Sus = Sus;
//# sourceMappingURL=suspicious.js.map