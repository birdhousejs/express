export default function Request(target, value, argIndex) {
	target.methods = {
		name: value,
		args: { [argIndex]: "req" },
	};
}
