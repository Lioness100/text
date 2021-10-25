"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommand = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const framework_1 = require("@sapphire/framework");
const discord_js_1 = require("discord.js");
const config_1 = require("./../../Schemas/config");
let UserCommand = class UserCommand extends framework_1.Command {
    async messageRun(message, args) {
        const string = await args.rest('string').catch(() => undefined);
        if (string == undefined) {
            return;
        }
        const smh = string.replace(' ', '');
        if (smh.length > 2) {
            return;
        }
        if (args.getFlags('p')) {
            await config_1.GuildModel.findOneAndUpdate({ _id: `${message.guildId}`, prefix: smh });
            const embed = new discord_js_1.MessageEmbed()
                .setTitle("Success!")
                .setDescription("The Prefix Has Been Successfully Updated!");
            return message.reply({ embeds: [embed] });
        }
        return;
    }
};
UserCommand = (0, tslib_1.__decorate)([
    (0, decorators_1.ApplyOptions)({
        name: 'misc',
        aliases: ['m'],
        flags: ['p'],
        description: 'This Command Is For Miscelanious Things'
    })
], UserCommand);
exports.UserCommand = UserCommand;
//# sourceMappingURL=misc.js.map