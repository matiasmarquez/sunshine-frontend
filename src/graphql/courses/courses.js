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
			installments {
				id
				number
				price
			}
			name
			description
			duration
			schedule
			price
		}
	}
`;
