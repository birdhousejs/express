import { MainModule } from ".";
import { mapRoute, createController, loadControllers } from "../utils";

export default async function init(app) {
	const mainModule = MainModule;
	try {
		await loadControllers();
	} catch (err) {
		console.error(err);
	} finally {
		if (Array.isArray(mainModule?.controllers)) {
			mainModule.controllers.forEach((controller) => {
				app.use(mapRoute(controller.route), createController(new controller.constructor()));
			});
		}
	}
}
