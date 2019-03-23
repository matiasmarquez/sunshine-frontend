import gql from "graphql-tag";

export default gql`
	query courseCategories {
		courseCategories {
			id
			name
			color
		}
	}
`;
