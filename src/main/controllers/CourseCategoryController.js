import _ from "lodash";
import { useQuery, useMutation } from "react-apollo-hooks";

import { paths } from "../../config/routes";

import courseCategoriesQuery from "../../graphql/courses/category/categories";
import courseCategoryQuery from "../../graphql/courses/category/category";
import createCourseCategory from "../../graphql/courses/category/createCategory";
import updateCourseCategory from "../../graphql/courses/category/updateCategory";
import deleteCourseCategory from "../../graphql/courses/category/deleteCategory";

import Notification from "../components/Notification";
import SweetAlert from "../components/SweetAlert";

const CourseCategoryController = ({ match, history, action, children }) => {
	const idCategory = match && match.params.id;

	let data;
	let error;
	let loading;

	const {
		data: dataCategories,
		error: errorCategories,
		loading: loadingCategories
	} = useQuery(courseCategoriesQuery, {
		skip: action !== "list"
	});

	const {
		data: dataCategory,
		error: errorCategory,
		loading: loadingCategory
	} = useQuery(courseCategoryQuery, {
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
				text: "Curso creado correctamente",
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
