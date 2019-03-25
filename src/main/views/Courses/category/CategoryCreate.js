import React from "react";

import { paths } from "../../../../config/routes";

import CourseCategoryController from "../../../controllers/CourseCategoryController";

import ContentHeader from "../../../layouts/private/components/ContentHeader";
import Form from "../../../components/Category/Form";
import Card from "../../../components/Card";

const CourseCreate = () => (
	<CourseCategoryController action="list">
		{({ createMutation }) => (
			<React.Fragment>
				<ContentHeader
					title="Alta de categoría curso"
					breadcrumb={[
						{
							text: "Categorías de cursos",
							route: paths.courseCategoryList
						},
						{
							text: "Alta",
							active: true
						}
					]}
				/>
				<Card>
					<Form create={true} mutation={createMutation} />
				</Card>
			</React.Fragment>
		)}
	</CourseCategoryController>
);

export default CourseCreate;
