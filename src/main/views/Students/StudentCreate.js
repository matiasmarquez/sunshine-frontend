import React from "react";

import StudentController from "../../controllers/StudentController";

import ContentHeader from "../../layouts/private/components/ContentHeader";
import Form from "../../components/Student/Form";
import Card from "../../components/Card";

const StudentCreate = () => (
	<StudentController>
		{({ createMutation }) => (
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
					<Form mutation={createMutation} create={true} />
				</Card>
			</React.Fragment>
		)}
	</StudentController>
);

export default StudentCreate;
