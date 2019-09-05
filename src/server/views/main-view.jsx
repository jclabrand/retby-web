
/****************************************************************************************

	Copyright (c) 2019, Retby.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';

/****************************************************************************************/

class MainView extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<html>
				<head>
					<title>Retby</title>
					
					<meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1, maximum-scale=1"/>
					
					<link rel="shortcut icon" href="/icons/favicon.ico"/>
					<link rel="stylesheet" type="text/css" href={`/css/retby.min.css?${this.props.assetsVersion}`}/>
				</head>
				<body>
					<div id="app-main"></div>

					<script id="retby-src" src={`/js/retby.min.js?${this.props.assetsVersion}`}/>
				</body>
			</html>
		);
	}
}

/****************************************************************************************/

export default MainView;

/****************************************************************************************/
