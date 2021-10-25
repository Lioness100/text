"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommand = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const framework_1 = require("@sapphire/framework");
const plugin_editable_commands_1 = require("@sapphire/plugin-editable-commands");
const discord_js_1 = require("discord.js");
const moongate_1 = require("./../../Schemas/moongate");
let UserCommand = class UserCommand extends framework_1.Command {
    async messageRun(message) {
        await moongate_1.JoinGateModel.create({
            _guildId: `${message.guildId}`,
            _enabled: true,
            _DM: true,
            _BAF: true,
            _sus: true,
            _advert: true,
            _UBF: true,
            _noAv: true,
            _reqAge: true,
            _age: 3,
        }).catch(() => {
            console.log("This Server Already Has Join Gate Setup!");
            return;
        });
        const daub = new discord_js_1.MessageEmbed()
            .setTitle("Done!");
        await (0, plugin_editable_commands_1.send)(message, { embeds: [daub] });
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