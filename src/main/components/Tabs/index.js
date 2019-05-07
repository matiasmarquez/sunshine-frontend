import {
	Tabs as ReactTabs,
	Tab as ReactTab,
	TabList as ReactTabList,
	TabPanel as ReactTabPanel
} from "react-tabs";
import styled from "styled-components";

export const Tabs = styled(ReactTabs)``;

export const Tab = styled(ReactTab)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1 1 auto;
	position: relative;
	background: transparent;
	font-weight: 500;
	border-radius: 4px;
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
	margin: 0;
	margin-right: 5px;
	padding: 10px;
	border: 1px solid #ffead6;
	border-bottom: 0;
	text-align: center;
	cursor: pointer;
	transition: all 0.1s ease;
	&.react-tabs__tab--selected {
		background: ${props => `rgb(${props.theme.primary})`};
		color: #fff;
	}
`;

export const TabList = styled(ReactTabList)`
	display: flex;
	position: relative;
	width: 100%;
	padding: 0;
	margin: 0;
	margin-bottom: 20px;
	border-bottom: 1px solid #ffead6;
	list-style: none;
	${Tab}:last-child {
		margin-right: 0;
	}
`;

export const TabPanel = styled(ReactTabPanel)``;
