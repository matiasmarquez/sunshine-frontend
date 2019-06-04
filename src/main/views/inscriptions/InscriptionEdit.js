import React from "react";

import { paths } from "config/routes";
import InscriptionController from "main/controllers/InscriptionController";
import CourseController from "main/controllers/CourseController";
import StudentController from "main/controllers/StudentController";

import ContentHeader from "main/layouts/private/components/ContentHeader";
import Form from "main/components/Inscription/Form";
import Card from "main/components/Card";

const InscriptionEdit = ({ match, history }) => (
	<InscriptionController action="edit" match={match} history={history}>
		{({ data, updateMutation, loading }) => (
			<CourseController action="list">
				{({ data: dataCourses, loading: loadingCourses }) => (
					<StudentController action="list">
						{({ data: dataStudents, loading: loadingStudents }) => (
							<React.Fragment>
								<ContentHeader
									title="Edición de inscripción"
									breadcrumb={[
										{
											text: "Inscripciones",
											route: paths.inscriptionList
										},
										{
											text: "Edición",
											active: true
										}
									]}
								/>
								{!loading &&
									!loadingCourses &&
									!loadingStudents && (
										<Card>
											<Form
												data={data && data.inscription}
												courses={dataCourses.courses}
												students={dataStudents.students}
												mutation={updateMutation}
											/>
										</Card>
									)}
							</React.Fragment>
						)}
					</StudentController>
				)}
			</CourseController>
		)}
	</InscriptionController>
);

export default InscriptionEdit;
