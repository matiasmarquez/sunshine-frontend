import React from "react";

import CourseController from "../../controllers/CourseController";
import CourseCategoryController from "../../controllers/CourseCategoryController";

import ContentHeader from "../../layouts/private/components/ContentHeader";
import Form from "../../components/Course/Form";
import Card from "../../components/Card";

const CourseEdit = ({ match, history }) => (
	<CourseController action="edit" match={match} history={history}>
		{({ data, updateMutation, loading }) => (
			<CourseCategoryController action="list">
				{({ data: dataCats, loading: loadingCats }) => (
					<React.Fragment>
						<ContentHeader
							title="Edición de curso"
							breadcrumb={[
								{
									text: "Cursos",
									route: "/cursos/listar"
								},
								{
									text: "Edición",
									active: true
								}
							]}
						/>
						{!loading && !loadingCats && (
							<Card title="Formulario de edición">
								<Form
									data={data && data.course}
									mutation={updateMutation}
									categories={
										dataCats && dataCats.courseCategories
									}
								/>
							</Card>
						)}
					</React.Fragment>
				)}
			</CourseCategoryController>
		)}
	</CourseController>
);

export default CourseEdit;
