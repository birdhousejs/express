"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const _1 = require(".");
function createController(_controller) {
    const { isController, children, methods } = _controller;
    const _router = express_1.default.Router();
    if (isController && methods) {
        for (const prop of methods) {
            const { name, route, callback, middleware, method, args } = prop;
            if (name && route && method) {
                _router[method](_1.mapRoute(route), (req, res) => __awaiter(this, void 0, void 0, function* () {
                    let _args = [];
                    if (args) {
                        for (const [index, val] of Object.entries(args)) {
                            if (val === "req") {
                                _args[index] = req;
                            }
                            else if (val === "res") {
                                _args[index] = res;
                            }
                            else if (val === "req.body") {
                                _args[index] = req.body;
                            }
                            else if (val === "req.headers") {
                                _args[index] = req.headers;
                            }
                            else if (val === "req.params") {
                                _args[index] = req.params;
                            }
                        }
                    }
                    const _response = yield _controller[name](..._args);
                    if (_response) {
                        res.send(_response);
                    }
                }));
            }
        }
    }
    return _router;
}
exports.default = createController;
//# sourceMappingURL=createController.js.map