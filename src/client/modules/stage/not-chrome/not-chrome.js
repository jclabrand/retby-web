
/****************************************************************************************

	Copyright (c) 2019, Retby.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';

import notChrome from './not-chrome.jsx';

/****************************************************************************************/

class NotChrome extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return notChrome.call(this);
	}
}

/****************************************************************************************/

export default NotChrome;

/****************************************************************************************/
