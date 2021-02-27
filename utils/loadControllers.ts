import { sync } from "glob";
import { dirname } from "path";

async function loadControllers() {
	const config = sync(dirname(__dirname).split("\\").join("/") + "/**/*.controller.ts");
	await config.map((file) => {
		import(file);
	});
	await console.log("Controllers loaded successfully!");
}

export default loadControllers;
