import _ from "lodash";

import { useQuery, useMutation } from "react-apollo-hooks";

import {
	inscriptions as inscriptionsQuery,
	inscriptionsOfThisYear as inscriptionsOfThisYearQuery,
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

	if (action === "listOfThisYear") {
		({ data, error, loading } = useQuery(inscriptionsOfThisYearQuery, {
			skip: action !== "listOfThisYear"
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
				updateQueryInscriptions(cache, createInscription);
				updateQueryInscriptionsOTY(cache, createInscription);
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
			try {
				updateQueryInscriptions(cache, deleteInscription, "delete");
				updateQueryInscriptionsOTY(cache, deleteInscription, "delete");
			} catch (err) {}
			Notification({
				text: "Inscripción eliminada correctamente",
				type: "success"
			});
		}
	});

	const updateQueryInscriptionsOTY = (
		cache,
		attempt,
		operation = "create"
	) => {
		const { inscriptionsOfThisYear } = cache.readQuery({
			query: inscriptionsOfThisYearQuery
		});
		if (operation === "create") {
			console.log(attempt);
			cache.writeQuery({
				query: inscriptionsOfThisYearQuery,
				data: {
					inscriptionsOfThisYear: inscriptionsOfThisYear.concat([
						attempt
					])
				}
			});
		}
		if (operation === "delete") {
			const inscriptionsFiltered = _.filter(
				inscriptionsOfThisYear,
				inscription => {
					if (inscription.id !== attempt.id) {
						return true;
					}
					var today = new Date();
					var created = new Date(inscription.created);
					if (created.getFullYear() === today.getFullYear()) {
						return false;
					}
					return true;
				}
			);
			cache.writeQuery({
				query: inscriptionsOfThisYearQuery,
				data: {
					inscriptionsOfThisYear: inscriptionsFiltered
				}
			});
		}
	};

	const updateQueryInscriptions = (cache, attempt, operation = "create") => {
		const { inscriptions } = cache.readQuery({
			query: inscriptionsQuery
		});
		if (operation === "create") {
			console.log(attempt);
			cache.writeQuery({
				query: inscriptionsQuery,
				data: {
					inscriptions: inscriptions.concat([attempt])
				}
			});
		}
		if (operation === "delete") {
			cache.writeQuery({
				query: inscriptionsQuery,
				data: {
					inscriptions: _.remove(inscriptions, inscription => {
						return inscription.id !== attempt.id;
					})
				}
			});
		}
	};

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
