
/****************************************************************************************

	Copyright (c) 2019, Retby.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import express from 'express';

/****************************************************************************************/

class Routes {
	constructor(app) {
		this.router = express.Router();

		let views = app.controller.views;

		this.router.get('/', views.main);
	}
}

/****************************************************************************************/

export default Routes;

/****************************************************************************************/
