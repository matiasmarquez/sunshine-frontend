import gql from "graphql-tag";

export default gql`
	query student($id: String!) {
		student(id: $id) {
			id
			parents {
				id
				name
				lastName
				type
				phone
				comment
			}
			name
			lastName
			address
			phone
			email
		}
	}
`;
