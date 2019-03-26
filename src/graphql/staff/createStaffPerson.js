import gql from "graphql-tag";

export default gql`
	mutation createStaffPerson(
		$name: String!
		$lastName: String!
		$categoryId: String!
		$coursesIds: [String]
		$address: String
		$phone: String
		$email: String
	) {
		createStaffPerson(
			data: {
				name: $name
				lastName: $lastName
				categoryId: $categoryId
				coursesIds: $coursesIds
				address: $address
				phone: $phone
				email: $email
			}
		) {
			id
			name
			lastName
			address
			phone
			email
			category {
				id
				name
			}
			courses {
				id
				name
			}
		}
	}
`;
