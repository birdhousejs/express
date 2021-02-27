"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Response(target, value, argIndex) {
    target.methods = {
        name: value,
        args: { [argIndex]: "res" },
    };
}
exports.default = Response;
//# sourceMappingURL=Response.js.map