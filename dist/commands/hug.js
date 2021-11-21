"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommand = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const framework_1 = require("@sapphire/framework");
const plugin_editable_commands_1 = require("@sapphire/plugin-editable-commands");
const discord_js_1 = require("discord.js");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
let UserCommand = class UserCommand extends framework_1.Command {
    async messageRun(message, args) {
        const user = await args.rest('member').catch(() => undefined);
        if (user == null) {
            return;
        }
        const result = await (0, axios_1.default)("http://localhost:4000/api/hug", {
            headers: {
                'x-key': '8513c62d-f384-4533-802f-b904886b5e6c'
            }
        });
        const embed = new discord_js_1.MessageEmbed()
            .setDescription(`${message.author.username} Has Hugged ${user.user.username}`)
            .setImage(`${result.data.msg}`)
            .setFooter("Powered By TextAPI");
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