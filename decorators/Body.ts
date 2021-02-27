export default function Body(target, value, argIndex) {
	target.methods = {
		name: value,
		args: { [argIndex]: "req.body" },
	};
}
