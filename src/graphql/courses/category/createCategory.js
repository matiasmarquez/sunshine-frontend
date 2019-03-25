import gql from "graphql-tag";

export default gql`
	mutation createCourseCategory(
		$name: String!
		$description: String
		$color: String!
	) {
		createCourseCategory(
			data: { name: $name, description: $description, color: $color }
		) {
			id
			name
			description
			color
		}
	}
`;
