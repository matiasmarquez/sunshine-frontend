import { useQuery } from "react-apollo-hooks";

import categoriesQuery from "../../graphql/courses/category/categories";

const CourseCategoryController = ({ match, history, action, children }) => {
	let data;
	let error;
	let loading;

	const {
		data: dataCourseCategories,
		error: errorCourseCategories,
		loading: loadingCourseCategories
	} = useQuery(categoriesQuery, {
		skip: action !== "list"
	});

	if (action === "list") {
		data = dataCourseCategories;
		error = errorCourseCategories;
		loading = loadingCourseCategories;
	}

	return children({
		data,
		error,
		loading
	});
};

export default CourseCategoryController;
