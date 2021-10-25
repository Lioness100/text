"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommand = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const framework_1 = require("@sapphire/framework");
const plugin_editable_commands_1 = require("@sapphire/plugin-editable-commands");
const discord_js_1 = require("discord.js");
let UserCommand = class UserCommand extends framework_1.Command {
    async messageRun(message, args) {
        const member = await args.rest('member').catch(() => undefined);
        if (member == null) {
            let member = await args.rest('user');
            const embed = new discord_js_1.MessageEmbed()
                .setDescription(`User Tag: \`${member.tag}\` \n User ID: \`${member.id}\``)
                .setImage(member.displayAvatarURL({ size: 4096 }));
            return message.reply({ embeds: [embed] });
        }
        const embed = new discord_js_1.MessageEmbed()
            .setDescription(`User Tag: \`${member.user.tag}\` \n User ID: \`${member.id}\``)
            .setImage(member.displayAvatarURL({ size: 4096 }));
        return (0, plugin_editable_commands_1.send)(message, { embeds: [embed] });
    }
};
UserCommand = (0, tslib_1.__decorate)([
    (0, decorators_1.ApplyOptions)({
        name: 'av',
        aliases: ['avatar'],
        description: 'This Will Bring Up Someones Avatar, Aswell As Basic Information'
    })
], UserCommand);
exports.UserCommand = UserCommand;
//# sourceMappingURL=av.js.map