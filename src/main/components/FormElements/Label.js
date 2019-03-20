import React from "react";
import styled from "styled-components";

const Label = ({ label }) => {
	return <LabelStyled>{label}</LabelStyled>;
};

const LabelStyled = styled.label`
	display: block;
	font-size: 12px;
	padding-left: 5px;
	margin-bottom: 5px;
	color: rgba(0, 0, 0, 0.7);
`;

export default Label;
