import React from "react";
import styled from "styled-components";

import { NavLink as LinkRouter } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

const Breadcrumb = props => {
	const { routes } = props;

	return (
		<Container>
			<List>
				<Item>
					<Link to="/" exact>
						<FeatherIcon icon="home" size={18} />
					</Link>
					{routes && <Separator icon="chevrons-right" size={14} />}
				</Item>
				{routes.map(({ text, route, active }, key) => (
					<Item key={key}>
						{route && (
							<Link to={route} exact>
								{text}
							</Link>
						)}
						{active && <LinkActive>{text}</LinkActive>}
						{!active && (
							<Separator icon="chevrons-right" size={14} />
						)}
					</Item>
				))}
			</List>
		</Container>
	);
};

const Container = styled.div`
	margin-left: 15px;
`;

const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	margin: 0;
	padding: 0;
`;

const Item = styled.li`
	display: inline-flex;
	align-items: center;
`;

const Link = styled(LinkRouter)`
	color: ${props => {
		return `rgb(${props.theme.primary})`;
	}};
`;

const Separator = styled(FeatherIcon)`
	margin: 0 7px;
`;

const LinkActive = styled.span`
	color: #626262;
`;

export default Breadcrumb;
