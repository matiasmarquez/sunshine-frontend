import React from "react";
import styled from "styled-components";

import Label from "./Label";

const Textarea = props => {
	const {
		field: { name, onChange },
		form: { errors = null },
		type,
		label
	} = props;

	let { value } = props.field;
	const error = errors && errors[name];

	if (value === null) {
		value = "";
	}

	return (
		<div>
			<Label label={label} />
			<TextareaStyled
				name={name}
				value={value}
				type={type}
				onChange={onChange}
			/>
			<Error>{error && error}</Error>
		</div>
	);
};

export default Textarea;

const Error = styled.p`
	color: #ff4f56;
	font-size: 12px;
	margin: 0;
	margin-top: 5px;
`;

const TextareaStyled = styled.textarea`
	display: block;
	width: 100%;
	margin-bottom: 15px;
	padding: 9px;
	background: transparent;
	font-size: 14px;
	font-family: "Open Sans", sans-serif;
	border-radius: 6px;
	line-height: 1.6;
	border: 1px solid rgba(0, 0, 0, 0.2);
	display: block;
	padding: 9px;
	color: rgba(0, 0, 0, 0.8);
	outline: none;
	min-height: 100px;
	transition: boxShadow 0.25s ease, border 0.25s ease, transform 0.25s ease,
		-webkit-transform 0.25s ease;

	&:focus {
		box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.05);
		border: 1px solid rgba(0, 0, 0, 0.02);
		transform: translateY(-2px);
	}
`;
