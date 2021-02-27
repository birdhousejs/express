export default function Get(target, value, descriptor?) {
	if (!target.methods) {
		target.methods = [];
	}
	const _predicate = (val) => val.name == value;
	const _index = target?.methods?.findIndex?.(_predicate);
	const _object = {
		name: value,
		method: "get",
	};
	if (_index > -1) {
		const _foundMethod = target?.methods?.find(_predicate);
		target.methods[_index] = { ..._foundMethod, ..._object };
	} else {
		if (Array.isArray(target.methods)) {
			target.methods = [...target.methods, _object];
		} else {
			target.methods = [_object];
		}
	}
}
