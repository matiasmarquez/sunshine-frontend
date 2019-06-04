import _ from "lodash";

import { paths } from "../../config/routes";
import { useQuery, useMutation } from "react-apollo-hooks";

import {
	users as usersQuery,
	user as userQuery,
	createUser,
	updateUser,
	deleteUser
} from "graphql/user";

import SweetAlert from "../components/SweetAlert";
import Notification from "../components/Notification";

const UserController = ({ match, history, action, children }) => {
	const idUser = match && match.params.id;

	let data;
	let error;
	let loading;

	if (action === "list") {
		({ data, error, loading } = useQuery(usersQuery, {
			skip: action !== "list"
		}));
	}

	if (action === "edit") {
		({ data, error, loading } = useQuery(userQuery, {
			skip: action !== "edit",
			variables: { id: idUser }
		}));
	}

	const createMutation = useMutation(createUser, {
		update: (cache, { data: { createUser } }) => {
			try {
				const { users } = cache.readQuery({
					query: usersQuery
				});
				cache.writeQuery({
					query: usersQuery,
					data: {
						users: users.concat([createUser])
					}
				});
			} catch (err) {}

			Notification({
				text: "Usuario creado correctamente",
				type: "success"
			});
		}
	});

	const updateMutation = useMutation(updateUser, {
		update: () => {
			Notification({
				text: "Usuario editado correctamente",
				type: "success"
			});
			history.push(paths.userList);
		}
	});

	const deleteMutation = useMutation(deleteUser, {
		update: (cache, { data: { deleteUser } }) => {
			const { users } = cache.readQuery({
				query: usersQuery
			});
			cache.writeQuery({
				query: usersQuery,
				data: {
					users: _.remove(users, user => {
						return user.id !== deleteUser.id;
					})
				}
			});
			Notification({
				text: "Usuario eliminado correctamente",
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

export default UserController;
