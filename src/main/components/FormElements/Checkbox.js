import React from "react";
import styled from "styled-components";

import FeatherIcon from "feather-icons-react";

const Checkbox = ({
	text,
	icon,
	field: { name, onChange, value },
	form: { errors = null },
	...rest
}) => {
	//const error = errors && errors[name];
	if (value === null) {
		value = false;
	}

	return (
		<Container {...rest}>
			<Label>
				<Input
					type="checkbox"
					name={name}
					checked={value}
					onChange={onChange}
				/>
				<Text>
					<Icon icon={icon} size={21} /> {text}
				</Text>
			</Label>
		</Container>
	);
};

const Label = styled.label`
	float: left;
	cursor: pointer;
	width: 100%;
`;

const Input = styled.input`
	position: absolute;
	margin-right: 100px;
	top: -20px;
`;

const Text = styled.span`
	display: flex;
	align-items: center;
	font-weight: 500;
	padding: 10px 15px;
`;

const Icon = styled(FeatherIcon)`
	margin-right: 10px;
`;

const Container = styled.div`
	position: relative;
	cursor: pointer;
	border-radius: 5px;
	overflow: hidden;
	background: #eee;
	color: #b7b7b7;
	${Input}:checked + span {
		background: ${props => {
			if (props.success) {
				return `rgb(${props.theme.success})`;
			}
		}};
		color: #fff;
	}
	&:hover {
		background: ${props => {
			if (props.success) {
				return `rgb(${props.theme.success})`;
			}
		}};
		color: #fff;
	}
`;

export default Checkbox;
