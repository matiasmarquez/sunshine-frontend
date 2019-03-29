import React from "react";
import styled from "styled-components";

import { NavLink as LinkRouter } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import ReactTooltip from "react-tooltip";

const StarredPages = ({ pages }) => (
	<List>
		{pages &&
			pages.map(({ path, icon, text }, key) => (
				<Item key={key}>
					<Link
						to={path}
						data-tip={text}
						exact
						activeClassName="active"
					>
						<FeatherIcon icon={icon} size={22} />
					</Link>
				</Item>
			))}
		<ReactTooltip place="bottom" offset={{ bottom: 5 }} />
	</List>
);

export default StarredPages;

const List = styled.ul`
	display: flex;
	list-style: none;
	margin: 0;
	padding: 0;
`;

const Item = styled.li``;

const Link = styled(LinkRouter)`
	color: #626262;
	padding: 7px;
	&:hover,
	&.active {
		color: ${props => `rgb(${props.theme.primary})`};
	}
`;
