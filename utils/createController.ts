import express from "express";
import { mapRoute } from ".";

export default function createController(_controller) {
	const { isController, children, methods } = _controller;
	const _router = express.Router();
	if (isController && methods) {
		for (const prop of methods) {
			const { name, route, callback, middleware, method, args } = prop as any;
			if (name && route && method) {
				_router[method](mapRoute(route), async (req, res) => {
					let _args = [];
					if (args) {
						for (const [index, val] of Object.entries(args)) {
							if (val === "req") {
								_args[index] = req;
							} else if (val === "res") {
								_args[index] = res;
							} else if (val === "req.body") {
								_args[index] = req.body;
							} else if (val === "req.headers") {
								_args[index] = req.headers;
							} else if (val === "req.params") {
								_args[index] = req.params;
							}
						}
					}
					const _response = await _controller[name](..._args);
					if (_response) {
						res.send(_response);
					}
				});
			}
		}
	}
	return _router;
}
