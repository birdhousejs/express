"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Params(target, value, argIndex) {
    target.methods = {
        name: value,
        args: { [argIndex]: "req.params" },
    };
}
exports.default = Params;
//# sourceMappingURL=Params.js.map