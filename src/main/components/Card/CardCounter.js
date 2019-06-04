import React from "react";
import styled from "styled-components";

import ChartArea from "main/components/Chart/ChartArea";
import Card from "main/components/Card";
import IconCircle from "main/components/IconCircle";
import Loading from "main/components/Loading";

const CardCounter = ({ total, text, icon, series, ...rest }) => (
	<Card p0>
		<DataContainer>
			<IconCircle icon={icon} {...rest} />
			<Total>
				{!total && <Loading small />}
				{total && total.length}
			</Total>
			<Title>{text}</Title>
		</DataContainer>
		<ChartContainer>
			<ChartArea series={series} {...rest} />
		</ChartContainer>
	</Card>
);

const ChartContainer = styled.div`
	height: 100px;
	position: relative;
	border-bottom-left-radius: 0.5rem;
	border-bottom-right-radius: 0.5rem;
	overflow: hidden;
`;

const DataContainer = styled.div`
	padding: 21px;
	padding-bottom: 0;
`;

const Total = styled.h2`
	font-weight: 700;
	font-size: 24.3px;
	line-height: 1.2;
	margin: 0;
	margin-bottom: 3.5px;
	color: #2c2c2c;
`;

const Title = styled.span`
	font-size: 14px;
`;

export default CardCounter;
