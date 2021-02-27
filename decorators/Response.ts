export default function Response(target, value, argIndex) {
	target.methods = {
		name: value,
		args: { [argIndex]: "res" },
	};
}
