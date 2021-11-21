"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommand = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const framework_1 = require("@sapphire/framework");
const plugin_editable_commands_1 = require("@sapphire/plugin-editable-commands");
const discord_js_1 = require("discord.js");
const index_1 = (0, tslib_1.__importDefault)(require("./../../ms/index"));
let UserCommand = class UserCommand extends framework_1.Command {
    async messageRun(message, args) {
        const string = await args.rest('string').catch(() => null);
        if (string == null) {
            return (0, plugin_editable_commands_1.send)(message, "Invalid Property.");
        }
        const res = (0, index_1.default)(string);
        const daub = new discord_js_1.MessageEmbed()
            .setTitle("Maintennance Description:")
            .setDescription(`The Result From \`ms/index.ts\` is ${res}`);
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