import gql from "graphql-tag";

export default gql`
	query course($id: String!) {
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
			briefDescription
			description
			duration
			schedule
			price
		}
	}
`;
