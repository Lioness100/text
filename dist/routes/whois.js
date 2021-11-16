"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const plugin_api_1 = require("@sapphire/plugin-api");
let UserRoute = class UserRoute extends plugin_api_1.Route {
    async [plugin_api_1.methods.GET](_request, response) {
        _request.params == { guild: '?g', member: '?m' };
        const params = _request.params;
        if (params.guild == ':guild') {
            return response.json({ msg: "Please Provide A Valid Guild ID." });
        }
        if (params.member == ':member') {
            return response.json({ msg: "Please Enter A Valid Member" });
        }
        const guild = await this.container.client.guilds.cache.get(`${params.guild}`);
        console.log(params.guild);
        if (guild == undefined) {
            return response.json({ msg: "This Guild Cannot Be Found. Ensure The Bot Is Within That Guild." });
        }
        const member = await guild.members.fetch(params.member).catch(async () => {
            return response.json({ msg: "That Member Cannot Be Found. Ensure The Bot Is Within That Guild." });
        });
        return response.json({ msg: `Simply, That member is ${member?.user.tag}` });
    }
};
UserRoute = (0, tslib_1.__decorate)([
    (0, decorators_1.ApplyOptions)({ route: '/api/bot/' })
], UserRoute);
exports.UserRoute = UserRoute;
//# sourceMappingURL=whois.js.map