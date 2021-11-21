"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const plugin_api_1 = require("@sapphire/plugin-api");
const check_1 = require("../scripts/check");
let UserRoute = class UserRoute extends plugin_api_1.Route {
    async [plugin_api_1.methods.GET](_request, response) {
        const headers = _request.headers['x-key']?.toString();
        if (headers == null) {
            return response.json({ msg: "No Valid Headers We're Provided." });
        }
        const res = await (0, check_1.check)(headers);
        if (res) {
            const sizes = ['8==>', '8=>', '8====>', '8==========>', '8===>', '8=====================>'];
            function random() {
                const res = sizes[Math.floor(Math.random() * sizes.length)];
                return res;
            }
            return response.json({ msg: random() });
        }
        else
            return response.json({ msg: "Nah, Nice try Jit." });
    }
    [plugin_api_1.methods.POST](_request, response) {
        response.json({ message: 'Hello World' });
    }
};
UserRoute = (0, tslib_1.__decorate)([
    (0, decorators_1.ApplyOptions)({ route: '/api/pp' })
], UserRoute);
exports.UserRoute = UserRoute;
//# sourceMappingURL=pp.js.map