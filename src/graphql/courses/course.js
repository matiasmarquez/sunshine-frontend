import gql from "graphql-tag";

export default gql`
	query course($id: ID!) {
		course(id: $id) {
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
