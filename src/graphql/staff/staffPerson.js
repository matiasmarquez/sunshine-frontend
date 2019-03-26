import gql from "graphql-tag";

export default gql`
	query staffPerson($id: ID!) {
		staffPerson(id: $id) {
			id
			name
			lastName
			address
			phone
			email
			category {
				id
				name
			}
			courses {
				id
				name
			}
		}
	}
`;
