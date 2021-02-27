"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Request(target, value, argIndex) {
    target.methods = {
        name: value,
        args: { [argIndex]: "req" },
    };
}
exports.default = Request;
//# sourceMappingURL=Request.js.map