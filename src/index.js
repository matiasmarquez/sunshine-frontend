import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import ApolloClient from "./config/apollo.client";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";

import App from "./main/App";
import GlobalStyle from "./main/themes/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./main/themes/theme";

ReactDOM.render(
	<ApolloProvider client={ApolloClient}>
		<ApolloHooksProvider client={ApolloClient}>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</ApolloHooksProvider>
	</ApolloProvider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
