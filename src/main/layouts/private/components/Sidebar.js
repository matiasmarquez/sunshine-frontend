import React, { Component } from "react";
import styled from "styled-components";

import { paths } from "../../../../config/routes";

import SidebarOption from "./SidebarOption";
import logo from "../../../../assets/logo1.png";

class Sidebar extends Component {
	render() {
		return (
			<SidebarStyled>
				<Header>
					<Logo>
						<img src={logo} alt="Sunshine" />
					</Logo>
				</Header>
				<Content>
					<List>
						{navigation.map(link => (
							<SidebarOption data={link} key={link.url} />
						))}
					</List>
				</Content>
			</SidebarStyled>
		);
	}
}

export default Sidebar;

const navigation = [
	{
		url: paths.home,
		icon: "home",
		text: "Inicio"
	},
	{
		url: "#",
		icon: "users",
		text: "Alumnos",
		childrens: [
			{
				url: paths.studentList,
				icon: "circle",
				text: "Listar"
			},
			{
				url: paths.studentCreate,
				icon: "circle",
				text: "Alta"
			}
		]
	},
	{
		url: "#1",
		icon: "book-open",
		text: "Cursos",
		childrens: [
			{
				url: paths.courseList,
				icon: "circle",
				text: "Listar"
			},
			{
				url: paths.courseCreate,
				icon: "circle",
				text: "Alta"
			}
		]
	},
	{
		url: "#2",
		icon: "star",
		text: "Staff",
		childrens: [
			{
				url: paths.staffList,
				icon: "circle",
				text: "Listar"
			},
			{
				url: paths.staffCreate,
				icon: "circle",
				text: "Alta"
			}
		]
	},
	{
		url: "#4",
		icon: "settings",
		text: "Configuración",
		childrens: [
			{
				url: paths.courseCategoryList,
				icon: "circle",
				text: "Categorías cursos"
			},
			{
				url: paths.staffCategoryList,
				icon: "circle",
				text: "Categorías staff"
			}
		]
	}
];

const SidebarStyled = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	width: 260px;
	height: 100vh;
	transition: 0.3s cubic-bezier(0, 0, 0.2, 1);
	transition-property: width, left;
	transform: translate3d(0, 0, 0);
	white-space: nowrap;
	visibility: visible;
	background-color: #fff;
	box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.05);
	z-index: 10;
	left: 0;
`;
const Header = styled.div``;
const Logo = styled.div`
	position: relative;
	min-height: 70px;
	text-align: center;
	padding: 20px 16px 16px;
	z-index: 4;
`;
const Content = styled.div`
	position: relative;
	height: calc(100vh - 90px);
	z-index: 4;
`;
const List = styled.ul`
	margin-top: 0;
	margin-bottom: 0;
	padding-left: 0;
	list-style: none;
	padding: 16px;
`;
