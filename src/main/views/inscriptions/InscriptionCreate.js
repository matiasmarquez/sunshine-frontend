import React from "react";

import { paths } from "config/routes";
import InscriptionController from "main/controllers/InscriptionController";
import CourseController from "main/controllers/CourseController";
import StudentController from "main/controllers/StudentController";

import ContentHeader from "main/layouts/private/components/ContentHeader";
import Form from "main/components/Inscription/Form";
import Card from "main/components/Card";

const InscriptionCreate = () => (
	<InscriptionController>
		{({ createMutation }) => (
			<CourseController action="list">
				{({ data: dataCourses, loading: loadingCourses }) => (
					<StudentController action="list">
						{({ data: dataStudents, loading: loadingStudents }) => (
							<React.Fragment>
								<ContentHeader
									title="Alta de inscripción"
									breadcrumb={[
										{
											text: "Inscripciones",
											route: paths.inscriptionList
										},
										{
											text: "Alta",
											active: true
										}
									]}
								/>
								{!loadingCourses && !loadingStudents && (
									<Card>
										<Form
											courses={dataCourses.courses}
											students={dataStudents.students}
											mutation={createMutation}
											create={true}
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

export default InscriptionCreate;
