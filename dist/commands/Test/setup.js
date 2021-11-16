"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommand = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const framework_1 = require("@sapphire/framework");
const plugin_editable_commands_1 = require("@sapphire/plugin-editable-commands");
const discord_js_1 = require("discord.js");
const config_1 = require("./../../Schemas/config");
let UserCommand = class UserCommand extends framework_1.Command {
    async messageRun(message) {
        // const cancel = await this.container.client.emojis.cache.get('908440343068950564')
        // const success = await this.container.client.emojis.cache.get('908439898984431646')
        const starting = new discord_js_1.MessageEmbed()
            .setTitle("Thank You For Using Itsuki!")
            .setDescription("The Setup Process Will Now Begin...");
        await (0, plugin_editable_commands_1.send)(message, { embeds: [starting] });
        // const config = new MessageEmbed()
        // .setTitle("Configuration:")
        // .setDescription(`${cancel} Standard Guild Configuration`)
        // const msg = await send(message, {embeds: [config] });
        if (await config_1.GuildModel.exists({
            _guildId: `${message.guildId}`
        })) {
        }
        return;
    }
};
UserCommand = (0, tslib_1.__decorate)([
    (0, decorators_1.ApplyOptions)({
        name: 'setup',
        description: 'Simply a test command.'
    })
], UserCommand);
exports.UserCommand = UserCommand;
//# sourceMappingURL=setup.js.map