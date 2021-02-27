"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MainModule {
    constructor() {
        this.setRoute = (route, name) => {
            var _a, _b;
            if (!this._controllers) {
                this._controllers = [];
            }
            const _predicate = (val) => val.name == name;
            const _index = (_b = (_a = this === null || this === void 0 ? void 0 : this._controllers) === null || _a === void 0 ? void 0 : _a.findIndex) === null || _b === void 0 ? void 0 : _b.call(_a, _predicate);
            if (_index > -1) {
                const _foundMethod = this._controllers.find(_predicate);
                _foundMethod.route = route;
                this._controllers[_index] = _foundMethod;
            }
            else {
                this._controllers = [...this._controllers, { route: route, name: name }];
            }
        };
        this._controllers = [];
    }
    get controllers() {
        return this._controllers || [];
    }
    set controllers(value) {
        var _a, _b;
        if (!this._controllers) {
            this._controllers = [];
        }
        const _predicate = (val) => val.name == value[1];
        const _index = (_b = (_a = this === null || this === void 0 ? void 0 : this._controllers) === null || _a === void 0 ? void 0 : _a.findIndex) === null || _b === void 0 ? void 0 : _b.call(_a, _predicate);
        if (_index > -1) {
            const _foundMethod = this._controllers.find(_predicate);
            _foundMethod.constructor = value[0];
            this._controllers[_index] = _foundMethod;
        }
        else {
            const _object = {
                constructor: value[0],
                name: value[1],
            };
            this._controllers = [...this._controllers, _object];
        }
    }
}
exports.default = new MainModule();
//# sourceMappingURL=MainModule.js.map