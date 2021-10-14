"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sus = void 0;
const date = new Date();
async function Sus(user) {
    if (user.avatarURL() == null) {
        return true;
    }
    if (Date.now() - user.createdAt.getDay() > date.getDay()) {
        return true;
    }
    return false;
}
exports.Sus = Sus;
//# sourceMappingURL=suspicious.js.map