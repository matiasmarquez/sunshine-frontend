import React from "react";

import StaffController from "../../controllers/StaffController";
import { paths } from "../../../config/routes";

import ContentHeader from "../../layouts/private/components/ContentHeader";
import DataTable from "../../components/DataTable";
import Card from "../../components/Card";
import Button from "../../components/Button";

const StaffList = props => (
	<StaffController action="list">
		{({ data, loading, showAlertDelete }) => (
			<React.Fragment>
				<ContentHeader
					title="Listado del staff"
					breadcrumb={[
						{
							text: "Staff",
							active: true
						}
					]}
					actions={[
						{
							success: true,
							text: "Nueva persona",
							path: paths.staffCreate,
							...props
						}
					]}
				/>
				<Card p0>
					<DataTable
						data={data && data.staffPeople}
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
								Header: "Categoría",
								accessor: "category.name"
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
														name: row.value.name,
														lastName:
															row.value.lastName
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
						path={paths.staffEdit}
						{...props}
					/>
				</Card>
			</React.Fragment>
		)}
	</StaffController>
);

export default StaffList;
