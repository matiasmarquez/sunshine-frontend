import React from "react";

import UserController from "main/controllers/UserController";
import { paths } from "config/routes";

import ContentHeader from "main/layouts/private/components/ContentHeader";
import Form from "main/components/User/Form";
import Card from "main/components/Card";

const UserEdit = ({ match, history }) => (
	<UserController action="edit" match={match} history={history}>
		{({ data, loading, updateMutation }) => (
			<React.Fragment>
				<ContentHeader
					title="Edición de Usuario"
					breadcrumb={[
						{
							text: "Usuarios",
							route: paths.userList
						},
						{
							text: "Edición",
							active: true
						}
					]}
				/>
				{!loading && (
					<Card>
						<Form
							data={data && data.user}
							mutation={updateMutation}
						/>
					</Card>
				)}
			</React.Fragment>
		)}
	</UserController>
);

export default UserEdit;
