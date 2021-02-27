export default function Params(target, value, argIndex) {
	target.methods = {
		name: value,
		args: { [argIndex]: "req.params" },
	};
}
