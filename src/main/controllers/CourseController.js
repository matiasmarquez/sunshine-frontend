import _ from "lodash";

import { useQuery, useMutation } from "react-apollo-hooks";

import coursesQuery from "../../graphql/courses/courses";
import courseQuery from "../../graphql/courses/course";
import createCourse from "../../graphql/courses/createCourse";
import updateCourse from "../../graphql/courses/updateCourse";
import deleteCourse from "../../graphql/courses/deleteCourse";

import SweetAlert from "../components/SweetAlert";
import Notification from "../components/Notification";

const CourseController = ({ match, history, action, children }) => {
	const idCourse = match && match.params.id;

	let data;
	let error;
	let loading;

	const {
		data: dataCourses,
		error: errorCourses,
		loading: loadingCourses
	} = useQuery(coursesQuery, {
		skip: action !== "list"
	});

	const {
		data: dataCourse,
		error: errorCourse,
		loading: loadingCourse
	} = useQuery(courseQuery, {
		skip: action !== "edit",
		variables: { id: idCourse }
	});

	if (action === "list") {
		data = dataCourses;
		error = errorCourses;
		loading = loadingCourses;
	}

	if (action === "edit") {
		data = dataCourse;
		error = errorCourse;
		loading = loadingCourse;
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
