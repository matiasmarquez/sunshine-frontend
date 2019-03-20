import gql from "graphql-tag";

export default gql`
	mutation updateStudent(
		$id: ID!
		$name: String
		$lastName: String
		$address: String!
		$phone: String
		$email: String
	) {
		updateStudent(
			id: $id
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
