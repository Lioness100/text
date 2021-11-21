"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildModel = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
class Guild {
    constructor() {
        Object.defineProperty(this, "_id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "prefix", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "mutedId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "mainId", {
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
], Guild.prototype, "_id", void 0);
(0, tslib_1.__decorate)([
    (0, typegoose_1.prop)({ default: 'i!' }),
    (0, tslib_1.__metadata)("design:type", String)
], Guild.prototype, "prefix", void 0);
(0, tslib_1.__decorate)([
    (0, typegoose_1.prop)({ default: 0 }),
    (0, tslib_1.__metadata)("design:type", String)
], Guild.prototype, "mutedId", void 0);
(0, tslib_1.__decorate)([
    (0, typegoose_1.prop)({ default: 0 }),
    (0, tslib_1.__metadata)("design:type", String)
], Guild.prototype, "mainId", void 0);
exports.GuildModel = (0, typegoose_1.getModelForClass)(Guild);
//# sourceMappingURL=config.js.map