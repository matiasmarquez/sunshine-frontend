import _ from "lodash";
import { useQuery, useMutation } from "react-apollo-hooks";

import { paths } from "config/routes";

import {
	courseCategories as courseCategoriesQuery,
	courseCategory as courseCategoryQuery,
	createCourseCategory,
	updateCourseCategory,
	deleteCourseCategory
} from "graphql/courseCategory";

import Notification from "main/components/Notification";
import SweetAlert from "main/components/SweetAlert";

const CourseCategoryController = ({ match, history, action, children }) => {
	const idCategory = match && match.params.id;

	let data;
	let error;
	let loading;

	if (action === "list") {
		({ data, error, loading } = useQuery(courseCategoriesQuery, {
			skip: action !== "list"
		}));
	}

	if (action === "edit") {
		({ data, error, loading } = useQuery(courseCategoryQuery, {
			skip: action !== "edit",
			variables: { id: idCategory }
		}));
	}

	const createMutation = useMutation(createCourseCategory, {
		update: (cache, { data: { createCourseCategory } }) => {
			try {
				const { courseCategories } = cache.readQuery({
					query: courseCategoriesQuery
				});
				cache.writeQuery({
					query: courseCategoriesQuery,
					data: {
						courseCategories: courseCategories.concat([
							createCourseCategory
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

	const updateMutation = useMutation(updateCourseCategory, {
		update: () => {
			Notification({
				text: "Categoría editada correctamente",
				type: "success"
			});
			history.push(paths.courseCategoryList);
		}
	});

	const deleteMutation = useMutation(deleteCourseCategory, {
		update: (cache, { data: { deleteCourseCategory } }) => {
			const { courseCategories } = cache.readQuery({
				query: courseCategoriesQuery
			});
			cache.writeQuery({
				query: courseCategoriesQuery,
				data: {
					courseCategories: _.remove(courseCategories, category => {
						return category.id !== deleteCourseCategory.id;
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

export default CourseCategoryController;
