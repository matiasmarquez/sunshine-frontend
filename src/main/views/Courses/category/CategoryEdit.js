import React from "react";

import { paths } from "../../../../config/routes";

import CourseCategoryController from "../../../controllers/CourseCategoryController";

import ContentHeader from "../../../layouts/private/components/ContentHeader";
import Form from "../../../components/Category/Form";
import Card from "../../../components/Card";

const CategoryEdit = ({ match, history }) => (
	<CourseCategoryController action="edit" match={match} history={history}>
		{({ data, loading, updateMutation }) => (
			<React.Fragment>
				<ContentHeader
					title="Edición de categoría de curso"
					breadcrumb={[
						{
							text: "Categorías de cursos",
							route: paths.courseCategoryList
						},
						{
							text: "Edición",
							active: true
						}
					]}
				/>
				{!loading && (
					<Card>
						<Form
							data={data && data.courseCategory}
							mutation={updateMutation}
						/>
					</Card>
				)}
			</React.Fragment>
		)}
	</CourseCategoryController>
);

export default CategoryEdit;
