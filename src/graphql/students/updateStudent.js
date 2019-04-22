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
		$school: String
		$degree: String
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
				school: $school
				degree: $degree
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
			school
			degree
		}
	}
`;
