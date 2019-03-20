import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Avatar from "../Avatar";
import Card from "../Card";
import Dropdown from "../Dropdown";

const Student = props => {
	const { id, name, lastName, address, phone, email, ...rest } = props;
	return (
		<Card mb={10} textCenter={true}>
			<Avatar
				name={name}
				lastName={lastName}
				display={"inline-block"}
				size={42}
			/>
			<Name>
				{name} {lastName}
			</Name>
			<Address>{address}</Address>
			<Dropdown
				options={[
					{
						text: "Editar alumno",
						icon: "edit-2",
						route: `/alumnos/editar/${id}`,
						...rest
					},
					{
						text: "Borrar alumno",
						icon: "trash-2",
						route: `/alumnos/borrar/${id}`,
						type: "danger",
						...rest
					}
				]}
			/>
		</Card>
	);
};

Student.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired
};

export default Student;

const Address = styled.small`
	display: inline-block;
	margin-top: 6px;
	font-size: 13px;
	color: #a9a9a9;
`;

const Name = styled.h1`
	margin-bottom: 0;
	color: #777;
	margin-top: 18px;
	font-size: 18px;
	font-weight: 500;
`;
