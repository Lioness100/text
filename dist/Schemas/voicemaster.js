"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceMaster = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
class VM {
    constructor() {
        Object.defineProperty(this, "guildId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "vcid", {
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
], VM.prototype, "guildId", void 0);
(0, tslib_1.__decorate)([
    (0, typegoose_1.prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], VM.prototype, "vcid", void 0);
exports.VoiceMaster = (0, typegoose_1.getModelForClass)(VM);
//# sourceMappingURL=voicemaster.js.map