import React from "react";
import styled from "styled-components";

const Content = props => {
	return (
		<ContentStyled>
			<Wrapper>
				<Container>{props.children}</Container>
			</Wrapper>
		</ContentStyled>
	);
};

export default Content;

const ContentStyled = styled.div`
	position: relative;
	z-index: 2;
	float: right;
	min-height: 100%;
	max-height: 100%;
	height: 100%;
	width: 100%;
	transform: translate3d(0px, 0, 0);
	transition: all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1);
`;

const Container = styled.div`
	padding: 0 15px;
	@media (min-width: 992px) {
		padding: 0 30px;
	}
`;

const Wrapper = styled.div`
	position: relative;
	min-height: calc(100% - 123px);
	transition: all 0.3s ease;
	padding-top: 70px;

	@media (min-width: 992px) {
		padding-left: 260px;
	}
`;
