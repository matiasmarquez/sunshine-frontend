import React from "react";

import CourseController from "../../controllers/CourseController";
import CourseCategoryController from "../../controllers/CourseCategoryController";

import ContentHeader from "../../layouts/private/components/ContentHeader";
import Form from "../../components/Course/Form";
import Card from "../../components/Card";

const CourseCreate = () => (
	<CourseController>
		{({ createMutation }) => (
			<CourseCategoryController action="list">
				{({ data, loading }) => (
					<React.Fragment>
						<ContentHeader
							title="Alta de curso"
							breadcrumb={[
								{
									text: "Cursos",
									route: "/cursos/listar"
								},
								{
									text: "Alta",
									active: true
								}
							]}
						/>
						{!loading && (
							<Card>
								<Form
									create={true}
									mutation={createMutation}
									categories={data && data.courseCategories}
								/>
							</Card>
						)}
					</React.Fragment>
				)}
			</CourseCategoryController>
		)}
	</CourseController>
);

export default CourseCreate;
