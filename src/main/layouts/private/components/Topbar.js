import React from "react";
import styled from "styled-components";

const Topbar = props => {
	return (
		<TopbarStyled>
			<NavbarRight />
		</TopbarStyled>
	);
};

export default Topbar;

const TopbarStyled = styled.div`
	left: 0;
	position: fixed;
	right: 0;
	top: 0;
	padding: 0 10px 0 0;
	z-index: 999;
	background: #fff;
	min-height: 70px;
	box-shadow: rgba(12, 52, 75, 0.05) 0px 3px 3px;
	transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);
	@media (min-width: 992px) {
		margin-left: 250px;
	}
`;

const NavbarRight = styled.ul`
	display: flex;
	float: right;
	list-style: none;
	padding-left: 0;
	margin-bottom: 0;
	margin-top: 11px;
`;
