import React from "react";

import UserController from "main/controllers/UserController";
import { paths } from "config/routes";

import ContentHeader from "main/layouts/private/components/ContentHeader";
import DataTable from "main/components/DataTable";
import Card from "main/components/Card";
import Button from "main/components/Button";
import AuthController from "main/controllers/AuthController";

const UserList = props => (
	<UserController action="list">
		{({ data, loading, showAlertDelete }) => (
			<AuthController>
				{({ user, loading: loadingAuth }) => (
					<React.Fragment>
						<ContentHeader
							title="Listado del usuarios"
							breadcrumb={[
								{
									text: "Usuarios",
									active: true
								}
							]}
							actions={[
								{
									success: true,
									text: "Nuevo usuario",
									path: paths.userCreate,
									...props
								}
							]}
						/>
						<Card p0>
							<DataTable
								data={data && data.users}
								loading={loading}
								columns={[
									{
										Header: "Nombre",
										accessor: "name"
									},
									{
										Header: "Apellido",
										accessor: "lastName"
									},
									{
										Header: "Usuario",
										accessor: "username"
									},
									{
										Header: "",
										accessor: "",
										Cell: row => {
											if (
												data.users.length === 1 ||
												user.id === row.value.id
											) {
												return "";
											}
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
																id:
																	row.value
																		.id,
																name:
																	row.value
																		.name,
																lastName:
																	row.value
																		.lastName
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
								path={paths.userEdit}
								{...props}
							/>
						</Card>
					</React.Fragment>
				)}
			</AuthController>
		)}
	</UserController>
);

export default UserList;
