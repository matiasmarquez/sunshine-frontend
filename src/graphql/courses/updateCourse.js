import gql from "graphql-tag";

export default gql`
	mutation updateCourse(
		$id: ID!
		$name: String
		$categoryId: String
		$installments: [InstallmentInput]
		$briefDescription: String
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
				briefDescription: $briefDescription
				description: $description
				duration: $duration
				schedule: $schedule
				price: $schedule
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
