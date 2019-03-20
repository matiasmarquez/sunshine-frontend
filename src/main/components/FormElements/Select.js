import React from "react";
import styled from "styled-components";

import Label from "./Label";
import ReactSelect from "react-select";

const Select = props => {
	const {
		field: { name },
		form: { errors = null, setFieldValue },
		options,
		optionValue,
		optionLabel,
		placeholder,
		label
	} = props;

	let { value } = props.field;
	const error = errors && errors[name];

	if (value === null) {
		value = "";
	}

	return (
		<div>
			<Label label={label} />
			<ReactSelectStyled
				name={name}
				classNamePrefix={"Select"}
				isClearable={true}
				placeholder={placeholder}
				options={options}
				getOptionLabel={option => option[optionLabel]}
				getOptionValue={option => option[optionValue]}
				value={
					options
						? options.find(option => option[optionValue] === value)
						: ""
				}
				onChange={option => {
					if (!option) {
						setFieldValue(name, null);
						return;
					}
					setFieldValue(name, option[optionValue]);
				}}
			/>
			<Error>{error && error}</Error>
		</div>
	);
};

export default Select;

const Error = styled.p`
	color: #ff4f56;
	font-size: 12px;
	margin: 0;
	margin-top: 5px;
`;

const ReactSelectStyled = styled(ReactSelect)`
	font-family: "Open Sans", sans-serif;
	margin-bottom: 15px;
	& .Select__control--is-focused {
		box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.15);
		border: ${props => `1px solid rgb(${props.theme.primary}) !important`};
	}
	& .Select__option {
		&--is-focused {
			background: #f9f9f9;
		}
		&--is-selected {
			background: ${props => `rgb(${props.theme.primary})`};
			&:hover {
				background: ${props =>
					`rgb(${props.theme.primary})`} !important;
			}
		}
		&:hover {
			background: #f9f9f9;
		}
	}
`;
