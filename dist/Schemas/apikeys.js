"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeyModel = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
class Keys {
    constructor() {
        Object.defineProperty(this, "_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_create", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "key", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
(0, tslib_1.__decorate)([
    (0, typegoose_1.prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], Keys.prototype, "_id", void 0);
(0, tslib_1.__decorate)([
    (0, typegoose_1.prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], Keys.prototype, "_create", void 0);
(0, tslib_1.__decorate)([
    (0, typegoose_1.prop)({ default: 'i!' }),
    (0, tslib_1.__metadata)("design:type", String)
], Keys.prototype, "key", void 0);
exports.ApiKeyModel = (0, typegoose_1.getModelForClass)(Keys);
//# sourceMappingURL=apikeys.js.map