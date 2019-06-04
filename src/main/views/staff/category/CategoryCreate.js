import React from "react";

import { paths } from "../../../../config/routes";

import StaffCategoryController from "../../../controllers/StaffCategoryController";

import ContentHeader from "../../../layouts/private/components/ContentHeader";
import Form from "../../../components/Category/Form";
import Card from "../../../components/Card";

const CategoryCreate = () => (
	<StaffCategoryController action="list">
		{({ createMutation }) => (
			<React.Fragment>
				<ContentHeader
					title="Alta de categoría staff"
					breadcrumb={[
						{
							text: "Categorías de staff",
							route: paths.staffCategoryList
						},
						{
							text: "Alta",
							active: true
						}
					]}
				/>
				<Card>
					<Form
						create={true}
						mutation={createMutation}
						color={false}
					/>
				</Card>
			</React.Fragment>
		)}
	</StaffCategoryController>
);

export default CategoryCreate;
