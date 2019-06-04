import React from "react";
import styled from "styled-components";

import Loading from "main/components/Loading";
import logo from "assets/logo.png";

const LoadingView = () => (
	<Container>
		<Logo src={logo} />
		<Loading />
	</Container>
);

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	overflow: hidden;
	background: rgba(255, 255, 255, 0.9);
`;

const Logo = styled.img`
	margin-bottom: 10px;
`;

export default LoadingView;
