import React from "react";
import styled from "styled-components";

import ReactTable, { ReactTableDefaults } from "react-table";
import "react-table/react-table.css";

import { IconButton } from "@material-ui/core";
import FeatherIcon from "feather-icons-react";

Object.assign(ReactTableDefaults, {
	PreviousComponent: props => (
		<IconButton {...props}>
			<FeatherIcon icon="chevron-left" size={17} />
		</IconButton>
	),
	NextComponent: props => (
		<IconButton {...props}>
			<FeatherIcon icon="chevron-right" size={17} />
		</IconButton>
	),
	defaultFilterMethod: (filter, row) => {
		const id = filter.pivotId || filter.id;
		const data = row[id];
		if (!data) {
			return false;
		}
		const rowValue = data.toString().toLowerCase();
		if (!rowValue) {
			return true;
		}
		const filterValue = filter.value.toLowerCase() || "";

		return rowValue.indexOf(filterValue) > -1;
	}
});

const DataTable = props => {
	const { columns, data, defaultPageSize = 10, ...rest } = props;

	return (
		<StyledReactTable
			filterable
			defaultPageSize={defaultPageSize}
			className="-striped -highlight"
			loadingText="Cargando..."
			noDataText="No se ha encontrado ningún registro"
			pageText="Página"
			ofText="de"
			rowsText="filas"
			columns={columns}
			data={data}
			{...rest}
		/>
	);
};

export default DataTable;

const StyledReactTable = styled(ReactTable)`
	&& {
		background: #fff !important;
		border-radius: 8px;
		box-shadow: rgba(12, 52, 75, 0.05) 0px 3px 3px;
		border: 0;
		.-pagination {
			box-shadow: none;
			border-top: 1px solid rgb(249, 250, 251);
		}
		.-pagination .-center {
			display: none;
			order: 0;
			justify-content: flex-start;
		}
		.-pagination .-previous {
			order: 1;
		}
		.-pagination .-next {
			order: 2;
		}
		.-pagination .-previous,
		.-pagination .-next {
			max-width: 64px;
		}
		.rt-td,
		.rt-th {
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.rt-th {
			font-weight: 600;
		}
		.rt-td {
			justify-content: flex-start;
			padding: 10px 20px;
		}
		.rt-tbody .rt-td {
			min-height: 52px;
		}
		.rt-tbody .rt-td,
		.rt-tbody .rt-tr-group {
			border: 0;
		}
		&.-highlight .rt-tbody .rt-tr:not(.-padRow):hover {
			background: ${props => {
				return `rgba(${props.theme.primary}, 0.15)`;
			}};
		}
		.rt-thead.-header {
			box-shadow: none;
			border-bottom: 1px solid #f9fafb;
		}
		.rt-thead .rt-th {
			border-right: 1px solid #edf3f9;
			padding: 15px 5px;
		}
		&.-striped .rt-tr.-odd {
			background: #f9f9f9;
		}
		.rt-thead.-filters input {
			transition: all 0.3s ease;
			&:focus {
				box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.15);
				border: ${props => {
					return `1px solid rgb(${props.theme.primary})`;
				}};
			}
		}
		.cursor-pointer {
			cursor: pointer;
		}
		@media (min-width: 992px) {
			.-pagination .-center {
				display: flex;
			}
		}
	}
`;
