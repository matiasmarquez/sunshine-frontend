import _ from "lodash";
import { useQuery, useMutation } from "react-apollo-hooks";

import { paths } from "../../config/routes";

import staffCategoriesQuery from "../../graphql/staff/category/categories";
import staffCategoryQuery from "../../graphql/staff/category/category";
import createStaffCategory from "../../graphql/staff/category/createCategory";
import updateStaffCategory from "../../graphql/staff/category/updateCategory";
import deleteStaffCategory from "../../graphql/staff/category/deleteCategory";

import Notification from "../components/Notification";
import SweetAlert from "../components/SweetAlert";

const StaffCategoryController = ({ match, history, action, children }) => {
	const idCategory = match && match.params.id;

	let data;
	let error;
	let loading;

	const {
		data: dataCategories,
		error: errorCategories,
		loading: loadingCategories
	} = useQuery(staffCategoriesQuery, {
		skip: action !== "list"
	});

	const {
		data: dataCategory,
		error: errorCategory,
		loading: loadingCategory
	} = useQuery(staffCategoryQuery, {
		skip: action !== "edit",
		variables: { id: idCategory }
	});

	if (action === "list") {
		data = dataCategories;
		error = errorCategories;
		loading = loadingCategories;
	}

	if (action === "edit") {
		data = dataCategory;
		error = errorCategory;
		loading = loadingCategory;
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
