import gql from "graphql-tag";

export default gql`
	mutation deleteCourseCategory($id: ID!) {
		deleteCourseCategory(id: $id) {
			id
			name
		}
	}
`;
