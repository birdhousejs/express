class MainModule {
	private _controllers: Array<any>;
	constructor() {
		this._controllers = [];
	}

	public get controllers(): any {
		return this._controllers || [];
	}

	public set controllers(value: any) {
		if (!this._controllers) {
			this._controllers = [];
		}
		const _predicate = (val) => val.name == value[1];
		const _index = this?._controllers?.findIndex?.(_predicate);
		if (_index > -1) {
			const _foundMethod = this._controllers.find(_predicate);
			_foundMethod.constructor = value[0];
			this._controllers[_index] = _foundMethod;
		} else {
			const _object = {
				constructor: value[0],
				name: value[1],
			};
			this._controllers = [...this._controllers, _object];
		}
	}

	public setRoute = (route, name): void => {
		if (!this._controllers) {
			this._controllers = [];
		}
		const _predicate = (val) => val.name == name;
		const _index = this?._controllers?.findIndex?.(_predicate);
		if (_index > -1) {
			const _foundMethod = this._controllers.find(_predicate);
			_foundMethod.route = route;
			this._controllers[_index] = _foundMethod;
		} else {
			this._controllers = [...this._controllers, { route: route, name: name }];
		}
	};
}

export default new MainModule();
