import gql from "graphql-tag";

const studentFragment = gql`
	fragment studentFields on Student {
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
`;

export const students = gql`
	query students {
		students {
			...studentFields
		}
	}
	${studentFragment}
`;

export const countStudents = gql`
	query countStudents {
		countStudents
	}
`;

export const student = gql`
	query student($id: ID!) {
		student(id: $id) {
			...studentFields
		}
	}
	${studentFragment}
`;

export const createStudent = gql`
	mutation createStudent(
		$parents: [ParentCreateInput]
		$name: String!
		$lastName: String!
		$address: String!
		$phone: String
		$email: String
		$school: String
		$degree: String
	) {
		createStudent(
			data: {
				parents: $parents
				name: $name
				lastName: $lastName
				address: $address
				phone: $phone
				email: $email
				school: $school
				degree: $degree
			}
		) {
			...studentFields
		}
	}
	${studentFragment}
`;

export const updateStudent = gql`
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
			...studentFields
		}
	}
	${studentFragment}
`;

export const deleteStudent = gql`
	mutation deleteStudent($id: ID!) {
		deleteStudent(id: $id) {
			id
			name
			lastName
		}
	}
`;
