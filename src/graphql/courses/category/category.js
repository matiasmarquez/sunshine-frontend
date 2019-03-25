import gql from "graphql-tag";

export default gql`
	query courseCategory($id: ID!) {
		courseCategory(id: $id) {
			id
			name
			description
			color
		}
	}
`;
