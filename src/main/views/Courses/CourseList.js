import React from "react";

import CourseController from "../../controllers/CourseController";
import { paths } from "../../../config/routes";

import ContentHeader from "../../layouts/private/components/ContentHeader";
import CategoryIndicator from "../../components/Course/CategoryIndicator";
import DataTable from "../../components/DataTable";
import Card from "../../components/Card";
import Button from "../../components/Button";

const CourseList = props => (
	<CourseController action="list">
		{({ data, loading, showAlertDelete }) => (
			<React.Fragment>
				<ContentHeader
					title="Listado de cursos"
					breadcrumb={[
						{
							text: "Cursos",
							active: true
						}
					]}
					actions={[
						{
							success: true,
							text: "Nuevo curso",
							path: paths.courseCreate,
							...props
						}
					]}
				/>
				<Card p0>
					<DataTable
						data={data && data.courses}
						loading={loading}
						columns={[
							{
								Header: "",
								accessor: "",
								sortable: false,
								filterable: false,
								width: 50,
								Cell: row => {
									return (
										<CategoryIndicator
											color={row.value.category.color}
											size={10}
										/>
									);
								}
							},
							{
								Header: "Nombre",
								accessor: "name"
							},
							{
								Header: "Categoría",
								accessor: "category.name"
							},
							{
								Header: "Duración",
								accessor: "duration"
							},
							{
								Header: "Horario",
								accessor: "schedule"
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
												path={paths.courseEdit.replace(
													":id",
													row.value.id
												)}
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
	</CourseController>
);

export default CourseList;
