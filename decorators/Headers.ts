export default function Headers(target, value, argIndex) {
	target.methods = {
		name: value,
		args: { [argIndex]: "req.headers" },
	};
}
