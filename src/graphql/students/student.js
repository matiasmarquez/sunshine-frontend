import gql from "graphql-tag";

export default gql`
	query student($id: String!) {
		student(id: $id) {
			id
			name
			lastName
			address
			phone
			email
		}
	}
`;
