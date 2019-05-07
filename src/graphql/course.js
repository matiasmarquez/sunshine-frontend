import gql from "graphql-tag";

const courseFragment = gql`
	fragment courseFields on Course {
		id
		category {
			id
			name
			color
		}
		installments {
			id
			date
			price
		}
		name
		description
		duration
		schedule
		price
	}
`;

export const courses = gql`
	query courses {
		courses {
			...courseFields
		}
	}
	${courseFragment}
`;

export const course = gql`
	query course($id: ID!) {
		course(id: $id) {
			...courseFields
		}
	}
	${courseFragment}
`;

export const countCourses = gql`
	query countCourses {
		countCourses
	}
`;

export const createCourse = gql`
	mutation createCourse(
		$name: String!
		$categoryId: String!
		$installments: [CourseInstallmentCreateInput]
		$description: String
		$duration: String!
		$schedule: String!
		$price: Float!
	) {
		createCourse(
			data: {
				name: $name
				categoryId: $categoryId
				installments: $installments
				description: $description
				duration: $duration
				schedule: $schedule
				price: $price
			}
		) {
			...courseFields
		}
	}
	${courseFragment}
`;

export const updateCourse = gql`
	mutation updateCourse(
		$id: ID!
		$name: String
		$categoryId: String
		$installments: [CourseInstallmentCreateInput]
		$description: String
		$duration: String
		$schedule: String
		$price: Float
	) {
		updateCourse(
			id: $id
			data: {
				name: $name
				categoryId: $categoryId
				installments: $installments
				description: $description
				duration: $duration
				schedule: $schedule
				price: $price
			}
		) {
			...courseFields
		}
	}
	${courseFragment}
`;

export const deleteCourse = gql`
	mutation deleteCourse($id: ID!) {
		deleteCourse(id: $id) {
			id
			name
		}
	}
`;
