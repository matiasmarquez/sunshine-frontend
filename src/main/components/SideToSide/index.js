import React from "react";
import styled from "styled-components";

const SideToSide = ({ left, right }) => {
	return (
		<Container>
			<Data>
				<Title>{left.title}</Title>
				<Value>{left.value}</Value>
			</Data>
			<Data>
				<Title>{right.title}</Title>
				<Value>{right.value}</Value>
			</Data>
		</Container>
	);
};

const Title = styled.p`
	line-height: 1.5;
	margin: 0;
	margin-top: 15px;
`;

const Value = styled.p`
	font-weight: 600;
	font-size: 26px;
	line-height: 1.5;
	margin: 0;
	margin-bottom: 15px;
`;

const Data = styled.div`
	width: 50%;
	border-top: 1px solid #dae1e7;
	border-right: 1px solid #dae1e7;
`;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	text-align: center;
	${Data}:last-child {
		border-right: 0;
	}
`;

export default SideToSide;
