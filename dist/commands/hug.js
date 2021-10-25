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
        const user = await args.rest('user').catch(() => undefined);
        if (user == null) {
            return;
        }
        await (0, axios_1.default)("https://api.otakugifs.xyz/gif?reaction=kiss", {
            headers: {
                'x-api-key': 'n2Th1GD7NbXOaY5yah5YPaqR4UqoPzbKEOt0MoJEMpBpRBFWrwnBybkbFNjP3pJOe9CvEwclwldtz2UC38Cict',
                format: 'gif'
            }
        }).catch(() => {
            const oops = new discord_js_1.MessageEmbed()
                .setTitle("Error!")
                .setDescription("My API Key Has Expired, Please Wait For A Quick Patch Update.");
            return message.reply({ embeds: [oops] });
        });
        const embed = new discord_js_1.MessageEmbed()
            .setDescription('daubs');
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