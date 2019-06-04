import React from "react";
import styled from "styled-components";

import undraw from "assets/undraw.svg";
import Button from "main/components/Button";
import { paths } from "config/routes";

const Page404 = ({ history }) => (
	<React.Fragment>
		<ImgStyled src={undraw} alt="404" />
		<Text>404</Text>
		<Button
			history={history}
			path={paths.home}
			text="Volver al inicio"
			primary
			filled
		/>
	</React.Fragment>
);

const ImgStyled = styled.img`
	width: 460px;
	max-width: 100%;
	height: auto;
`;

const Text = styled.h1`
	font-size: 46px;
	font-weight: 600;
	color: #909090;
`;

export default Page404;
