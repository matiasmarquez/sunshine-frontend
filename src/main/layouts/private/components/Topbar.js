import React from "react";
import styled from "styled-components";

import { paths } from "config/routes";
import StarredPages from "main/components/StarredPages";

import LayoutContext from "main/layouts/private/context";
import ButtonMenu from "./ButtonMenu";
import TopbarAuth from "./TopbarAuth";

const Topbar = ({ history }) => (
	<LayoutContext.Consumer>
		{({ toggleFolded }) => (
			<Wrapper>
				<Navbar>
					<ButtonMenu onClick={toggleFolded} />
					<StarredPages
						pages={[
							{
								path: paths.studentList,
								text: "Alumnos",
								icon: "users"
							},
							{
								path: paths.courseList,
								text: "Cursos",
								icon: "book-open"
							},
							{
								path: paths.inscriptionList,
								text: "Inscripciones",
								icon: "clipboard"
							},
							{
								path: paths.staffList,
								text: "Staff",
								icon: "star"
							}
						]}
					/>
					<TopbarAuth history={history} />
				</Navbar>
			</Wrapper>
		)}
	</LayoutContext.Consumer>
);

export default Topbar;

const Navbar = styled.header`
	display: flex;
	position: fixed;
	align-items: center;
	justify-content: space-between;
	box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
	padding: 11px 14px;
	width: calc(100% - 30px);
	min-height: 62px;
	background: #fff;
	border-radius: 7px;
	z-index: 10000;
	@media (min-width: 992px) {
		width: calc(100% - 320px);
	}
`;

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	padding: 30px 0;
	padding-top: 18px;
	width: 100%;
	margin-left: 15px;
	height: 103px;
	background: linear-gradient(
		180deg,
		hsla(0, 0%, 97.3%, 0.95) 44%,
		hsla(0, 0%, 97.3%, 0.46) 73%,
		hsla(0, 0%, 100%, 0)
	);
	background-repeat-x: repeat;
	background-repeat-y: no-repeat;
	z-index: 9;
	@media (min-width: 992px) {
		margin-left: 290px;
		width: calc(100% - 320px);
	}
`;
