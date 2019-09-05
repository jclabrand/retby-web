
/****************************************************************************************

	Copyright (c) 2019, Retby.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';

import loader from './loader.jsx';

/****************************************************************************************/

class Loader extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return loader.call(this);
	}
}

/****************************************************************************************/

export default Loader;

/****************************************************************************************/
