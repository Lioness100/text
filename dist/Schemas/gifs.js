"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GifsModel = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
class Gifs {
    constructor() {
        Object.defineProperty(this, "number", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "url", {
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
], Gifs.prototype, "number", void 0);
(0, tslib_1.__decorate)([
    (0, typegoose_1.prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Gifs.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, typegoose_1.prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Gifs.prototype, "url", void 0);
exports.GifsModel = (0, typegoose_1.getModelForClass)(Gifs);
//# sourceMappingURL=gifs.js.map