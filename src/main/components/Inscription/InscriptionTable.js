import React from "react";
import _ from "lodash";

import { paths } from "config/routes";

import DataTable from "main/components/DataTable";
import Button from "main/components/Button";
import Alert from "main/components/Inscription/Alert";
import DateComponent from "main/components/Date";

const InscriptionTable = ({
	data,
	loading,
	showAlertDelete,
	onlyNotPaid = false,
	...rest
}) => {
	let inscriptions = data && data.inscriptions;
	if (onlyNotPaid) {
		inscriptions = _.filter(inscriptions, inscription => {
			return inscription.hasInstallmentsNotPayed === true;
		});
	}

	return (
		<DataTable
			data={inscriptions}
			loading={loading}
			defaultPageSize={onlyNotPaid ? 6 : 10}
			columns={[
				{
					Header: "Alumno",
					id: "student.name",
					accessor: el => `${el.student.name} ${el.student.lastName}`,
					Cell: row =>
						`${row.original.student.name} ${
							row.original.student.lastName
						}`
				},
				{
					Header: "Curso",
					accessor: "course.name"
				},
				{
					Header: "Iniciada",
					accessor: "created",
					Cell: row => {
						var date = new Date(row.original.created);
						return (
							<React.Fragment>
								<DateComponent
									date={date}
									textBeforeMonth=" del "
									withMonth
									withYear
								/>
							</React.Fragment>
						);
					}
				},
				{
					Header: "Cuotas no pagas",
					accessor: "hasInstallmentsNotPayed",
					filterMethod: (filter, row) => {
						console.log(filter);
						if (filter.value === "all") {
							return true;
						}
						if (filter.value === "paid") {
							return row[filter.id] === false;
						}
						if (filter.value === "not-paid") {
							return row[filter.id] === true;
						}
					},
					Filter: ({ filter, onChange }) => {
						if (onlyNotPaid) {
							return "";
						}
						return (
							<select
								onChange={event => onChange(event.target.value)}
								style={{ width: "100%" }}
								value={filter ? filter.value : "all"}
							>
								<option value="all">Todas</option>
								<option value="paid">Al día</option>
								<option value="not-paid">Por pagar</option>
							</select>
						);
					},
					Cell: row => (
						<Alert installments={row.original.installments} />
					)
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
											id: row.value.id
										});
									}}
									icon="trash-2"
									{...rest}
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
			path={paths.inscriptionEdit}
			{...rest}
		/>
	);
};

export default InscriptionTable;
