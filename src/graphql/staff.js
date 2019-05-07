import gql from "graphql-tag";

const staffFragment = gql`
	fragment staffPersonField on StaffPerson {
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
`;

export const staffPerson = gql`
	query staffPerson($id: ID!) {
		staffPerson(id: $id) {
			...staffPersonField
		}
	}
	${staffFragment}
`;

export const staffPeople = gql`
	query staffPeople {
		staffPeople {
			...staffPersonField
		}
	}
	${staffFragment}
`;

export const countStaffPeople = gql`
	query countStaffPeople {
		countStaffPeople
	}
`;

export const createStaffPerson = gql`
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
			...staffPersonField
		}
	}
	${staffFragment}
`;

export const updateStaffPerson = gql`
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
			...staffPersonField
		}
	}
	${staffFragment}
`;

export const deleteStaffPerson = gql`
	mutation deleteStaffPerson($id: ID!) {
		deleteStaffPerson(id: $id) {
			id
			name
			lastName
		}
	}
`;
