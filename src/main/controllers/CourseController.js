import _ from "lodash";

import { useQuery, useMutation } from "react-apollo-hooks";

import {
	courses as coursesQuery,
	course as courseQuery,
	countCourses as countCoursesQuery,
	createCourse,
	updateCourse,
	deleteCourse
} from "graphql/course";

import SweetAlert from "../components/SweetAlert";
import Notification from "../components/Notification";

const CourseController = ({ match, history, action, children }) => {
	const idCourse = match && match.params.id;

	let data;
	let error;
	let loading;

	if (action === "list") {
		({ data, error, loading } = useQuery(coursesQuery, {
			skip: action !== "list"
		}));
	}

	if (action === "edit") {
		({ data, error, loading } = useQuery(courseQuery, {
			skip: action !== "edit",
			variables: { id: idCourse }
		}));
	}

	if (action === "count") {
		({ data, error, loading } = useQuery(countCoursesQuery, {
			skip: action !== "count"
		}));
	}

	const createMutation = useMutation(createCourse, {
		update: (cache, { data: { createCourse } }) => {
			try {
				const { courses } = cache.readQuery({
					query: coursesQuery
				});
				cache.writeQuery({
					query: coursesQuery,
					data: { courses: courses.concat([createCourse]) }
				});
			} catch (err) {}

			Notification({
				text: "Curso creado correctamente",
				type: "success"
			});
		}
	});

	const updateMutation = useMutation(updateCourse, {
		update: () => {
			Notification({
				text: "Curso editado correctamente",
				type: "success"
			});
			history.push("/cursos/listar");
		}
	});

	const deleteMutation = useMutation(deleteCourse, {
		update: (cache, { data: { deleteCourse } }) => {
			try {
				const { courses } = cache.readQuery({
					query: coursesQuery
				});
				cache.writeQuery({
					query: coursesQuery,
					data: {
						courses: _.remove(courses, course => {
							return course.id !== deleteCourse.id;
						})
					}
				});
			} catch (err) {}

			Notification({
				text: "Curso eliminado correctamente",
				type: "success"
			});
		}
	});

	const showAlertDelete = ({ id, name }) => {
		SweetAlert({
			title: `¿Desea eliminar el curso ${name}?`,
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

export default CourseController;
