"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../core");
function Controller(constructor) {
    constructor.prototype.isController = true;
    const mainModule = core_1.MainModule;
    mainModule.controllers = [constructor, constructor.name];
    return constructor;
}
exports.default = Controller;
//# sourceMappingURL=Controller.js.map