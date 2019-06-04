import React, { useState } from "react";
import styled from "styled-components";

import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Topbar from "./components/Topbar";

import LayoutContext from "./context";

const Layout = ({ children }) => {
	const [folded, setFolded] = useState(true);

	const toggleFolded = () => {
		setFolded(!folded);
	};

	return (
		<LayoutContext.Provider
			value={{
				folded,
				toggleFolded
			}}
		>
			<Wrapper>
				<Sidebar />
				<Topbar />
				<Content>{children}</Content>
				<SidebarBackdrop folded={folded} onClick={toggleFolded} />
			</Wrapper>
		</LayoutContext.Provider>
	);
};

const Wrapper = styled.div`
	position: relative;
	top: 0;
	height: 100vh;
`;

const SidebarBackdrop = styled.div`
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	position: fixed;
	display: block;
	z-index: 9;
	visibility: hidden;
	opacity: 0;
	background-color: rgba(0, 0, 0, 0.6);
	transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);
	@media (max-width: 992px) {
		${props => {
			if (!props.folded) {
				return `
                    visibility: visible;
                    opacity: 1;
                `;
			}
		}};
	}
`;

export default Layout;
