import gql from "graphql-tag";

export default gql`
	mutation deleteCourse($id: ID!) {
		deleteCourse(id: $id) {
			id
			name
		}
	}
`;
