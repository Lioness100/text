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
        await message.channel.sendTyping();
        const langfrom = await args.pick('string');
        const langto = await args.pick('string');
        const tr = await args.rest('string');
        const result = await (0, axios_1.default)({
            method: 'post',
            url: 'https://dev-api.itranslate.com/translation/v2/',
            headers: {
                'Authorization': 'Bearer dea7fcf6-2606-47c9-8985-29d787d5d4af',
                'Content-Type': 'application/json'
            },
            data: {
                "source": {
                    "dialect": langfrom, "text": tr
                },
                "target": {
                    "dialect": langto
                }
            }
        });
        const embed = new discord_js_1.MessageEmbed()
            .setTitle(`Translated From ${langfrom} To ${langto}`)
            .setDescription(`\`\`\`${result.data.target.text}\`\`\``)
            .setFooter(`Powered By TextAPI || Latency: ${result.data.times.total_time}`);
        return (0, plugin_editable_commands_1.send)(message, { embeds: [embed] });
    }
};
UserCommand = (0, tslib_1.__decorate)([
    (0, decorators_1.ApplyOptions)({
        name: 'translate',
        aliases: ['tr'],
        description: 'This Will Translate To Any Available Language.'
    })
], UserCommand);
exports.UserCommand = UserCommand;
//# sourceMappingURL=translate.js.map