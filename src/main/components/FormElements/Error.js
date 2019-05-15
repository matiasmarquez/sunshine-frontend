import React from "react";
import styled from "styled-components";

const Error = ({ text, ...rest }) => <Text {...rest}>{text}</Text>;

const Text = styled.p`
	position: relative;
	font-size: 11px;
	color: ${props => `rgb(${props.theme.danger})`};
	margin: 0;
	top: -12px;
`;

export default Error;
