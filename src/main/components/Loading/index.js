import React from "react";
import styled from "styled-components";

const Loading = props => (
	<Container {...props}>
		<Effect1 />
		<Effect2 />
		<Effect3 />
	</Container>
);

const Container = styled.div`
	position: relative;
	${props => {
		if (props.small) {
			return `
				width: 29px;
				height: 29px;		
			`;
		} else {
			return `
				width: 55px;
				height: 55px;		
			`;
		}
	}}
	display: block;
	border-radius: 50%;
	box-sizing: border-box;
	border: 3px solid transparent;
`;

const Effect1 = styled.div`
	@keyframes rotate {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		to {
			-webkit-transform: rotate(1turn);
			transform: rotate(1turn);
		}
	}
	position: absolute;
	width: 100%;
	height: 100%;
	border: 3px solid transparent;
	border-left: ${props => {
		return `3px solid rgb(${props.theme.primary})`;
	}};
	border-radius: 50%;
	box-sizing: border-box;
	animation: rotate 1s ease infinite;
	transition: all 0.3s ease;
`;

const Effect2 = styled.div`
	@keyframes rotateOpacity {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
			opacity: 0.1;
		}
		to {
			-webkit-transform: rotate(1turn);
			transform: rotate(1turn);
			opacity: 1;
		}
	}
	position: absolute;
	width: 100%;
	height: 100%;
	border: 3px solid transparent;
	border-left: ${props => {
		return `3px solid rgb(${props.theme.primary})`;
	}};
	border-radius: 50%;
	box-sizing: border-box;
	animation: rotateOpacity 1s ease 0.1s infinite;
	transition: all 0.3s ease;
`;

const Effect3 = styled.div`
	@keyframes rotateOpacity {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
			opacity: 0.1;
		}
		to {
			-webkit-transform: rotate(1turn);
			transform: rotate(1turn);
			opacity: 1;
		}
	}
	position: absolute;
	width: 100%;
	height: 100%;
	border: 3px solid transparent;
	border-left: ${props => {
		return `3px solid rgb(${props.theme.primary})`;
	}};
	animation: rotateOpacity 1s ease 0.2s infinite;
	border-radius: 50%;
	box-sizing: border-box;
	transition: all 0.3s ease;
`;

export default Loading;
