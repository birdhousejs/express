import { MainModule } from "../core";

export default function Controller<T extends { new (...args: any[]): {} }>(constructor: T) {
	constructor.prototype.isController = true;
	const mainModule = MainModule;
	mainModule.controllers = [constructor, constructor.name];
	return constructor;
}
