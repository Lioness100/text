"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommand = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const framework_1 = require("@sapphire/framework");
const plugin_editable_commands_1 = require("@sapphire/plugin-editable-commands");
const discord_js_1 = require("discord.js");
let UserCommand = class UserCommand extends framework_1.Command {
    async run(message) {
        const daub = new discord_js_1.MessageEmbed()
            .setTitle("Hello!")
            .setDescription(`The Ping Is Immaculate! Coming In At ${this.container.client.ws.ping}`);
        return (0, plugin_editable_commands_1.send)(message, { embeds: [daub] });
    }
};
UserCommand = (0, tslib_1.__decorate)([
    (0, decorators_1.ApplyOptions)({
        name: 'ping',
        description: 'ping pong'
    })
], UserCommand);
exports.UserCommand = UserCommand;
//# sourceMappingURL=ping.js.map