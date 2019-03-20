import React from "react";

import { useQuery, useMutation } from "react-apollo-hooks";
import updateStudent from "../../../graphql/students/updateStudent";
import student from "../../../graphql/students/student";

import ContentHeader from "../../layouts/private/components/ContentHeader";
import Notification from "../../components/Notification";
import Form from "../../components/Student/Form";
import Card from "../../components/Card";

const StudentEdit = props => {
	const {
		match: {
			params: { id }
		}
	} = props;

	const updateMutation = useMutation(updateStudent, {
		update: () => {
			Notification({
				text: "Alumno editado correctamente",
				type: "success"
			});
			props.history.push("/alumnos/listar");
		}
	});
	const { data, error, loading } = useQuery(student, { variables: { id } });

	return (
		<React.Fragment>
			<ContentHeader
				title="Edición de alumno"
				breadcrumb={[
					{
						text: "Alumnos",
						route: "/alumnos/listar"
					},
					{
						text: "Edición",
						active: true
					}
				]}
			/>
			{!loading && (
				<Card>
					<Form data={data.student} mutation={updateMutation} />
				</Card>
			)}
		</React.Fragment>
	);
};

export default StudentEdit;
