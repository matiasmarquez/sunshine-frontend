import gql from "graphql-tag";

const staffCategoryFragment = gql`
	fragment staffCategoryFields on StaffCategory {
		id
		name
		description
	}
`;

export const staffCategories = gql`
	query staffCategories {
		staffCategories {
			...staffCategoryFields
		}
	}
	${staffCategoryFragment}
`;

export const staffCategory = gql`
	query staffCategory($id: ID!) {
		staffCategory(id: $id) {
			...staffCategoryFields
		}
	}
	${staffCategoryFragment}
`;

export const createStaffCategory = gql`
	mutation createStaffCategory($name: String!, $description: String) {
		createStaffCategory(data: { name: $name, description: $description }) {
			...staffCategoryFields
		}
	}
	${staffCategoryFragment}
`;

export const updateStaffCategory = gql`
	mutation updateStaffCategory(
		$id: ID!
		$name: String
		$description: String
	) {
		updateStaffCategory(
			id: $id
			data: { name: $name, description: $description }
		) {
			...staffCategoryFields
		}
	}
	${staffCategoryFragment}
`;

export const deleteStaffCategory = gql`
	mutation deleteStaffCategory($id: ID!) {
		deleteStaffCategory(id: $id) {
			...staffCategoryFields
		}
	}
	${staffCategoryFragment}
`;
