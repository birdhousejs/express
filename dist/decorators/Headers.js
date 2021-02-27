"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Headers(target, value, argIndex) {
    target.methods = {
        name: value,
        args: { [argIndex]: "req.headers" },
    };
}
exports.default = Headers;
//# sourceMappingURL=Headers.js.map