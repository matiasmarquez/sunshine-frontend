import gql from "graphql-tag";

const inscriptionFragment = gql`
	fragment inscriptionFields on Inscription {
		id
		course {
			id
			name
		}
		student {
			id
			name
			lastName
		}
		installments {
			id
			date
			price
			paid
			comment
		}
		price
		state
		created
		hasInstallmentsNotPayed
	}
`;

export const inscriptions = gql`
	query inscriptions {
		inscriptions {
			...inscriptionFields
		}
	}
	${inscriptionFragment}
`;

export const inscriptionsOfThisYear = gql`
	query inscriptionsOfThisYear {
		inscriptionsOfThisYear {
			...inscriptionFields
		}
	}
	${inscriptionFragment}
`;

export const inscription = gql`
	query inscription($id: ID!) {
		inscription(id: $id) {
			...inscriptionFields
		}
	}
	${inscriptionFragment}
`;

export const countInscriptions = gql`
	query countInscriptions {
		countInscriptions
	}
`;

export const createInscription = gql`
	mutation createInscription(
		$courseId: ID!
		$studentId: ID!
		$installments: [InscriptionInstallmentCreateInput]
		$price: Float
	) {
		createInscription(
			data: {
				courseId: $courseId
				studentId: $studentId
				installments: $installments
				price: $price
			}
		) {
			...inscriptionFields
		}
	}
	${inscriptionFragment}
`;

export const updateInscription = gql`
	mutation updateInscription(
		$id: ID!
		$courseId: ID!
		$studentId: ID!
		$installments: [InscriptionInstallmentCreateInput]
		$price: Float
	) {
		updateInscription(
			id: $id
			data: {
				courseId: $courseId
				studentId: $studentId
				installments: $installments
				price: $price
			}
		) {
			...inscriptionFields
		}
	}
	${inscriptionFragment}
`;

export const deleteInscription = gql`
	mutation deleteInscription($id: ID!) {
		deleteInscription(id: $id) {
			id
		}
	}
`;
