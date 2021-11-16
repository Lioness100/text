"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const plugin_api_1 = require("@sapphire/plugin-api");
class UserRoute extends plugin_api_1.Route {
    constructor(context, options) {
        super(context, {
            ...options,
            route: '',
        });
    }
    [plugin_api_1.methods.GET](_request, response) {
        response.json({ msg: 'Not A Valid Endpoint, Valid Enpoints Are [/api/hug, /api/pp, /api/kiss, /api/cuddle]' });
    }
}
exports.UserRoute = UserRoute;
//# sourceMappingURL=default.js.map