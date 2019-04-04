import gql from "graphql-tag";

export default gql`
	mutation updateStudent(
		$id: ID!
		$parents: [ParentCreateInput]
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
				parents: $parents
				address: $address
				phone: $phone
				email: $email
			}
		) {
			id
			parents {
				id
				name
				lastName
				type
				phone
				comment
			}
			name
			lastName
			address
			phone
			email
		}
	}
`;
