import React from "react";
import styled from "styled-components";
import PickerComponent from "react-date-picker";

import Label from "./Label";

const DatePicker = ({
	field: { name, value },
	form: { errors = null, setFieldValue },
	format,
	label
}) => {
	//const error = errors && errors[name];

	const handleOnChange = date => {
		console.log(date);
		setFieldValue(name, date);
	};

	return (
		<React.Fragment>
			<Label label={label} />
			<PickerComponentStyled
				format={format}
				value={value}
				onChange={handleOnChange}
			/>
		</React.Fragment>
	);
};

export default DatePicker;

const PickerComponentStyled = styled(PickerComponent)`
	& {
		display: block;
	}
	& .react-date-picker__wrapper {
		position: relative;
		width: 100%;
		font-size: 14px;
		padding-right: 10px;
		font-family: "Open Sans", sans-serif;
		margin-bottom: 15px;
		color: inherit;
		border: 1px solid rgba(0, 0, 0, 0.2);
		border-radius: 5px;
		transition: all 0.3s ease;
		outline: none;
	}
	&.react-date-picker--open .react-date-picker__wrapper {
		box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.15);
		border: ${props => {
			return `1px solid rgb(${props.theme.primary})`;
		}};
	}
	& .react-date-picker__inputGroup {
		padding: 10px;
	}
	& .react-date-picker__clear-button {
		display: none;
	}
	& .react-date-picker__button:enabled svg g {
		stroke: #696969;
	}
	& .react-date-picker__button:enabled:hover svg g {
		stroke: ${props => `rgb(${props.theme.primary})`};
	}
	& .react-calendar {
		font-family: "Montserrat", sans-serif;
		background: #fff;
		margin-top: 5px;
		border-radius: 0.5rem;
		box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
		border: 0;
		&__month-view__weekdays__weekday abbr {
			text-decoration: none;
		}
	}
`;
