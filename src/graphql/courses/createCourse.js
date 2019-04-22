import gql from "graphql-tag";

export default gql`
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
	}
`;
