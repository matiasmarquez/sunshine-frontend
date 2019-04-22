import gql from "graphql-tag";

export default gql`
	query students {
		students {
			id
			parents {
				id
				name
				lastName
				type
				phone
				comment
			}
			name
			lastName
			address
			phone
			email
			school
			degree
		}
	}
`;
