
/****************************************************************************************

	Copyright (c) 2019, Retby.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';
import ReactDOM from'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';

import Main from './main.jsx';
import NotChrome from '../modules/stage/not-chrome/not-chrome';

import config from './config';
import '../styles/app.scss';

/****************************************************************************************/

class App {
	constructor() {
		document.addEventListener('DOMContentLoaded', this.onDOMContentLoaded.bind(this));

		const authLink = setContext((_, context) => {
			const token = localStorage.getItem('authorization');

			return {
				headers: {
					authorization: `${context.bearer} ${token}`,
				}
			};
		});

		this.client = new ApolloClient({
			link: authLink.concat(new HttpLink({uri: config.GRAPHQL_API_URL})),
			cache: new InMemoryCache(),
		});
	}

	onDOMContentLoaded() {
		this.mainSection = window.document.getElementById('app-main');

		this.render();
	}

	render() {
		return (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) ?
			ReactDOM.render(
				<ApolloProvider client={this.client}>
					<BrowserRouter>
						<Main/>
					</BrowserRouter>
				</ApolloProvider>,
				this.mainSection
			)
			:
			ReactDOM.render(<NotChrome/>, this.mainSection);
	}
}

/****************************************************************************************/

export default App;

/****************************************************************************************/
