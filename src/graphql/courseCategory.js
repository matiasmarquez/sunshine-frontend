import gql from "graphql-tag";

const courseCategoryFragment = gql`
	fragment courseCategoryFields on CourseCategory {
		id
		name
		description
		color
	}
`;

export const courseCategories = gql`
	query courseCategories {
		courseCategories {
			...courseCategoryFields
		}
	}
	${courseCategoryFragment}
`;

export const courseCategory = gql`
	query courseCategory($id: ID!) {
		courseCategory(id: $id) {
			...courseCategoryFields
		}
	}
	${courseCategoryFragment}
`;

export const createCourseCategory = gql`
	mutation createCourseCategory(
		$name: String!
		$description: String
		$color: String!
	) {
		createCourseCategory(
			data: { name: $name, description: $description, color: $color }
		) {
			...courseCategoryFields
		}
	}
	${courseCategoryFragment}
`;

export const updateCourseCategory = gql`
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
			...courseCategoryFields
		}
	}
	${courseCategoryFragment}
`;

export const deleteCourseCategory = gql`
	mutation deleteCourseCategory($id: ID!) {
		deleteCourseCategory(id: $id) {
			id
			name
		}
	}
`;
