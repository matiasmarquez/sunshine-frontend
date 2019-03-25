import React from "react";

import CourseCategoryController from "../../../controllers/CourseCategoryController";

import ContentHeader from "../../../layouts/private/components/ContentHeader";
import CategoryIndicator from "../../../components/Course/CategoryIndicator";
import DataTable from "../../../components/DataTable";
import Card from "../../../components/Card";
import Button from "../../../components/Button";

const CategoryList = props => (
	<CourseCategoryController action="list">
		{({ data, loading, showAlertDelete }) => (
			<React.Fragment>
				<ContentHeader
					title="Listado de categorías de cursos"
					breadcrumb={[
						{
							text: "Categorías de cursos",
							active: true
						}
					]}
				/>
				<Card p0>
					<DataTable
						data={data && data.courseCategories}
						loading={loading}
						columns={[
							{
								Header: "Color",
								accessor: "",
								sortable: false,
								filterable: false,
								width: 75,
								Cell: row => {
									return (
										<CategoryIndicator
											color={row.value.color}
											size={15}
										/>
									);
								}
							},
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
												coral
												xs
												typeicon
												icon="edit-2"
												path={`/cursos-categorias/editar/${
													row.value.id
												}`}
												mr={5}
												{...props}
											/>
											<Button
												flat
												danger
												xs
												typeicon
												onClick={() => {
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
					/>
				</Card>
			</React.Fragment>
		)}
	</CourseCategoryController>
);

export default CategoryList;
