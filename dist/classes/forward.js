"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ForwardAction {
    constructor() {
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: '▶️'
        });
    }
    run({ handler }) {
        if (handler.index !== handler.pages.length - 1)
            ++handler.index;
    }
}
//# sourceMappingURL=forward.js.map