import React from "react";
import styled from "styled-components";

import Button from "../Button";

const Card = props => {
	const { children, title, actions, ...rest } = props;

	return (
		<CardStyled {...rest} className="animated zoomIn">
			{title && (
				<CardHeader>
					<CardTitle>{title}</CardTitle>
					<CardActions>
						{actions &&
							actions.map((action, key) => (
								<Button {...action} type="button" key={key} />
							))}
					</CardActions>
				</CardHeader>
			)}
			<CardBody {...rest}>{children}</CardBody>
		</CardStyled>
	);
};

export default Card;

const CardActions = styled.div``;

const CardTitle = styled.h4`
	line-height: 1.2;
	margin: 0;
	font-size: 18.8px;
	font-weight: 500;
	color: #2c2c2c;
`;

const CardHeader = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	padding: 21px 21px 0;
`;

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
