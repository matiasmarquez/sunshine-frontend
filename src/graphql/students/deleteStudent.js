import gql from "graphql-tag";

export default gql`
	mutation deleteStudent($id: ID!) {
		deleteStudent(id: $id) {
			id
			name
			lastName
		}
	}
`;
