import gql from "graphql-tag";

export default gql`
	mutation deleteStaffCategory($id: ID!) {
		deleteStaffCategory(id: $id) {
			id
			name
		}
	}
`;
