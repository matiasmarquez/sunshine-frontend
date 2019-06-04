import React from "react";
import styled from "styled-components";
import _ from "lodash";
import moment from "moment";

import FeatherIcon from "feather-icons-react";

const Alert = ({ installments, text, ml }) => {
	const month = moment().date(1);
	const installmentsNotPayed = _.filter(installments, installment => {
		const installmentMonth = moment(installment.date);
		if (
			installmentMonth.isSameOrBefore(month, "month") &&
			installment.paid === false
		) {
			return installment;
		}
	});

	return (
		installmentsNotPayed.length > 0 && (
			<Container ml={ml}>
				<Icon icon="alert-triangle" size={15} />
				{text && text}
				{installmentsNotPayed.length}
			</Container>
		)
	);
};

const Icon = styled(FeatherIcon)`
	margin-right: 10px;
`;

const Container = styled.span`
	display: flex;
	line-height: 15px;
	font-size: 15px;
	align-items: center;
	justify-content: center;
	background: #fff;
	min-width: 60px;
	border-radius: 4px;
	padding: 5px 5px;
	color: ${props => `rgb(${props.theme.danger})`};
	margin-left: ${props => (props.ml ? props.ml : 0)}px;
	animation: pulse 2s infinite;
	&:hover {
		animation: none;
	}
`;

export default Alert;
