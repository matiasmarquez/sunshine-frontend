import React, { useState } from "react";
import styled from "styled-components";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import withStyles from "@material-ui/core/styles/withStyles";

import AuthController from "main/controllers/AuthController";

import FeatherIcon from "feather-icons-react";
import { paths } from "config/routes";

const TopbarAuth = () => {
	const [opener, setOpener] = useState(null);

	const handleOpen = e => {
		setOpener(e.currentTarget);
	};

	const handleClose = () => {
		setOpener(null);
	};

	return (
		<AuthController>
			{({ user, logout, history }) => (
				<IdentityInfo>
					<IdentityInfoContainer>
						<IdentityName>
							{user.name} {user.lastName}
						</IdentityName>
						<IdentityRole>Administrador</IdentityRole>
					</IdentityInfoContainer>
					<IdentityIconContainer onClick={handleOpen}>
						<FeatherIcon icon="user" size={20} />
					</IdentityIconContainer>
					<MenuStyled
						open={Boolean(opener)}
						onClose={handleClose}
						anchorEl={opener}
					>
						<MenuItemStyled>
							<MenuLink
								onClick={() => {
									handleClose();
									return history.push(
										paths.userEdit.replace(":id", user.id)
									);
								}}
							>
								<MenuItemIcon icon="edit" size={13} />
								Mis datos
							</MenuLink>
						</MenuItemStyled>
						<MenuItemStyled type="danger">
							<MenuLink onClick={() => logout()}>
								<MenuItemIcon icon="log-out" size={13} />
								Cerrar sesión
							</MenuLink>
						</MenuItemStyled>
					</MenuStyled>
				</IdentityInfo>
			)}
		</AuthController>
	);
};

const IdentityInfo = styled.div`
	display: flex;
	cursor: pointer;
	align-items: center;
`;

const IdentityInfoContainer = styled.div`
	text-align: right;
	margin-right: 10.5px;
`;

const IdentityName = styled.p`
	font-weight: 600;
	margin: 0;
	color: #626262;
`;

const IdentityRole = styled.small`
	color: #626262;
`;

const IdentityIconContainer = styled.div`
	background: #efefef;
	width: 32px;
	height: 32px;
	text-align: center;
	padding: 5px;
	border-radius: 50%;
`;

const MenuStyled = withStyles({
	paper: {
		marginTop: 54,
		marginLeft: -24
	}
})(Menu);

const MenuLink = styled.a`
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

export default TopbarAuth;
