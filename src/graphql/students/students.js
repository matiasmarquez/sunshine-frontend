import gql from "graphql-tag";

export default gql`
	query students {
		students(where: {}) {
			id
			name
			lastName
			address
			phone
			email
		}
	}
`;
