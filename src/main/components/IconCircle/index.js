import React from "react";
import styled from "styled-components";

import FeatherIcon from "feather-icons-react";

const IconCircle = ({ icon, ...rest }) => (
	<Circle {...rest}>
		<Icon icon={icon} size={24} />
	</Circle>
);

const Circle = styled.div`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	padding: 10.5px;
	margin-bottom: 15px;
	border-radius: 50%;
	${props => {
		if (props.purple) {
			return `
                color: #7367F0;
                background: #EAE8FD;
            `;
		}
		if (props.green) {
			return `
                color: #28C76F;
                background: #DFF7E9;
            `;
		}
		if (props.red) {
			return `
                color: #EA5455;
                background: #FCE6E6;
            `;
		}
		if (props.orange) {
			return `
                color: #FF9F43;
                background: #FFF1E3;
            `;
		}
	}};
`;

const Icon = styled(FeatherIcon)``;

export default IconCircle;
