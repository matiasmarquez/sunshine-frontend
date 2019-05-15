import React from "react";

import { paths } from "../../../../config/routes";

import StaffCategoryController from "../../../controllers/StaffCategoryController";

import ContentHeader from "../../../layouts/private/components/ContentHeader";
import Form from "../../../components/Category/Form";
import Card from "../../../components/Card";

const CategoryEdit = ({ match, history }) => (
	<StaffCategoryController action="edit" match={match} history={history}>
		{({ data, loading, updateMutation }) => (
			<React.Fragment>
				<ContentHeader
					title="Edición de categoría de staff"
					breadcrumb={[
						{
							text: "Categorías de staff",
							route: paths.staffCategoryList
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
							data={data && data.staffCategory}
							color={false}
							mutation={updateMutation}
						/>
					</Card>
				)}
			</React.Fragment>
		)}
	</StaffCategoryController>
);

export default CategoryEdit;
