"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const plugin_api_1 = require("@sapphire/plugin-api");
let UserRoute = class UserRoute extends plugin_api_1.Route {
    [plugin_api_1.methods.GET](_request, response) {
        response.json({ msg: 'Not A Valid Endpoint, Valid Endpoints Are [/api/hug, /api/pp, /api/kiss, /api/cuddle]' });
    }
};
UserRoute = (0, tslib_1.__decorate)([
    (0, decorators_1.ApplyOptions)({ route: '/api' })
], UserRoute);
exports.UserRoute = UserRoute;
//# sourceMappingURL=default.js.map