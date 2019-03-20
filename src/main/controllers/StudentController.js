import _ from "lodash";

import { useQuery, useMutation } from "react-apollo-hooks";

import studentsQuery from "../../graphql/students/students";
import studentQuery from "../../graphql/students/student";
import createStudent from "../../graphql/students/createStudent";
import updateStudent from "../../graphql/students/updateStudent";
import deleteStudent from "../../graphql/students/deleteStudent";

import SweetAlert from "../components/SweetAlert";
import Notification from "../components/Notification";

const StudentController = ({ match, history, action, children }) => {
	const idStudent = match && match.params.id;

	let data;
	let error;
	let loading;

	const {
		data: dataStudents,
		error: errorStudents,
		loading: loadingStudents
	} = useQuery(studentsQuery, {
		skip: action !== "list"
	});

	const {
		data: dataStudent,
		error: errorStudent,
		loading: loadingStudent
	} = useQuery(studentQuery, {
		skip: action !== "edit",
		variables: { id: idStudent }
	});

	if (action === "list") {
		data = dataStudents;
		error = errorStudents;
		loading = loadingStudents;
	}

	if (action === "edit") {
		data = dataStudent;
		error = errorStudent;
		loading = loadingStudent;
	}

	const createMutation = useMutation(createStudent, {
		update: (cache, { data: { createStudent } }) => {
			try {
				const { students } = cache.readQuery({
					query: studentsQuery
				});
				cache.writeQuery({
					query: studentsQuery,
					data: { students: students.concat([createStudent]) }
				});
			} catch (err) {}

			Notification({
				text: "Alumno creado correctamente",
				type: "success"
			});
		}
	});

	const updateMutation = useMutation(updateStudent, {
		update: () => {
			Notification({
				text: "Alumno editado correctamente",
				type: "success"
			});
			history.push("/alumnos/listar");
		}
	});

	const deleteMutation = useMutation(deleteStudent, {
		update: (cache, { data: { deleteStudent } }) => {
			const { students } = cache.readQuery({
				query: studentsQuery
			});
			cache.writeQuery({
				query: studentsQuery,
				data: {
					students: _.remove(students, student => {
						return student.id !== deleteStudent.id;
					})
				}
			});
			Notification({
				text: "Alumno eliminado correctamente",
				type: "success"
			});
		}
	});

	const showAlertDelete = ({ id, name, lastName }) => {
		SweetAlert({
			title: `¿Desea eliminar el alumno ${lastName} ${name}?`,
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

export default StudentController;
