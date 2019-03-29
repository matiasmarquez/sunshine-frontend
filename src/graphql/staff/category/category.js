import gql from "graphql-tag";

export default gql`
	query staffCategory($id: ID!) {
		staffCategory(id: $id) {
			id
			name
			description
		}
	}
`;
