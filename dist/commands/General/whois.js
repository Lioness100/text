"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommand = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const framework_1 = require("@sapphire/framework");
const discord_js_utilities_1 = require("@sapphire/discord.js-utilities");
const discord_js_1 = require("discord.js");
const discord_js_2 = require("discord.js");
let UserCommand = class UserCommand extends framework_1.Command {
    async messageRun(message, args) {
        const id = await this.container.client.emojis.cache.get('908440368993931264');
        const blank = await this.container.client.emojis.cache.get('908493968969453618');
        const arrow = await this.container.client.emojis.cache.get('908494729166094397');
        const region = await this.container.client.emojis.cache.get('908495430957010944');
        if (args.getFlags('g')) {
            let member = message.guild;
            const owner = await member?.fetchOwner();
            const paginated = new discord_js_utilities_1.PaginatedMessage({
                template: new discord_js_2.MessageEmbed()
            });
            paginated.addPageEmbed((embed) => embed.setTitle(`What Is ${member?.name}`)
                .addField(`${id} Basic Information:`, `${blank} ${arrow} ID: ${member?.id} \n ${blank} ${arrow} ${region} Region: ${owner}`))
                .addPageBuilder((builder) => builder //
                .setEmbeds([new discord_js_2.MessageEmbed().setImage(`${member?.bannerURL() ?? "https://itsuki-cdx.b-cdn.net/error/err.png"}`).setTitle("Guild Banner")]))
                .setActions([
                {
                    customId: '@sapphire/paginated-messages.firstPage',
                    style: 'PRIMARY',
                    emoji: '<:itsuki_doublearrow_right:908530599625654382>',
                    type: discord_js_1.Constants.MessageComponentTypes.BUTTON,
                    run: ({ handler }) => (handler.index = 0)
                },
            ]);
            paginated.run(message);
        }
    }
};
UserCommand = (0, tslib_1.__decorate)([
    (0, decorators_1.ApplyOptions)({
        name: 'whois',
        aliases: ['i'],
        description: 'This Will Fetch Information About A Given Member',
        flags: ['g', 'r'],
        prefixes: ['?']
    })
], UserCommand);
exports.UserCommand = UserCommand;
//# sourceMappingURL=whois.js.map