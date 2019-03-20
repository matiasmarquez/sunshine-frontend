import React from "react";
import _ from "lodash";

import { useQuery, useMutation } from "react-apollo-hooks";

import studentsQuery from "../../../graphql/students/students";
import deleteStudent from "../../../graphql/students/deleteStudent";

import ContentHeader from "../../layouts/private/components/ContentHeader";
import Card from "../../components/Card";
import DataTable from "../../components/DataTable";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import SweetAlert from "../../components/SweetAlert";
import Notification from "../../components/Notification";

const StudentList = props => {
	const { data, error, loading } = useQuery(studentsQuery);

	const deleteMutation = useMutation(deleteStudent, {
		update: (cache, { data: { deleteStudent } }) => {
			const { students } = cache.readQuery({
				query: studentsQuery
			});
			cache.writeQuery({
				query: studentsQuery,
				data: {
					students: _.remove(students, student => {
						return student.id !== deleteStudent.id;
					})
				}
			});
			Notification({
				text: "Alumno eliminado correctamente",
				type: "success"
			});
		}
	});

	const showAlertDelete = ({ id, name, lastName }) => {
		SweetAlert({
			title: `¿Desea eliminar el alumno ${lastName} ${name}?`,
			type: "warning",
			onConfirm: () => {
				deleteMutation({
					variables: {
						id
					}
				});
			}
		});
	};

	return (
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
					data={data.students && data.students}
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
							Cell: row => {
								return (
									<React.Fragment>
										<Button
											flat
											coral
											xs
											typeicon
											icon="edit-2"
											path={`/alumnos/editar/${
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
													name: row.value.name,
													lastName: row.value.lastName
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
	);
};

export default StudentList;
