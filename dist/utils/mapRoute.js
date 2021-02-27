"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mapRoute(parent, child) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    if (!child) {
        return ("/" +
            ((_d = (_c = (_b = (_a = parent === null || parent === void 0 ? void 0 : parent.split) === null || _a === void 0 ? void 0 : _a.call(parent, "/")) === null || _b === void 0 ? void 0 : _b.filter((val) => val != "")) === null || _c === void 0 ? void 0 : _c.join) === null || _d === void 0 ? void 0 : _d.call(_c, "/")));
    }
    return ("/" +
        ((_h = (_g = (_f = (_e = parent === null || parent === void 0 ? void 0 : parent.split) === null || _e === void 0 ? void 0 : _e.call(parent, "/")) === null || _f === void 0 ? void 0 : _f.filter((val) => val != "")) === null || _g === void 0 ? void 0 : _g.join) === null || _h === void 0 ? void 0 : _h.call(_g, "/")) +
        "/" +
        ((_o = (_m = (_l = (_k = (_j = child === null || child === void 0 ? void 0 : child.split) === null || _j === void 0 ? void 0 : _j.call(child, "/")) === null || _k === void 0 ? void 0 : _k.filter) === null || _l === void 0 ? void 0 : _l.call(_k, (val) => val != "")) === null || _m === void 0 ? void 0 : _m.join) === null || _o === void 0 ? void 0 : _o.call(_m, "/")));
}
exports.default = mapRoute;
//# sourceMappingURL=mapRoute.js.map