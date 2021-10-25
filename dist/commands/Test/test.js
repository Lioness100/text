"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommand = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const framework_1 = require("@sapphire/framework");
const plugin_editable_commands_1 = require("@sapphire/plugin-editable-commands");
const discord_js_1 = require("discord.js");
const suspicious_1 = require("./../../scripts/suspicious");
let UserCommand = class UserCommand extends framework_1.Command {
    async messageRun(message, args) {
        const member = await args.rest('member');
        const result = await (0, suspicious_1.Sus)(member);
        const daub = new discord_js_1.MessageEmbed()
            .setTitle("Heres The Results On The Script `suspicious.ts`")
            .setDescription(`Is This User Sus: ${result}`);
        return (0, plugin_editable_commands_1.send)(message, { embeds: [daub] });
    }
};
UserCommand = (0, tslib_1.__decorate)([
    (0, decorators_1.ApplyOptions)({
        name: 'test',
        description: 'Simply a test command.'
    })
], UserCommand);
exports.UserCommand = UserCommand;
//# sourceMappingURL=test.js.map