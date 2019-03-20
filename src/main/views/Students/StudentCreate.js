import React from "react";

import { useMutation } from "react-apollo-hooks";
import createStudent from "../../../graphql/students/createStudent";
import studentsQuery from "../../../graphql/students/students";

import ContentHeader from "../../layouts/private/components/ContentHeader";
import Notification from "../../components/Notification";
import Form from "../../components/Student/Form";
import Card from "../../components/Card";

const StudentCreate = props => {
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

	return (
		<React.Fragment>
			<ContentHeader
				title="Alta de alumno"
				breadcrumb={[
					{
						text: "Alumnos",
						route: "/alumnos/listar"
					},
					{
						text: "Alta",
						active: true
					}
				]}
			/>
			<Card>
				<Form mutation={createMutation} />
			</Card>
		</React.Fragment>
	);
};

export default StudentCreate;
