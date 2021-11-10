"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = void 0;
const key_1 = require("../Schemas/key");
async function check(key) {
    const dub = await key_1.KeyModel.findOne({ _key: `${key}` }).lean();
    if (dub?._key == undefined) {
        return false;
    }
    return true;
}
exports.check = check;
//# sourceMappingURL=check.js.map