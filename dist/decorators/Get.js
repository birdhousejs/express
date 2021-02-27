"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Get(target, value, descriptor) {
    var _a, _b, _c;
    if (!target.methods) {
        target.methods = [];
    }
    const _predicate = (val) => val.name == value;
    const _index = (_b = (_a = target === null || target === void 0 ? void 0 : target.methods) === null || _a === void 0 ? void 0 : _a.findIndex) === null || _b === void 0 ? void 0 : _b.call(_a, _predicate);
    const _object = {
        name: value,
        method: "get",
    };
    if (_index > -1) {
        const _foundMethod = (_c = target === null || target === void 0 ? void 0 : target.methods) === null || _c === void 0 ? void 0 : _c.find(_predicate);
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
}
exports.default = Get;
//# sourceMappingURL=Get.js.map