"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoonRaidModel = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
class MoonRaid {
    constructor() {
        Object.defineProperty(this, "_guildId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_enabled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_action", {
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
        Object.defineProperty(this, "_pfp", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_trigger", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_under", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_duration", {
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
], MoonRaid.prototype, "_guildId", void 0);
(0, tslib_1.__decorate)([
    (0, typegoose_1.prop)({ default: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], MoonRaid.prototype, "_enabled", void 0);
(0, tslib_1.__decorate)([
    (0, typegoose_1.prop)({ default: 1 }),
    (0, tslib_1.__metadata)("design:type", Number)
], MoonRaid.prototype, "_action", void 0);
(0, tslib_1.__decorate)([
    (0, typegoose_1.prop)({ default: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], MoonRaid.prototype, "_create", void 0);
(0, tslib_1.__decorate)([
    (0, typegoose_1.prop)({ default: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], MoonRaid.prototype, "_pfp", void 0);
(0, tslib_1.__decorate)([
    (0, typegoose_1.prop)({ default: 5 }),
    (0, tslib_1.__metadata)("design:type", Number)
], MoonRaid.prototype, "_trigger", void 0);
(0, tslib_1.__decorate)([
    (0, typegoose_1.prop)({ default: 5 }),
    (0, tslib_1.__metadata)("design:type", Number)
], MoonRaid.prototype, "_under", void 0);
(0, tslib_1.__decorate)([
    (0, typegoose_1.prop)({ default: 5 }),
    (0, tslib_1.__metadata)("design:type", Number)
], MoonRaid.prototype, "_duration", void 0);
exports.MoonRaidModel = (0, typegoose_1.getModelForClass)(MoonRaid);
//# sourceMappingURL=moonraid.js.map