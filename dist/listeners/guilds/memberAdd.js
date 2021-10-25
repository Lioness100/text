"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserListener = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const framework_1 = require("@sapphire/framework");
const discord_js_1 = require("discord.js");
require("@sapphire/plugin-editable-commands");
let UserListener = class UserListener extends framework_1.Listener {
    async run(previous, next) {
        const embed = new discord_js_1.MessageEmbed()
            .setTitle("DAUB!");
    }
};
UserListener = (0, tslib_1.__decorate)([
    (0, decorators_1.ApplyOptions)({ event: framework_1.Events.GuildMemberUpdate })
], UserListener);
exports.UserListener = UserListener;
//# sourceMappingURL=memberAdd.js.map