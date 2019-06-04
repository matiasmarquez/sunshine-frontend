import React from "react";
import styled from "styled-components";
import { renderToStaticMarkup } from "react-dom/server";

import Noty from "noty";
import FeatherIcon from "feather-icons-react";

import "noty/lib/noty.css";
import "noty/lib/themes/sunset.css";

const Notification = ({ type, text, timeout = 4000 }) => {
	const template = (
		<Box type={type}>
			<Icon>
				{type === "success" && <FeatherIcon icon="check-circle" />}
				{type === "error" && <FeatherIcon icon="x-circle" />}
			</Icon>
			<Body>{text}</Body>
		</Box>
	);
	return new Noty({
		type,
		text,
		timeout,
		callbacks: {
			onTemplate: function() {
				this.barDom.innerHTML = renderToStaticMarkup(template);
			}
		}
	}).show();
};

const Box = styled.div`
	display: flex;
	align-items: flex-start;
	padding: 16px;
	font-weight: 500;
	margin-bottom: 8px;
	-webkit-box-shadow: 0 3px 6px rgba(8, 35, 51, 0.05);
	box-shadow: 0 3px 6px rgba(8, 35, 51, 0.05);
	border-radius: 6px;
	${props =>
		props.type === "success" &&
		`
        background: #15bd76;
        color: #fff;
    `};
	${props =>
		props.type === "error" &&
		`
        background: rgb(234, 84, 85);
        color: #fff;
    `};
`;

const Body = styled.div`
	flex: 1 1;
`;

const Icon = styled.div`
	display: flex;
	position: relative;
	font-size: 24px;
	width: 24px;
	margin-right: 12px;
	top: -3px;
`;

export default Notification;
