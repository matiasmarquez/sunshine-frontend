import _ from "lodash";

import { paths } from "../../config/routes";
import { useQuery, useMutation } from "react-apollo-hooks";

import staffPeopleQuery from "../../graphql/staff/staffPeople";
import staffPerson from "../../graphql/staff/staffPerson";
import createStaffPerson from "../../graphql/staff/createStaffPerson";
import updateStaffPerson from "../../graphql/staff/updateStaffPerson";
import deleteStaffPerson from "../../graphql/staff/deleteStaffPerson";

import SweetAlert from "../components/SweetAlert";
import Notification from "../components/Notification";

const StaffController = ({ match, history, action, children }) => {
	const idPerson = match && match.params.id;

	let data;
	let error;
	let loading;

	const {
		data: dataPeople,
		error: errorPeople,
		loading: loadingPeople
	} = useQuery(staffPeopleQuery, {
		skip: action !== "list"
	});

	const {
		data: dataPerson,
		error: errorPerson,
		loading: loadingPerson
	} = useQuery(staffPerson, {
		skip: action !== "edit",
		variables: { id: idPerson }
	});

	if (action === "list") {
		data = dataPeople;
		error = errorPeople;
		loading = loadingPeople;
	}

	if (action === "edit") {
		data = dataPerson;
		error = errorPerson;
		loading = loadingPerson;
	}

	const createMutation = useMutation(createStaffPerson, {
		update: (cache, { data: { createStaffPerson } }) => {
			try {
				const { staffPeople } = cache.readQuery({
					query: staffPeopleQuery
				});
				cache.writeQuery({
					query: staffPeopleQuery,
					data: {
						staffPeople: staffPeople.concat([createStaffPerson])
					}
				});
			} catch (err) {}

			Notification({
				text: "Persona del staff creada correctamente",
				type: "success"
			});
		}
	});

	const updateMutation = useMutation(updateStaffPerson, {
		update: () => {
			Notification({
				text: "Persona del staff editada correctamente",
				type: "success"
			});
			history.push(paths.staffList);
		}
	});

	const deleteMutation = useMutation(deleteStaffPerson, {
		update: (cache, { data: { deleteStaffPerson } }) => {
			const { staffPeople } = cache.readQuery({
				query: staffPeopleQuery
			});
			cache.writeQuery({
				query: staffPeopleQuery,
				data: {
					staffPeople: _.remove(staffPeople, person => {
						return person.id !== deleteStaffPerson.id;
					})
				}
			});
			Notification({
				text: "Persona del staff eliminada correctamente",
				type: "success"
			});
		}
	});

	const showAlertDelete = ({ id, name, lastName }) => {
		SweetAlert({
			title: `¿Desea eliminar a ${name} ${lastName}?`,
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

export default StaffController;
