import React from "react";
import styled from "styled-components";

const CategoryIndicator = ({ color, size = 15 }) => {
	return <Indicator color={color} size={size} />;
};

export default CategoryIndicator;

const Indicator = styled.div`
	border-radius: 50%;
	${props => {
		return `
            width: ${props.size}px;
            height: ${props.size}px;
            background: ${props.color};
        `;
	}}
`;
