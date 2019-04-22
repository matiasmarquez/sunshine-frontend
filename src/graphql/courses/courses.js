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
				date
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
