"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const plugin_api_1 = require("@sapphire/plugin-api");
let UserRoute = class UserRoute extends plugin_api_1.Route {
    async [plugin_api_1.methods.GET](_request, response) {
        const amount = await this.container.client.guilds.cache.size;
        response.json({ message: `Ah, You've Found This Mysterious Page Eh? Well The Server Count Is ${amount}` });
    }
};
UserRoute = (0, tslib_1.__decorate)([
    (0, decorators_1.ApplyOptions)({ route: '/api/bot/guilds' })
], UserRoute);
exports.UserRoute = UserRoute;
//# sourceMappingURL=guildcount.js.map