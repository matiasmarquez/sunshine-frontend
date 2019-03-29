import gql from "graphql-tag";

export default gql`
	mutation createStaffCategory($name: String!, $description: String) {
		createStaffCategory(data: { name: $name, description: $description }) {
			id
			name
			description
		}
	}
`;
