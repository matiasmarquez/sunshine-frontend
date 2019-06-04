import React from "react";
import styled from "styled-components";
import Breadcrumb from "../../../components/Breadcrumb";
import Button from "../../../components/Button";

const ContentHeader = props => {
	const { title, breadcrumb, actions } = props;

	return (
		<Header>
			<HeaderLeft>
				<TitleContainer>
					<Title>{title}</Title>
				</TitleContainer>
				<Breadcrumb routes={breadcrumb} />
			</HeaderLeft>
			<HeaderRight>
				{actions &&
					actions.map((props, key) => (
						<Button {...props} filled bold key={key} />
					))}
			</HeaderRight>
		</Header>
	);
};

const Header = styled.div`
	display: block;
	flex-wrap: wrap;
	align-items: center;
	margin-bottom: 24px;
	@media (min-width: 768px) {
		display: flex;
	}
`;

const TitleContainer = styled.div`
	padding-right: 15px;
	@media (min-width: 768px) {
		border-right: 1px solid #dae1e7;
	}
`;

const Title = styled.h1`
	font-size: 24.3px;
	text-align: center;
	font-weight: 500;
	margin-top: 0;
	margin-bottom: 3px;
	color: #636363;
	@media (min-width: 768px) {
		font-size: 21px;
		text-align: left;
	}
	@media (min-width: 992px) {
		font-size: 24.3px;
	}
`;

const HeaderLeft = styled.div`
	display: block;
	align-items: center;
	flex: 2;
	@media (min-width: 768px) {
		display: flex;
	}
`;
const HeaderRight = styled.div`
	display: none;
	@media (min-width: 768px) {
		display: block;
	}
`;

export default ContentHeader;
