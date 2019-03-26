import gql from "graphql-tag";

export default gql`
	query staffPeople {
		staffPeople {
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
	}
`;
