import React, { Component } from 'react';
import { Header } from './Header';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import credentials from '../credentials.config';
import RepoSearch from './RepoSearch';
import './App.css';
require('dotenv').config();

// Apollo Client
const client = new ApolloClient({
	uri: process.env.GITHUB_API_URL || credentials.GITHUB_API_URL,
	headers: {
		authorization: `Bearer ${
			process.env.GITHUB_TOKEN || credentials.GITHUB_TOKEN
		}`,
	},
});
class App extends Component {
	public render() {
		return (
			<ApolloProvider client={client}>
				<div className="App">
					<header className="App-header">
						<Header />
					</header>
				</div>
			</ApolloProvider>
		);
	}
}
export default App;
