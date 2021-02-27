export default function mapRoute(parent: string, child?: string): string {
	if (!child) {
		return (
			"/" +
			parent
				?.split?.("/")
				?.filter((val) => val != "")
				?.join?.("/")
		);
	}
	return (
		"/" +
		parent
			?.split?.("/")
			?.filter((val) => val != "")
			?.join?.("/") +
		"/" +
		child
			?.split?.("/")
			?.filter?.((val) => val != "")
			?.join?.("/")
	);
}
