import React, { useEffect, useState } from "react";
import styled from "styled-components";

import background from "assets/lowpoly.jpg";
import LoadingView from "main/views/Loading";

const Layout = ({ children }) => {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const img = new Image();
		img.src = background;

		img.onload = () => {
			setLoaded(true);
		};
	}, []);

	if (!loaded) {
		return <LoadingView />;
	}
	return <Container>{children}</Container>;
};

const Container = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100%;
	padding: 0 15px;
	background-image: url(${background});
	background-size: cover;
	background-repeat: no-repeat;
`;

export default Layout;
