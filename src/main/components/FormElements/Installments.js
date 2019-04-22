import React, { useEffect } from "react";
import moment from "moment";
import styled from "styled-components";
import _ from "lodash";

import { Field } from "formik";
import FeatherIcon from "feather-icons-react";

const Installments = ({
	field: { name, value },
	form: { errors = null, setFieldValue },
	label
}) => {
	useEffect(() => {
		addMonths();
	}, []);

	const addMonths = () => {
		let months = [];
		for (let i = 0; i < 12; i++) {
			const month = moment()
				.date(1)
				.month(i);
			const installment = _.find(value, installment => {
				const date = moment(installment.date);
				return date.isSame(month, "month");
			});
			months = [
				...months,
				{
					date: month.format("YYYY-MM-DD 23:59:59"),
					price: installment ? installment.price : 0
				}
			];
			setFieldValue(name, months);
		}
	};

	return (
		<React.Fragment>
			<Months>
				{value.map((month, key) => (
					<Month key={key}>
						<Name>
							{_.capitalize(moment(month.date).format("MMMM"))}
						</Name>
						<Icon icon="dollar-sign" size={25} />
						<Price name={`${name}[${key}][price]`} type="number" />
					</Month>
				))}
			</Months>
		</React.Fragment>
	);
};

export default Installments;

const Month = styled.div`
	position: relative;
	flex: 1 1 auto;
	margin-right: 15px;
	margin-bottom: 15px;
	max-width: 220px;
	min-height: 150px;
`;

const Months = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const Name = styled.h3`
	margin: 0;
	background: #ffbf00;
	font-size: 15px;
	font-weight: 600;
	color: #fff;
	padding: 3px 15px;
`;

const Icon = styled(FeatherIcon)`
	position: absolute;
	top: 23px;
	bottom: 0;
	height: calc(100% - 25px);
	left: 20px;
	color: #d6d6d6;
`;

const Price = styled(Field)`
	height: calc(100% - 25px);
	text-align: center;
	width: 100%;
	font-size: 25px;
	color: #9e9e9e;
	border: 2px solid #eee;
	border-top: 0;
	&:focus,
	&:hover {
		color: #666;
	}
`;
