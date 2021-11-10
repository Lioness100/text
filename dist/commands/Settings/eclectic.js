"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommand = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const framework_1 = require("@sapphire/framework");
const discord_js_1 = require("discord.js");
const config_1 = require("../../Schemas/config");
const mod_1 = require("../../Schemas/mod");
let UserCommand = class UserCommand extends framework_1.Command {
    async messageRun(message, args) {
        const arg = await args.pick('string');
        if (args.getFlags('set')) {
            const number = await args.pick('number').catch(() => undefined);
            if (number == undefined) {
                return;
            }
            if (number == 1) {
                await config_1.GuildModel.findOneAndUpdate({ _id: `${message.guildId}`, prefix: arg });
                const embed = new discord_js_1.MessageEmbed()
                    .setTitle("Success!")
                    .setDescription("The Prefix Has Been Successfully Updated!");
                return message.reply({ embeds: [embed] });
            }
            if (number == 2) {
                if (arg == null) {
                    const eror = new discord_js_1.MessageEmbed()
                        .setTitle("Unsuccessful Operation!")
                        .setDescription("The Role Given Is Invalid.");
                    return message.reply({ embeds: [eror] });
                }
                await mod_1.ModModel.findOneAndUpdate({ _id: `${message.guildId}`, _modid: arg });
            }
            const daub = new discord_js_1.MessageEmbed()
                .setTitle("Unsuccessful Operation!")
                .setDescription("You Didn't Specify A Valid Set To Set It To.");
            return message.reply({ embeds: [daub] });
        }
        const embed = new discord_js_1.MessageEmbed()
            .setTitle("Unsuccessful Operation!")
            .setDescription("You Did Not Specify What To Do With That.");
        return message.reply({ embeds: [embed] });
    }
};
UserCommand = (0, tslib_1.__decorate)([
    (0, decorators_1.ApplyOptions)({
        name: 'eclectic',
        aliases: ['ec'],
        flags: ['set'],
        prefixes: ['?'],
        description: 'This Command Is For Miscelanious Things'
    })
], UserCommand);
exports.UserCommand = UserCommand;
//# sourceMappingURL=eclectic.js.map