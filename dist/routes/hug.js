"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const tslib_1 = require("tslib");
const decorators_1 = require("@sapphire/decorators");
const plugin_api_1 = require("@sapphire/plugin-api");
const check_1 = require("../scripts/check");
const gifs_1 = require("../Schemas/gifs");
const uuid4_1 = (0, tslib_1.__importDefault)(require("uuid4"));
const utils_1 = require("../lib/api/utils");
const seconds_1 = require("../lib/utils/common/seconds");
let UserRoute = class UserRoute extends plugin_api_1.Route {
    async [_a = plugin_api_1.methods.GET](_request, response) {
        const headers = _request.headers['x-key']?.toString();
        if (headers == null) {
            return response.json({ msg: "No Valid Headers We're Provided." });
        }
        const res = await (0, check_1.check)(headers);
        if (res) {
            const giff = await gifs_1.GifsModel.aggregate([{ $sample: { size: 1 } }]);
            return response.json({ msg: giff[0].url });
        }
        else
            return response.json({ msg: "Nah, Nice try Jit." });
    }
    async [plugin_api_1.methods.POST](_request, response) {
        const headers = _request.headers['owner-key-only']?.toString();
        const req = _request.headers['file-url']?.toString();
        if (headers == null) {
            return response.json({ msg: "No Valid Headers We're Provided." });
        }
        if (headers == '5578a43e-98a1-43f1-a667-b455886830c9') {
            if (req == null) {
                return response.json({ msg: "Please Provide A URL For The GIF." });
            }
            await gifs_1.GifsModel.create({
                number: (0, uuid4_1.default)(),
                type: 'hug',
                url: req
            });
            return response.json({ msg: "Uploaded New Gif. Can Now Be Used!" });
        }
        else
            return response.json({ msg: "Jit, This Is The Owner Only, Good Luck Getting This Yk ;)" });
    }
};
(0, tslib_1.__decorate)([
    (0, utils_1.ratelimit)((0, seconds_1.seconds)(1), 1, false),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [plugin_api_1.ApiRequest, plugin_api_1.ApiResponse]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UserRoute.prototype, _a, null);
UserRoute = (0, tslib_1.__decorate)([
    (0, decorators_1.ApplyOptions)({ route: '/api/hug' })
], UserRoute);
exports.UserRoute = UserRoute;
//# sourceMappingURL=hug.js.map