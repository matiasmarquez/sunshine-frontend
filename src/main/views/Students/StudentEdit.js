import React from "react";

import StudentController from "main/controllers/StudentController";
import ParentTypeController from "main/controllers/ParentTypeController";

import ContentHeader from "main/layouts/private/components/ContentHeader";
import Form from "main/components/Student/Form";

const StudentEdit = ({ match, history }) => (
	<StudentController action="edit" match={match} history={history}>
		{({ data, loading, updateMutation }) => (
			<ParentTypeController action="list">
				{({ data: dataTypesParent, loading: loadingTypesParent }) => (
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
						{!loading && !loadingTypesParent && (
							<Form
								data={data.student}
								parentTypes={dataTypesParent.parentTypes}
								mutation={updateMutation}
							/>
						)}
					</React.Fragment>
				)}
			</ParentTypeController>
		)}
	</StudentController>
);

export default StudentEdit;
