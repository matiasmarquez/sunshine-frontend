import React from "react";
import styled from "styled-components";

const Card = props => {
	const { children, ...rest } = props;

	return (
		<CardStyled {...rest} className="animated zoomIn">
			<CardBody {...rest}>{children}</CardBody>
		</CardStyled>
	);
};

export default Card;

const CardBody = styled.div`
	padding: ${props => {
		if (props.p0) {
			return "0";
		} else {
			return "1.5rem";
		}
	}};
`;

const CardStyled = styled.div`
	display: block;
	position: relative;
	width: 100%;
	background: #fff;
	border-radius: 0.5rem;
	box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
	transition: transform 0.35s, opacity 0.28s ease-in-out;
	${props => {
		if (props.mb) {
			return `
                margin-bottom: ${props.mb}px
            `;
		}
	}}
	${props => {
		if (props.textCenter) {
			return `
                text-align: center;
            `;
		}
	}}
`;
