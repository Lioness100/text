"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommand = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const framework_1 = require("@sapphire/framework");
const plugin_editable_commands_1 = require("@sapphire/plugin-editable-commands");
const discord_js_1 = require("discord.js");
const suspicious_1 = require("./../scripts/suspicious");
let UserCommand = class UserCommand extends framework_1.Command {
    async run(message, args) {
        const user = await args.rest('user');
        const result = await (0, suspicious_1.Sus)(user);
        if (result == true) {
            console.log("DAUb");
        }
        if (result == false) {
            console.log("saud");
        }
        const embed = new discord_js_1.MessageEmbed().setTitle("hi");
        return (0, plugin_editable_commands_1.reply)(message, { embeds: [embed] });
    }
};
UserCommand = (0, tslib_1.__decorate)([
    (0, decorators_1.ApplyOptions)({
        name: 'hug',
        description: 'gives a hug to a user'
    })
], UserCommand);
exports.UserCommand = UserCommand;
//# sourceMappingURL=hug.js.map