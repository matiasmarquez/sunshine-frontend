import React from "react";
import _ from "lodash";

import { useQuery, useMutation } from "react-apollo-hooks";

import coursesQuery from "../../../graphql/courses/courses";
import deleteCourse from "../../../graphql/courses/deleteCourse";

import ContentHeader from "../../layouts/private/components/ContentHeader";
import Card from "../../components/Card";
import DataTable from "../../components/DataTable";
import Button from "../../components/Button";
import SweetAlert from "../../components/SweetAlert";
import Notification from "../../components/Notification";
import CategoryIndicator from "../../components/Course/CategoryIndicator";

const CourseList = props => {
	const { data, error, loading } = useQuery(coursesQuery);

	const deleteMutation = useMutation(deleteCourse, {
		update: (cache, { data: { deleteCourse } }) => {
			const { students } = cache.readQuery({
				query: coursesQuery
			});
			cache.writeQuery({
				query: coursesQuery,
				data: {
					students: _.remove(students, student => {
						return student.id !== deleteCourse.id;
					})
				}
			});
			Notification({
				text: "Curso eliminado correctamente",
				type: "success"
			});
		}
	});

	const showAlertDelete = ({ id, name }) => {
		SweetAlert({
			title: `¿Desea eliminar el curso ${name}?`,
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
				title="Listado de cursos"
				breadcrumb={[
					{
						text: "Cursos",
						active: true
					}
				]}
			/>
			<Card p0>
				<DataTable
					data={data.courses && data.courses}
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
											path={`/cursos/editar/${
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

export default CourseList;
