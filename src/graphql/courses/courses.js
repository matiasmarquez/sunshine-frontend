import gql from "graphql-tag";

export default gql`
	query courses {
		courses {
			id
			category {
				id
				name
				color
			}
			name
			briefDescription
			description
			duration
			schedule
			price
		}
	}
`;
