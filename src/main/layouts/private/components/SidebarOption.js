import React, { useState } from "react";
import styled from "styled-components";

import { Collapse } from "react-collapse";
import { NavLink as LinkRouter } from "react-router-dom";

import FeatherIcon from "feather-icons-react";
import { presets } from "react-motion";

const SidebarOption = props => {
	const [collapsed, setCollapsed] = useState(false);
	const { url, text, icon, childrens } = props.data;

	const handleCollapse = () => {
		setCollapsed(!collapsed);
	};

	return (
		<Wrapper>
			<Link
				to={url}
				exact
				onClick={handleCollapse}
				activeClassName="active"
				className={collapsed && childrens && "active-submenu"}
			>
				{icon && <FeatherIcon size={20} icon={icon} />}
				<Title>
					{text}
					{childrens && (
						<Arrow
							className="mdi mdi-chevron-down"
							toggle={collapsed}
						/>
					)}
				</Title>
			</Link>

			{childrens && (
				<Collapse
					isOpened={collapsed}
					hasNestedCollapse={true}
					springConfig={presets.gentle}
				>
					<Submenu>
						{childrens.map(children => (
							<SidebarOption data={children} key={children.url} />
						))}
					</Submenu>
				</Collapse>
			)}
		</Wrapper>
	);
};

export default SidebarOption;

const Link = styled(LinkRouter)`
	display: flex;
	align-items: center;
	font-weight: 400;
	font-size: 15px;
	padding: 11px 15px 11px 20px;
	margin-bottom: 12px;
	border-radius: 4px;
	transition: none;
	color: #626262;
	transition: transform 0.25s ease;
	box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0);
	&:hover {
		transform: translateX(5px);
		color: #626262;
	}
	&.active,
	&.active:hover {
		color: #fff;
		box-shadow: ${props => {
			return `0 0 10px 1px rgba(${props.theme.primary}, 0.7)`;
		}};
		background: ${props => {
			return `linear-gradient(
				118deg, 
				rgba(${props.theme.primary}, 1),
				rgba(${props.theme.primary}, 0.7)
			)`;
		}};
	}
	&.active-submenu {
		background: #f6f6f6;
		transition: background transform 0.25s ease;
	}
`;
const Wrapper = styled.li`
	display: block;
	position: relative;
`;
const Title = styled.span`
	line-height: 20px;
	margin-left: 10px;
`;
const Submenu = styled.ul`
	padding: 0;
	background: transparent;
	& ${Link} {
		padding-left: 25px;
		& > svg {
			width: 10px;
			height: 10px;
		}
		&:last-child {
			margin-bottom: 0;
		}
	}
`;
const Arrow = styled.span`
	position: absolute;
	right: 15px;
	font-size: 15px;
	transition: transform 0.1s ease-in-out;
	transform: ${props => {
		return props.toggle ? "rotate(0deg)" : "rotate(-90deg)";
	}};
`;
