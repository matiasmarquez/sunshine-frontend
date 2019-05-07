import _ from "lodash";

import { useQuery, useMutation } from "react-apollo-hooks";

import {
	inscriptions as inscriptionsQuery,
	inscription as inscriptionQuery,
	countInscriptions,
	createInscription,
	updateInscription,
	deleteInscription
} from "graphql/inscription";

import SweetAlert from "../components/SweetAlert";
import Notification from "../components/Notification";

const InscriptionController = ({ match, history, action, children }) => {
	const idInscription = match && match.params.id;

	let data;
	let error;
	let loading;

	if (action === "list") {
		({ data, error, loading } = useQuery(inscriptionsQuery, {
			skip: action !== "list"
		}));
	}

	if (action === "edit") {
		({ data, error, loading } = useQuery(inscriptionQuery, {
			skip: action !== "edit",
			variables: { id: idInscription }
		}));
	}

	if (action === "count") {
		({ data, error, loading } = useQuery(countInscriptions, {
			skip: action !== "count"
		}));
	}

	const createMutation = useMutation(createInscription, {
		update: (cache, { data: { createInscription } }) => {
			try {
				const { inscriptions } = cache.readQuery({
					query: inscriptionsQuery
				});
				cache.writeQuery({
					query: inscriptionsQuery,
					data: {
						inscriptions: inscriptions.concat([createInscription])
					}
				});
			} catch (err) {}

			Notification({
				text: "Inscripción creada correctamente",
				type: "success"
			});
		}
	});

	const updateMutation = useMutation(updateInscription, {
		update: () => {
			Notification({
				text: "Inscripción editada correctamente",
				type: "success"
			});
			history.push("/inscripcion/listar");
		}
	});

	const deleteMutation = useMutation(deleteInscription, {
		update: (cache, { data: { deleteInscription } }) => {
			const { inscriptions } = cache.readQuery({
				query: inscriptionsQuery
			});
			cache.writeQuery({
				query: inscriptionsQuery,
				data: {
					inscriptions: _.remove(inscriptions, student => {
						return student.id !== deleteInscription.id;
					})
				}
			});
			Notification({
				text: "Inscripción eliminada correctamente",
				type: "success"
			});
		}
	});

	const showAlertDelete = ({ id }) => {
		SweetAlert({
			title: `¿Desea eliminar la inscripción?`,
			type: "warning",
			onConfirm: () => {
				deleteMutation({
					variables: {
						id
					}
				});
			}
		});
	};

	return children({
		data,
		error,
		loading,
		createMutation,
		updateMutation,
		showAlertDelete
	});
};

export default InscriptionController;
