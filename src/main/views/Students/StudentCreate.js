import React from "react";

import StudentController from "main/controllers/StudentController";
import ParentTypeController from "main/controllers/ParentTypeController";

import ContentHeader from "main/layouts/private/components/ContentHeader";
import Form from "main/components/Student/Form";

const StudentCreate = () => (
	<StudentController>
		{({ createMutation }) => (
			<ParentTypeController action="list">
				{({ data: dataTypesParent, loading: loadingTypesParent }) => (
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
						{!loadingTypesParent && (
							<Form
								parentTypes={dataTypesParent.parentTypes}
								mutation={createMutation}
								create={true}
							/>
						)}
					</React.Fragment>
				)}
			</ParentTypeController>
		)}
	</StudentController>
);

export default StudentCreate;
