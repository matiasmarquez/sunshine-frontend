import React from "react";

import StudentController from "../../controllers/StudentController";

import ContentHeader from "../../layouts/private/components/ContentHeader";
import Form from "../../components/Student/Form";
import Card from "../../components/Card";

const StudentEdit = ({ match, history }) => (
	<StudentController action="edit" match={match} history={history}>
		{({ data, loading, updateMutation }) => (
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
		)}
	</StudentController>
);

export default StudentEdit;
