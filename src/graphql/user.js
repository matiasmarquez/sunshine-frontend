import gql from "graphql-tag";

const userFragment = gql`
	fragment userFields on User {
		id
		name
		lastName
		username
	}
`;

export const user = gql`
	query user($id: ID!) {
		user(id: $id) {
			...userFields
		}
	}
	${userFragment}
`;

export const users = gql`
	query users {
		users {
			...userFields
		}
	}
	${userFragment}
`;

export const createUser = gql`
	mutation createUser(
		$name: String!
		$lastName: String!
		$username: String!
		$password: String!
	) {
		createUser(
			data: {
				name: $name
				lastName: $lastName
				username: $username
				password: $password
			}
		) {
			...userFields
		}
	}
	${userFragment}
`;

export const updateUser = gql`
	mutation updateUser(
		$id: ID!
		$name: String
		$lastName: String
		$username: String
		$password: String
	) {
		updateUser(
			id: $id
			data: {
				name: $name
				lastName: $lastName
				username: $username
				password: $password
			}
		) {
			...userFields
		}
	}
	${userFragment}
`;

export const deleteUser = gql`
	mutation deleteUser($id: ID!) {
		deleteUser(id: $id) {
			id
			name
			lastName
		}
	}
`;
