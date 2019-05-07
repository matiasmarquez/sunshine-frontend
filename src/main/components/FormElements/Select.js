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
		isMulti = false,
		noOptionsMessage = "No hay opciones disponibles",
		placeholder,
		callback,
		label
	} = props;

	const value = props.field.value;
	const error = errors && errors[name];

	const setValue = () => {
		if (options && value) {
			let output;
			if (!isMulti) {
				output = options.find(option => {
					if (typeof value !== "object") {
						return option[optionValue] === value;
					}
					return option[optionValue] === value[optionValue];
				});
			}
			if (isMulti) {
				output = options.filter(option =>
					value.some(val => option[optionValue] === val[optionValue])
				);
			}
			return output;
		}
		return "";
	};

	const setLabel = option => {
		if (optionLabel instanceof Array) {
			let out = "";
			optionLabel.forEach(property => {
				out += `${option[property]} `;
			});
			return out;
		}
		if (typeof optionLabel === "string") {
			return option[optionLabel];
		}
	};

	return (
		<div>
			<Label label={label} />
			<ReactSelectStyled
				name={name}
				classNamePrefix={"Select"}
				isClearable={true}
				placeholder={placeholder}
				options={options}
				noOptionsMessage={() => {
					return noOptionsMessage;
				}}
				getOptionLabel={option => setLabel(option)}
				getOptionValue={option => option[optionValue]}
				isMulti={isMulti}
				closeMenuOnSelect={!isMulti}
				value={setValue()}
				onChange={option => {
					if (!option) {
						setFieldValue(name, null);
						return;
					}
					setFieldValue(name, option);
					if (callback) {
						callback(option, setFieldValue);
					}
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
	& .Select__multi-value {
		background: ${props => `rgba(${props.theme.primary}, 0.1)`};
		border-radius: 2px;
		margin: 2px;
		&__label {
			color: ${props => `rgb(${props.theme.primary})`};
			font-weight: 600;
			font-size: 90%;
			text-overflow: ellipsis;
			white-space: nowrap;
			box-sizing: border-box;
			border-radius: 2px;
			overflow: hidden;
			padding: 3px 3px 3px 6px;
		}
		&__remove {
			color: ${props => `rgb(${props.theme.primary})`};
			&:hover {
				background: ${props => `rgb(${props.theme.primary})`};
				color: #fff;
			}
		}
	}
	& .Select__menu {
		background: #fff;
		z-index: 999;
	}
`;
