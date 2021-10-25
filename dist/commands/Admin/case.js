"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommand = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const framework_1 = require("@sapphire/framework");
const discord_js_1 = require("discord.js");
const case_1 = require("./../../Schemas/case");
let UserCommand = class UserCommand extends framework_1.Command {
    async messageRun(message, args) {
        const string = await args.rest('string').catch(() => undefined);
        if (string == null) {
            return;
        }
        const guild = await case_1.CaseModel.findOne({ _guildId: `${message.guildId}`, _caseid: `${string}` }).lean();
        if (!case_1.CaseModel.exists({ _guildId: `${message.guildId}`, _caseid: `${string}` })) {
            const msh = new discord_js_1.MessageEmbed()
                .setTitle("An Error Has Occured!")
                .setDescription(`Case ID ${string} Was Not Found In The Database!`);
            return message.reply({ embeds: [msh] });
        }
        const embed = new discord_js_1.MessageEmbed()
            .setTitle(`Case ${string}`)
            .setDescription("Here Is Some Information On That Case!")
            .addField("Target:", `${guild?._targetId ?? "null"}`)
            .addField("Executor:", `${guild?._modid ?? "null"}`)
            .addField("Reason:", `${guild?._reason ?? "None Provided"}`)
            .addField("Type:", `${guild?._type ?? "null"}`);
        return message.reply({ embeds: [embed] });
    }
};
UserCommand = (0, tslib_1.__decorate)([
    (0, decorators_1.ApplyOptions)({
        name: 'case',
        description: 'This will fetch the case from the database.'
    })
], UserCommand);
exports.UserCommand = UserCommand;
//# sourceMappingURL=case.js.map