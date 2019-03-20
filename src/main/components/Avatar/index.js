import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Avatar = props => {
	const {
		name,
		lastName,
		size = 60,
		color = "#FF9F43",
		display = "block"
	} = props;

	const letterName = name.charAt(0);
	let letterLastName = null;
	if (lastName) {
		letterLastName = lastName.charAt(0);
	}

	return (
		<AvatarCircle size={size} background={color} display={display}>
			<span>
				{letterName}
				{letterLastName}
			</span>
		</AvatarCircle>
	);
};

Avatar.propTypes = {
	name: PropTypes.string.isRequired,
	lastName: PropTypes.string
};

const AvatarCircle = styled.div`
	display: ${props => props.display};
	font-size: ${props => props.size / 2.7}px;
	line-height: ${props => props.size}px;
	width: ${props => props.size}px;
	height: ${props => props.size}px;
	background: ${props => props.background};
	text-align: center;
	font-weight: 500;
	border-radius: 50%;
	color: #fff;
`;

export default Avatar;
