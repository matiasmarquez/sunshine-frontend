import React, { useEffect } from "react";
import moment from "moment";
import styled from "styled-components";
import _ from "lodash";

import Checkbox from "./Checkbox";
import Error from "./Error";

import { Field } from "formik";
import FeatherIcon from "feather-icons-react";

const Installments = ({
	field,
	withPayment = false,
	withComment = false,
	form: { errors = null, touched, setFieldValue }
}) => {
	useEffect(() => {
		addMonths();
	}, []);

	const name = field.name;
	const value = field.value ? field.value : [];

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
			const newMonth = {
				date: month.format("YYYY-MM-DD 23:59:59"),
				price: installment ? installment.price : 0
			};
			if (withPayment) {
				newMonth.paid = installment ? installment.paid : false;
			}
			if (withComment) {
				newMonth.comment = installment ? installment.comment : "";
				if (newMonth.comment === null) {
					newMonth.comment = "";
				}
			}
			months = [...months, newMonth];
			setFieldValue(name, months);
		}
	};

	return (
		<React.Fragment>
			<Months>
				{value.map((month, key) => (
					<Month
						key={key}
						withPayment={withPayment}
						withComment={withComment}
					>
						<Name>
							{_.capitalize(moment(month.date).format("MMMM"))}
						</Name>
						<Icon icon="dollar-sign" size={25} />
						<Price name={`${name}[${key}][price]`} type="number" />
						{withPayment && (
							<Field
								name={`${name}[${key}][paid]`}
								text="Pagado"
								icon="check-circle"
								success={true}
								component={CheckboxStyled}
							/>
						)}
						{withComment && (
							<Comment
								name={`${name}[${key}][comment]`}
								placeholder="Un comentario opcional..."
								component="textarea"
							/>
						)}
						<ErrorStyled
							text={
								errors[name] &&
								errors[name][key] &&
								errors[name][key]["price"] &&
								touched[name] &&
								touched[name][key] &&
								errors[name][key]["price"]
							}
							withComment={withComment}
						/>
					</Month>
				))}
			</Months>
		</React.Fragment>
	);
};

export default Installments;

const ErrorStyled = styled(Error)`
	&& {
		top: 0;
		${props => props.withComment && `top: 69px`};
	}
`;

const Comment = styled(Field)`
	position: absolute;
	background: #ffffff;
	top: 112px;
	width: 100%;
	min-height: 70px;
	padding: 8px;
	border: 2px solid #eeee;
	border-top: 2px solid rgba(255, 159, 67, 0.3);
	color: #565656;
	&::placeholder {
		color: #bdbdbd;
	}
`;

const Month = styled.div`
	position: relative;
	flex: 1 1 auto;
	margin-right: 15px;
	margin-bottom: 25px;
	${props => props.withPayment && `margin-bottom: 62px`};
	max-width: 220px;
	min-height: 150px;
	${props => {
		if (props.withComment) {
			return `
				min-height: 184px
				${Icon} {
					height: calc(100% - 95px)
				}
				${Price} {
					height: calc(100% - 95px)
				}
				${CheckboxStyled} {
					top: 68px;
				}
			`;
		}
	}};
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

const CheckboxStyled = styled(Checkbox)`
	border-radius: 0;
`;
