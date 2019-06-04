import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
	return <Container>{children}</Container>;
};

const Container = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100%;
`;

export default Layout;
