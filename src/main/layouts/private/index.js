import React from "react";
import styled from "styled-components";

import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Topbar from "./components/Topbar";

const Layout = props => {
	const { children } = props;
	return (
		<Wrapper>
			<Sidebar />
			<Content>{children}</Content>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: relative;
	top: 0;
	height: 100vh;
`;

export default Layout;
