import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";

const client = new ApolloClient({
	link: ApolloLink.from([
		onError(({ graphQLErrors, networkError }) => {
			if (networkError) console.log(`[Network error]: ${networkError}`);
			console.log(graphQLErrors);
		}),
		new HttpLink({
			uri: "http://localhost:4000/graphql"
		})
	]),
	cache: new InMemoryCache(),
	connectToDevTools: true
});

export default client;
