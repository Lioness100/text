"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyModel = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
class Key {
    constructor() {
        Object.defineProperty(this, "_key", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
(0, tslib_1.__decorate)([
    (0, typegoose_1.prop)({ unique: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Key.prototype, "_key", void 0);
exports.KeyModel = (0, typegoose_1.getModelForClass)(Key);
//# sourceMappingURL=key.js.map