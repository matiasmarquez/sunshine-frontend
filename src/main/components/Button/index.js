import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import FeatherIcon from "feather-icons-react";

const Button = props => {
	const { text, path, icon, onClick, ...rest } = props;

	const routeChange = () => {
		if (!path) {
			return;
		}
		props.history.push(path);
	};

	return (
		<ButtonStyled {...rest} onClick={path ? routeChange : onClick}>
			{icon && <ButtonIcon icon={icon} size={props.typeicon ? 19 : 14} />}
			<ButtonText>{text}</ButtonText>
		</ButtonStyled>
	);
};

Button.propTypes = {
	text: PropTypes.string,
	icon: PropTypes.string,
	path: PropTypes.string,

	// Types
	block: PropTypes.bool,

	// Margin
	mr: PropTypes.number,

	// Colores
	primary: PropTypes.bool,
	success: PropTypes.bool,
	danger: PropTypes.bool,
	coral: PropTypes.bool
};

const ButtonStyled = styled.button`
	position: relative;
	border-radius: 6px;
	font-family: inherit;
	cursor: pointer;
	transition: all 0.2s ease;
	${props => {
		if (props.block) {
			return `
				display: block;
				width: 100%;
			`;
		}
	}}
	${props => {
		if (props.xs) {
			return `	
					padding: 7px 16px;
					font-size: 12px;
				`;
		} else {
			return `	
					padding: 10.5px 28px;
					font-size: 14px;
				`;
		}
	}}
	${props => {
		if (props.typeicon) {
			return `
				padding: 0;
				width: 32px;
				height: 32px;
				border-radius: 50px;
			`;
		}
	}}
	color: ${props => {
		if (props.flat || props.border) {
			if (props.success) {
				return `rgb(${props.theme.success})`;
			}
			if (props.coral) {
				return `rgb(${props.theme.coral})`;
			}
			if (props.danger) {
				return `rgb(${props.theme.danger})`;
			}
		}
		if (props.filled) {
			return `#fff`;
		}
	}};
	border: ${props => {
		if (props.border) {
			if (props.success) {
				return `1px solid rgb(${props.theme.success})`;
			}
			if (props.danger) {
				return `1px solid rgb(${props.theme.danger})`;
			}
		}
		return `0`;
	}};
	${props => {
		if (props.mr) {
			return `
				margin-right: ${props.mr}px
			`;
		}
	}}
	background: ${props => {
		if (props.primary && props.filled) {
			return `rgb(${props.theme.primary})`;
		}
		if (props.success && props.filled) {
			return `rgb(${props.theme.success})`;
		}
		if (props.danger && props.filled) {
			return `rgb(${props.theme.danger})`;
		}
		if (props.coral && props.filled) {
			return `rgb(${props.theme.coral})`;
		}
		return `transparent`;
	}};
	&:hover {
		background: ${props => {
			if (props.success && (props.flat || props.border)) {
				return `rgba(${props.theme.success}, .08)`;
			}
			if (props.danger && (props.flat || props.border)) {
				return `rgba(${props.theme.danger}, .08)`;
			}
			if (props.coral && (props.flat || props.border)) {
				return `rgba(${props.theme.coral}, .08)`;
			}
		}};
		box-shadow: ${props => {
			if (props.primary && props.filled) {
				return `0 8px 25px -8px rgba(${props.theme.primary}, 1)`;
			}
			if (props.success && props.filled) {
				return `0 8px 25px -8px rgba(${props.theme.success}, 1)`;
			}
			if (props.danger && props.filled) {
				return `0 8px 25px -8px rgba(${props.theme.danger}, 1)`;
			}
			if (props.coral && props.filled) {
				return `0 8px 25px -8px rgba(${props.theme.coral}, 1)`;
			}
		}};
	}
	&:active {
		background: ${props => {
			if (props.flat || props.border) {
				if (props.success) {
					return `rgb(${props.theme.success})`;
				}
				if (props.danger) {
					return `rgb(${props.theme.danger})`;
				}
				if (props.coral) {
					return `rgb(${props.theme.coral})`;
				}
			}
		}};
		color: ${props => {
			if (props.flat || props.border) {
				return `#fff`;
			}
		}};
	}
`;

const ButtonIcon = styled(FeatherIcon)`
	position: relative;
	top: 1px;
`;

const ButtonText = styled.span``;

export default Button;
