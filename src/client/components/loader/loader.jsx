
/****************************************************************************************

	Copyright (c) 2019, Retby.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';

/****************************************************************************************/

function loader() {
	let style = {width: this.props.size, height: this.props.size};

	return this.props.modal ?
		(
			<div className="loader-modal">
				<div className="loader-ripple" style={style}><div></div><div></div></div>
			</div>
		)
		:
		(
			<div>
				<div className="loader-ripple" style={style}><div></div><div></div></div>
			</div>
		);
}

/****************************************************************************************/

export default loader;

/****************************************************************************************/
