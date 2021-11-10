"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommand = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const framework_1 = require("@sapphire/framework");
const discord_js_1 = require("discord.js");
const mod_1 = require("./../../Schemas/mod");
const case_1 = require("./../../Schemas/case");
const uniqid_1 = (0, tslib_1.__importDefault)(require("uniqid"));
let UserCommand = class UserCommand extends framework_1.Command {
    async messageRun(message, args) {
        const member = await args.rest('member').catch(() => undefined);
        const guild = await mod_1.ModModel.findOne({ _id: `${message.guildId}` }).lean();
        const cancel = this.container.client.emojis.cache.get('902377399746957402');
        const author = message.member;
        if (author == null) {
            return;
        }
        if (author.roles.cache.has(`${guild?._adminid}`)) {
            const embed = new discord_js_1.MessageEmbed()
                .setTitle("Ban Confirmation:")
                .setDescription("Are You Sure You Want To Ban This User? If So, Reply With `yes // y`, else, reply with `no // n`")
                .setFooter("You Have 10 Seconds To Respond.");
            const msg = await message.reply({ embeds: [embed] });
            const collector = message.channel.createMessageCollector({ time: 10000 });
            collector.on('collect', m => {
                if (m.content == 'yes' || m.content == 'y') {
                    msg.delete();
                    message.delete();
                    console.log("Banned That User.");
                    collector.stop();
                    case_1.CaseModel.create({
                        _guildId: `${message.guildId}`,
                        _caseid: `${(0, uniqid_1.default)()}`,
                        _modid: `${message.author.tag}`,
                        _targetId: `${member?.user.tag}`,
                        _reason: 'For Being Baud',
                        _type: 'Ban',
                    });
                }
                if (m.content == 'no' || m.content == 'n') {
                    const edit = new discord_js_1.MessageEmbed()
                        .setDescription("Cancelled!");
                    msg.edit({ embeds: [edit] });
                    message.delete();
                }
                else
                    m.delete();
            });
        }
        const embed = new discord_js_1.MessageEmbed()
            .setTitle("Unsuccessful Operation!")
            .setDescription(`${cancel}Only Admins (Threshold 3 - 5) Can Use This Command.`);
        return message.reply({ embeds: [embed] });
    }
};
UserCommand = (0, tslib_1.__decorate)([
    (0, decorators_1.ApplyOptions)({
        name: 'ban',
        aliases: ['b'],
        prefixes: ['?'],
        flags: ['dm', 'p', 'r', 'h'],
        description: 'This Will Ban A User In The Best Possible Way Ever.'
    })
], UserCommand);
exports.UserCommand = UserCommand;
exports.UserCommand = UserCommand;
//# sourceMappingURL=ban.js.map