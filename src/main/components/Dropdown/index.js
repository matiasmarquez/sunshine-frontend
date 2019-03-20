import React, { useState } from "react";
import styled from "styled-components";
import { NavLink as LinkRouter } from "react-router-dom";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import withStyles from "@material-ui/core/styles/withStyles";

import FeatherIcon from "feather-icons-react";

const Dropdown = props => {
	const [opener, setOpener] = useState(null);
	const { text, options } = props;

	const handleOpen = e => {
		setOpener(e.currentTarget);
	};

	const handleClose = () => {
		setOpener(null);
	};

	return (
		<React.Fragment>
			<Opener aria-haspopup="true" onClick={handleOpen}>
				{text && text}
				{!text && <FeatherIcon icon="more-vertical" />}
			</Opener>
			<MenuStyled
				open={Boolean(opener)}
				onClose={handleClose}
				anchorEl={opener}
			>
				{options.map(({ text, type, icon, route }, key) => (
					<MenuItemStyled type={type} key={key}>
						<MenuLink to={route}>
							<MenuItemIcon icon={icon} size={13} />
							{text}
						</MenuLink>
					</MenuItemStyled>
				))}
			</MenuStyled>
		</React.Fragment>
	);
};

export default Dropdown;

const MenuStyled = withStyles({
	paper: {
		marginTop: 36
	}
})(Menu);

const Opener = styled.button`
	position: absolute;
	top: 8px;
	right: 3px;
	background: transparent;
	border: 0;
	cursor: pointer;
	text-transform: none;
	color: #7d7d7d;
	transition: all 0.1s ease;
	&:hover {
		color: ${props => {
			return `rgb(${props.theme.primary})`;
		}};
	}
`;

const MenuItemStyled = styled(MenuItem)`
	&& {
		font-size: 13px;
		font-family: "Montserrat", sans-serif;
		padding: 0;
		height: auto;
		&:focus,
		&:hover {
			background: #f8f8f8;
		}
		a {
			padding: 11px 16px;
			color: ${props => {
				if (props.type === "danger") {
					return `rgb(${props.theme.danger})`;
				} else {
					return `#626262`;
				}
			}};
			&:hover {
				color: ${props => {
					if (props.type === "danger") {
						return `rgb(${props.theme.danger})`;
					} else {
						return `#626262`;
					}
				}};
			}
		}
	}
`;

const MenuLink = styled(LinkRouter)`
	display: block;
	width: 100%;
	font-weight: 500;
`;

const MenuItemIcon = styled(FeatherIcon)`
	vertical-align: middle;
	margin-right: 5px;
	line-height: 25.5px;
	overflow: initial;
	height: auto;
`;

const MenuSeparator = styled.div`
	height: 0;
	margin: 0.5rem 0;
	overflow: hidden;
	border-top: 1px solid #e9ecef;
`;
