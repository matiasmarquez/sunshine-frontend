import React from "react";

import StaffCategoryController from "../../../controllers/StaffCategoryController";
import { paths } from "../../../../config/routes";

import ContentHeader from "../../../layouts/private/components/ContentHeader";
import DataTable from "../../../components/DataTable";
import Card from "../../../components/Card";
import Button from "../../../components/Button";

const CategoryList = props => (
	<StaffCategoryController action="list">
		{({ data, loading, showAlertDelete }) => (
			<React.Fragment>
				<ContentHeader
					title="Listado de categorías de staff"
					breadcrumb={[
						{
							text: "Categorías de staff",
							active: true
						}
					]}
					actions={[
						{
							success: true,
							text: "Nueva categoría",
							path: paths.staffCategoryCreate,
							...props
						}
					]}
				/>
				<Card p0>
					<DataTable
						data={data && data.staffCategories}
						loading={loading}
						columns={[
							{
								Header: "Nombre",
								accessor: "name"
							},
							{
								Header: "",
								accessor: "",
								Cell: row => {
									return (
										<React.Fragment>
											<Button
												flat
												danger
												xs
												typeicon
												onClick={e => {
													e.stopPropagation();
													showAlertDelete({
														id: row.value.id,
														name: row.value.name
													});
												}}
												icon="trash-2"
												{...props}
											/>
										</React.Fragment>
									);
								},
								className: "justify-center",
								width: 120,
								sortable: false,
								filterable: false
							}
						]}
						path={paths.staffCategoryEdit}
						{...props}
					/>
				</Card>
			</React.Fragment>
		)}
	</StaffCategoryController>
);

export default CategoryList;
