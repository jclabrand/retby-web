
/****************************************************************************************

	Copyright (c) 2019, Retby.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';

import MainView from '../views/main-view.jsx';

/****************************************************************************************/

class ViewsController {
	constructor() {
		this.assetsVersion = 'v=0.0.1';
	}

	main(req, res) {
		res.render(<MainView assetsVersion={this.assetsVersion}/>);
	}
}

/****************************************************************************************/

export default ViewsController;

/****************************************************************************************/
