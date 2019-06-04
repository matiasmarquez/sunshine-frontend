import React from "react";
import styled from "styled-components";

import FeatherIcon from "feather-icons-react";

const ButtonMenu = ({ onClick }) => (
	<Button onClick={onClick}>
		<FeatherIcon icon="menu" size={24} />
	</Button>
);

const Button = styled.a`
	color: #626262;
	cursor: pointer;
	&:hover,
	&.active {
		color: ${props => `rgb(${props.theme.primary})`};
	}
	@media (min-width: 992px) {
		display: none;
	}
`;

export default ButtonMenu;
