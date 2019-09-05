
/****************************************************************************************

	Copyright (c) 2019, Retby.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import http from 'http';
import path from 'path';

import express from 'express';
import jsonfile from 'jsonfile';
import { renderToString } from 'react-dom/server';

import ViewsController from '../controllers/views-controller';
import Routes from './routes.js';

/****************************************************************************************/

class App {
	constructor() {
		this.config = jsonfile.readFileSync(path.join(__dirname, 'config.json'));

		this.express = express();
		this.express.use(express.static(path.join(__dirname, 'assets')));
		this.express.use(this.onRequest.bind(this));
		
		this.init();
	}

	init() {
		this.controller = {
			views: new ViewsController
		};

		let WebRoutes = new Routes(this);

		this.express.use('/', WebRoutes.router);

		this.server = http.createServer(this.express);
		this.server.listen(this.config.port, this.onStart.bind(this));
	}

	onStart() {
		console.log('Server ready on port:', this.config.port);
	}

	onRequest(req, res, next) {
		res.render = component => res.send(renderToString(component));
		next();
	}
}

/****************************************************************************************/

export default App;

/****************************************************************************************/
