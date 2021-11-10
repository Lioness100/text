"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserListener = void 0;
const tslib_1 = require("tslib");
const framework_1 = require("@sapphire/framework");
const suspicious_1 = require("./../../scripts/suspicious");
const decorators_1 = require("@sapphire/decorators");
let UserListener = class UserListener extends framework_1.Listener {
    async run(member) {
        const result = await (0, suspicious_1.sus)(member);
        if (result == true) {
            console.log("MEMBER IS SUS YK");
        }
        else
            console.log("DAUB");
    }
};
UserListener = (0, tslib_1.__decorate)([
    (0, decorators_1.ApplyOptions)({ event: framework_1.Events.GuildMemberAdd })
], UserListener);
exports.UserListener = UserListener;
//# sourceMappingURL=memberadd.js.map