import gql from "graphql-tag";

export default gql`
	query staffCategories {
		staffCategories {
			id
			name
			description
		}
	}
`;
