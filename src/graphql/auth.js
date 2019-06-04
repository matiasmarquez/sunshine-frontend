import gql from "graphql-tag";

export const login = gql`
	mutation login($username: String!, $password: String!) {
		login(username: $username, password: $password) {
			username
			token
		}
	}
`;

export const me = gql`
	query me {
		me {
			id
			name
			lastName
			username
		}
	}
`;
