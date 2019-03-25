import gql from "graphql-tag";

export default gql`
	mutation updateCourseCategory(
		$id: ID!
		$name: String
		$description: String
		$color: String
	) {
		updateCourseCategory(
			id: $id
			data: { name: $name, description: $description, color: $color }
		) {
			id
			name
			description
			color
		}
	}
`;
