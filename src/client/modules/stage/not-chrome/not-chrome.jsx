
/****************************************************************************************

	Copyright (c) 2019, Retby.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';

/****************************************************************************************/

function notChrome() {
	return (
		<div className="container">
			<div className="row" style={{marginBottom: '3rem'}}>
				<h3 style={{marginTop: '2rem'}}>
					<b>Página disponible sólo para Google Chrome</b>
				</h3>
			</div>
			<div className="row">
				<h5><b>Instale Google Chrome</b></h5>
				<p>¡Lo sentimos!, Ésta página sólo está disponible para navegador Google Chrome. Para ver ésta página, instale la última versión del navegador Google Chrome.</p>
			</div>
		</div>
	);
}

/****************************************************************************************/

export default notChrome;

/****************************************************************************************/
