import gql from "graphql-tag";

export default gql`
	mutation createCourse(
		$name: String!
		$categoryId: String!
		$installments: [CourseInstallmentCreateInput]
		$briefDescription: String
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
				briefDescription: $briefDescription
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
			name
			briefDescription
			description
			duration
			schedule
			price
		}
	}
`;
