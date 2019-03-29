import React from "react";
import styled from "styled-components";

import { paths } from "config/routes";
import StarredPages from "main/components/StarredPages";
import FeatherIcon from "feather-icons-react";

const Topbar = props => {
	return (
		<Wrapper>
			<Navbar>
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
							path: paths.staffList,
							text: "Staff",
							icon: "star"
						}
					]}
				/>
				<IdentityInfo>
					<IdentityInfoContainer>
						<IdentityName>Sheila Weksler</IdentityName>
						<IdentityRole>Administrador</IdentityRole>
					</IdentityInfoContainer>
					<IdentityIconContainer>
						<FeatherIcon icon="user" size={20} />
					</IdentityIconContainer>
				</IdentityInfo>
			</Navbar>
		</Wrapper>
	);
};

export default Topbar;

const IdentityInfo = styled.div`
	display: flex;
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

const Navbar = styled.header`
	display: flex;
	position: fixed;
	align-items: center;
	justify-content: space-between;
	box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
	padding: 11px 14px;
	width: calc(100% - 320px);
	min-height: 62px;
	background: #fff;
	border-radius: 7px;
	z-index: 10000;
`;

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	padding: 30px 0;
	padding-top: 18px;
	width: calc(100% - 320px);
	margin-left: 290px;
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
`;
