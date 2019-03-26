import gql from "graphql-tag";

export default gql`
	mutation updateStaffPerson(
		$id: ID!
		$categoryId: String
		$coursesIds: [String]
		$name: String
		$lastName: String
		$address: String!
		$phone: String
		$email: String
	) {
		updateStaffPerson(
			id: $id
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
