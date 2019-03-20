import React from "react";
import styled from "styled-components";
import Breadcrumb from "../../../components/Breadcrumb";

const ContentHeader = props => {
	const { title, breadcrumb } = props;

	return (
		<Header>
			<TitleContainer>
				<Title>{title}</Title>
			</TitleContainer>
			<Breadcrumb routes={breadcrumb} />
		</Header>
	);
};

const Header = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	margin-bottom: 24px;
`;

const TitleContainer = styled.div`
	padding-right: 15px;
	border-right: 1px solid #dae1e7;
`;

const Title = styled.h1`
	font-size: 24.3px;
	font-weight: 500;
	margin-top: 0;
	margin-bottom: 3px;
	color: #636363;
`;

export default ContentHeader;
