import gql from "graphql-tag";

export default gql`
	query parentTypes {
		parentTypes {
			id
			type
		}
	}
`;
