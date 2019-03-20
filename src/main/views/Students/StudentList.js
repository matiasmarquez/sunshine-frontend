import React from "react";

import StudentController from "../../controllers/StudentController";

import ContentHeader from "../../layouts/private/components/ContentHeader";
import Card from "../../components/Card";
import DataTable from "../../components/DataTable";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";

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
												path={`/alumnos/editar/${
													value.id
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
