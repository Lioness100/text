"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserListener = void 0;
const tslib_1 = require("tslib");
const discord_js_1 = require("discord.js");
const framework_1 = require("@sapphire/framework");
const suspicious_1 = require("./../../scripts/suspicious");
const decorators_1 = require("@sapphire/decorators");
const moonraid_1 = require("#root/src/Schemas/moonraid");
const config_1 = require("#root/src/Schemas/config");
let UserListener = class UserListener extends framework_1.Listener {
    async run(member) {
        const result = await (0, suspicious_1.sus)(member);
        if (result == true) {
            const config = await moonraid_1.MoonRaidModel.findOne({ guildId: `${member.guild.id}` });
            const config2 = await config_1.GuildModel.findOne({ guildId: `${member.guild.id}` });
            const embed = new discord_js_1.MessageEmbed()
                .setTitle(`You've Been Muted In ${member.guild.name}`)
                .setDescription("Reason: Threat Threshold Has Been Reached.");
            const action = config?._action;
            const role = config2?.mutedId;
            if (role == '0') {
                const go = await member.guild.fetchOwner();
                await go.send("You Need To Set A Muted Role in The Database.");
            }
            if (action == 1) {
                const muted = await member.roles.add(`${role}`, "Member Has Reached The Threat Threshold");
                try {
                    muted.send({
                        embeds: [embed]
                    });
                }
                catch (err) {
                    console.log("User Cannot Be DM'd");
                }
            }
        }
        else
            console.log("DAUB");
    }
};
UserListener = (0, tslib_1.__decorate)([
    (0, decorators_1.ApplyOptions)({ event: framework_1.Events.GuildMemberAdd })
], UserListener);
exports.UserListener = UserListener;
//# sourceMappingURL=memberadd.js.map