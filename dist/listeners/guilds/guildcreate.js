"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserListener = void 0;
const tslib_1 = require("tslib");
const discord_js_1 = require("discord.js");
const framework_1 = require("@sapphire/framework");
const decorators_1 = require("@sapphire/decorators");
let UserListener = class UserListener extends framework_1.Listener {
    async run(guild) {
        const owner = await guild.fetchOwner();
        const embed = new discord_js_1.MessageEmbed()
            .setTitle("Hello And Thank You For Choosing Itsuki!")
            .setDescription("If You Haven't Yet, Please Read [The Documentation](https://docs.itsuki.dev/) To Properly Configure Itsuki. Please Do Not Attempt To Do Anything Wrong With Itsuki Such As Spam The Commands, Or Spam The Owner Only Commands. If You Do So, This Guild Will Be Blacklisted, You Will Be Blacklisted, And Itsuki Will Leave The Server. In The Event You Have Been Blacklisted, You Can Join The Support Server [here](https://discord.com/invite/By5PjqAQKz) And Contact lying#0001")
            .setFooter("Please keep in mind, This Itsuki Bot (Itsuki Nakano#8605)[824331917402832946] Is The Only Itsuki bot Made by lying#0001 [546475331067052032] If you find any fraud bots, please do join the support server, and report that user.");
        await owner.send({ embeds: [embed] }).catch(async () => {
            const oops = new discord_js_1.MessageEmbed()
                .setTitle("An Error Has Occured!")
                .setDescription(`<@${owner.id}> cannot be DM'd`);
            const channel = await this.container.client.channels.fetch('906616878401736766');
            if (channel?.isText()) {
                channel.send({ content: `<@${owner.id}>`, embeds: [oops] });
            }
        });
    }
};
UserListener = (0, tslib_1.__decorate)([
    (0, decorators_1.ApplyOptions)({ event: framework_1.Events.GuildCreate })
], UserListener);
exports.UserListener = UserListener;
//# sourceMappingURL=guildcreate.js.map