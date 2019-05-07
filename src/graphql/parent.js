import gql from "graphql-tag";

export const parentTypes = gql`
	query parentTypes {
		parentTypes {
			id
			type
		}
	}
`;
