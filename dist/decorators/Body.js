"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Body(target, value, argIndex) {
    target.methods = {
        name: value,
        args: { [argIndex]: "req.body" },
    };
}
exports.default = Body;
//# sourceMappingURL=Body.js.map