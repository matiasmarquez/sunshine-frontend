import gql from "graphql-tag";

export default gql`
	mutation createStudent(
		$parents: [ParentCreateInput]
		$name: String!
		$lastName: String!
		$address: String!
		$phone: String
		$email: String
	) {
		createStudent(
			data: {
				parents: $parents
				name: $name
				lastName: $lastName
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
