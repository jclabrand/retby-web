
/****************************************************************************************

	Copyright (c) 2019, Retby.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

class ErrorCast {
	static messageFromGraphQLError(error) {
		let str = error.message;

		return str.substring(str.indexOf('"') + 1, str.length - 1);
	}
}

/****************************************************************************************/

export default ErrorCast;

/****************************************************************************************/
