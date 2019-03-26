import gql from "graphql-tag";

export default gql`
	mutation deleteStaffPerson($id: ID!) {
		deleteStaffPerson(id: $id) {
			id
			name
			lastName
		}
	}
`;
