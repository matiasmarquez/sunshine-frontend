import gql from "graphql-tag";

export default gql`
	mutation createStudent(
		$name: String!
		$lastName: String!
		$address: String!
		$phone: String
		$email: String
	) {
		createStudent(
			data: {
				name: $name
				lastName: $lastName
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
		}
	}
`;
