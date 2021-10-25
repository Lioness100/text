"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseModel = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
class Case {
    constructor() {
        Object.defineProperty(this, "_guildId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_caseid", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_modid", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_targetId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_reason", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
(0, tslib_1.__decorate)([
    (0, typegoose_1.prop)({ unique: false }),
    (0, tslib_1.__metadata)("design:type", String)
], Case.prototype, "_guildId", void 0);
(0, tslib_1.__decorate)([
    (0, typegoose_1.prop)({ unique: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Case.prototype, "_caseid", void 0);
(0, tslib_1.__decorate)([
    (0, typegoose_1.prop)({ unique: false }),
    (0, tslib_1.__metadata)("design:type", String)
], Case.prototype, "_modid", void 0);
(0, tslib_1.__decorate)([
    (0, typegoose_1.prop)({ unique: false }),
    (0, tslib_1.__metadata)("design:type", String)
], Case.prototype, "_targetId", void 0);
(0, tslib_1.__decorate)([
    (0, typegoose_1.prop)({ unique: false }),
    (0, tslib_1.__metadata)("design:type", String)
], Case.prototype, "_reason", void 0);
(0, tslib_1.__decorate)([
    (0, typegoose_1.prop)({ unique: false }),
    (0, tslib_1.__metadata)("design:type", String)
], Case.prototype, "_type", void 0);
exports.CaseModel = (0, typegoose_1.getModelForClass)(Case);
//# sourceMappingURL=case.js.map