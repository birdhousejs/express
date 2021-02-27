"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../core");
function Route(route) {
    return (target, value, descriptor) => {
        var _a, _b;
        if (!value && !descriptor) {
            const mainModule = core_1.MainModule;
            mainModule.setRoute(route, target.name);
            return target;
        }
        if (!target.methods) {
            target.methods = [];
        }
        const _predicate = (val) => val.name == value;
        const _index = (_b = (_a = target === null || target === void 0 ? void 0 : target.methods) === null || _a === void 0 ? void 0 : _a.findIndex) === null || _b === void 0 ? void 0 : _b.call(_a, _predicate);
        const _object = {
            name: value,
            route,
        };
        if (_index > -1) {
            const _foundMethod = target.methods.find(_predicate);
            target.methods[_index] = Object.assign(Object.assign({}, _foundMethod), _object);
        }
        else {
            if (Array.isArray(target.methods)) {
                target.methods = [...target.methods, _object];
            }
            else {
                target.methods = [_object];
            }
        }
        descriptor.enumerable = true;
    };
}
exports.default = Route;
//# sourceMappingURL=Route.js.map