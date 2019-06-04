import React from "react";

import UserController from "main/controllers/UserController";
import { paths } from "config/routes";

import ContentHeader from "main/layouts/private/components/ContentHeader";
import Form from "main/components/User/Form";
import Card from "main/components/Card";

const UserCreate = () => (
	<UserController>
		{({ createMutation }) => (
			<React.Fragment>
				<ContentHeader
					title="Alta de usuario"
					breadcrumb={[
						{
							text: "Usuarios",
							route: paths.userList
						},
						{
							text: "Alta",
							active: true
						}
					]}
				/>
				<Card>
					<Form create={true} mutation={createMutation} />
				</Card>
			</React.Fragment>
		)}
	</UserController>
);

export default UserCreate;
