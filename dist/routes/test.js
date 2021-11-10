"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const plugin_api_1 = require("@sapphire/plugin-api");
const test_1 = require("./../scripts/test");
let UserRoute = class UserRoute extends plugin_api_1.Route {
    async [plugin_api_1.methods.GET](_request, response) {
        const headers = _request.headers['x-key']?.toString();
        if (headers == null) {
            return response.json({ msg: "No Valid Headers We're Provided." });
        }
        const res = await (0, test_1.check)(headers);
        if (res) {
            return response.json({ msg: "Congrats! You Did It Jit!" });
        }
        else
            return response.json({ msg: "Nah, Nice try Jit." });
    }
    async [plugin_api_1.methods.POST](_request, response) {
        const headers = _request.headers['owner-key-only']?.toString();
        if (headers == null) {
            return response.json({ msg: "No Valid Headers We're Provided." });
        }
        if (headers == '5578a43e-98a1-43f1-a667-b455886830c9') {
            return response.json({ msg: "Ight You Valid, Wassup Then" });
        }
        else
            return response.json({ msg: "Jit, This Is The Owner Only, Good Luck Getting This Yk ;)" });
    }
};
UserRoute = (0, tslib_1.__decorate)([
    (0, decorators_1.ApplyOptions)({ route: '/api/hug' })
], UserRoute);
exports.UserRoute = UserRoute;
//# sourceMappingURL=test.js.map