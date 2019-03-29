import React from "react";

import { paths } from "config/routes";
import StudentController from "main/controllers/StudentController";

import ContentHeader from "main/layouts/private/components/ContentHeader";
import Card from "main/components/Card";
import DataTable from "main/components/DataTable";
import Avatar from "main/components/Avatar";
import Button from "main/components/Button";

const StudentList = props => (
	<StudentController action="list">
		{({ data, loading, showAlertDelete }) => (
			<React.Fragment>
				<ContentHeader
					title="Listado de alumnos"
					breadcrumb={[
						{
							text: "Alumnos",
							active: true
						}
					]}
					actions={[
						{
							success: true,
							text: "Nuevo alumno",
							path: paths.studentCreate,
							...props
						}
					]}
				/>
				<Card p0>
					<DataTable
						data={data && data.students}
						loading={loading}
						columns={[
							{
								Header: "",
								accessor: "",
								Cell: row => {
									return (
										<Avatar
											name={row.value.name}
											lastName={row.value.lastName}
											display={"inline-block"}
											size={32}
										/>
									);
								},
								className: "justify-center",
								sortable: false,
								filterable: false,
								width: 80
							},
							{
								Header: "Nombre",
								accessor: "name"
							},
							{
								Header: "Apellido",
								accessor: "lastName"
							},
							{
								Header: "Dirección",
								accessor: "address"
							},
							{
								Header: "Teléfono",
								accessor: "phone"
							},
							{
								Header: "Correo",
								accessor: "email"
							},
							{
								Header: "",
								accessor: "",
								Cell: ({ value }) => {
									return (
										<React.Fragment>
											<Button
												flat
												coral
												xs
												typeicon
												icon="edit-2"
												path={paths.studentEdit.replace(
													":id",
													value.id
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
														id: value.id,
														name: value.name,
														lastName: value.lastName
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
	</StudentController>
);

export default StudentList;
