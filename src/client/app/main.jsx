
/****************************************************************************************

	Copyright (c) 2019, Retby.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loader from '../components/loader/loader';

import ErrorCast from '../gears/error-cast';

/****************************************************************************************/

class Main extends React.Component {
	constructor(props) {
		super(props);

		this.query = {
			bearer: gql`
				query q($trace: String!) {
					bearer(trace: $trace)
				}
			`,
			user: gql`
				query q {
					user { userName }
				}
			`
		};
	}

	bearerTrace() {
		let tracer = new Error();
		return tracer.stack;
	}

	render() {
		return (
			<Query query={this.query.bearer} variables={{ trace: this.bearerTrace() }} errorPolicy="all">
				{({ loading, error, data }) => {

					if(loading) return (<Loader size='20rem' modal={true}/>);
					if(error) return (<div>ERROR: {ErrorCast.messageFromGraphQLError(error)}</div>);

					return (
						<Query query={this.query.user} context={{bearer: data.bearer}} errorPolicy="all">
							{({ loading, error, data }) => {
								if(loading) return (<Loader size='20rem' modal={true}/>);
								if(error) return (<div>ERROR: {ErrorCast.messageFromGraphQLError(error)}</div>);

								window.user = data.user;

								return (
									<div className="workspace">
									</div>
								);
							}}
						</Query>
					);
				}}
			</Query>
		);
	}
}

/****************************************************************************************/

export default Main;

/****************************************************************************************/
