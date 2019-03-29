import gql from "graphql-tag";

export default gql`
	mutation updateStaffCategory(
		$id: ID!
		$name: String
		$description: String
	) {
		updateStaffCategory(
			id: $id
			data: { name: $name, description: $description }
		) {
			id
			name
			description
		}
	}
`;
