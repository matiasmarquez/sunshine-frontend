import _ from "lodash";
import { useQuery, useMutation } from "react-apollo-hooks";

import { paths } from "../../config/routes";

import {
	staffCategories as staffCategoriesQuery,
	staffCategory as staffCategoryQuery,
	createStaffCategory,
	updateStaffCategory,
	deleteStaffCategory
} from "graphql/staffCategory";

import Notification from "../components/Notification";
import SweetAlert from "../components/SweetAlert";

const StaffCategoryController = ({ match, history, action, children }) => {
	const idCategory = match && match.params.id;

	let data;
	let error;
	let loading;

	if (action === "list") {
		({ data, error, loading } = useQuery(staffCategoriesQuery, {
			skip: action !== "list"
		}));
	}

	if (action === "edit") {
		({ data, error, loading } = useQuery(staffCategoryQuery, {
			skip: action !== "edit",
			variables: { id: idCategory }
		}));
	}

	const createMutation = useMutation(createStaffCategory, {
		update: (cache, { data: { createStaffCategory } }) => {
			try {
				const { staffCategories } = cache.readQuery({
					query: staffCategoriesQuery
				});
				cache.writeQuery({
					query: staffCategoriesQuery,
					data: {
						staffCategories: staffCategories.concat([
							createStaffCategory
						])
					}
				});
			} catch (err) {}

			Notification({
				text: "Categoría creada correctamente",
				type: "success"
			});
		}
	});

	const updateMutation = useMutation(updateStaffCategory, {
		update: () => {
			Notification({
				text: "Categoría editada correctamente",
				type: "success"
			});
			history.push(paths.staffCategoryList);
		}
	});

	const deleteMutation = useMutation(deleteStaffCategory, {
		update: (cache, { data: { deleteStaffCategory } }) => {
			const { staffCategories } = cache.readQuery({
				query: staffCategoriesQuery
			});
			cache.writeQuery({
				query: staffCategoriesQuery,
				data: {
					staffCategories: _.remove(staffCategories, category => {
						return category.id !== deleteStaffCategory.id;
					})
				}
			});
			Notification({
				text: "Categoría eliminada correctamente",
				type: "success"
			});
		}
	});

	const showAlertDelete = ({ id, name }) => {
		SweetAlert({
			title: `¿Desea eliminar la categoría ${name}?`,
			type: "warning",
			onConfirm: () => {
				const result = deleteMutation({
					variables: {
						id
					}
				});
				result.catch(err => {
					Notification({
						text: "No se puede eliminar esta categoría",
						type: "error"
					});
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
		deleteMutation,
		showAlertDelete
	});
};

export default StaffCategoryController;
