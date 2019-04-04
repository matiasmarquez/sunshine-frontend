import React, { useEffect } from "react";
import styled from "styled-components";
import _ from "lodash";

import { Field } from "formik";
import { Row, Col } from "react-flexbox-grid";

import Input from "./Input";
import Button from "../Button";
import Select from "main/components/FormElements/Select";
import Textarea from "main/components/FormElements/Textarea";

const Multiple = ({
	field: { name, value = [] },
	form: { errors = null, setFieldValue },
	withCols,
	colxsrow,
	rowAsCard,
	fields,
	label
}) => {
	useEffect(() => {
		if (value.length === 0) {
			handleAddRow();
		}
	});

	const handleAddRow = () => {
		let row = {};
		fields.forEach(field => {
			row[field.name] = "";
		});
		setFieldValue(name, _.concat(value, row));
	};

	const handleRemoveLastRow = () => {
		setFieldValue(name, _.dropRight(value));
	};

	return (
		<React.Fragment>
			<Header>
				<Title>{label}</Title>
				<Actions>
					<Button
						onClick={handleAddRow}
						type="button"
						icon="plus"
						mr={10}
						success
						typeicon
						flat
					/>
					<Button
						onClick={handleRemoveLastRow}
						type="button"
						icon="minus"
						danger
						typeicon
						flat
					/>
				</Actions>
			</Header>
			<Body rowAsCard={rowAsCard}>
				{value.length > 0 &&
					value.map((val, key) => (
						<Row key={key} className="animated zoomIn">
							{fields.map(
								(
									{
										type,
										name: nameProperty,
										label,
										options,
										optionValue,
										optionLabel,
										placeholder,
										colxs,
										colmd
									},
									keyProperty
								) => {
									return (
										<Col
											xs={colxs}
											md={colmd}
											key={keyProperty}
										>
											{type !== "select" &&
												type !== "textarea" && (
													<Field
														name={`${name}[${key}][${nameProperty}]`}
														label={label}
														type={type}
														component={Input}
													/>
												)}
											{type === "select" && (
												<Field
													name={`${name}[${key}][${nameProperty}]`}
													label={label}
													options={options}
													optionValue={optionValue}
													optionLabel={optionLabel}
													placeholder={placeholder}
													component={Select}
												/>
											)}
											{type === "textarea" && (
												<Field
													name={`${name}[${key}][${nameProperty}`}
													label={label}
													component={Textarea}
												/>
											)}
										</Col>
									);
								}
							)}
						</Row>
					))}
			</Body>
		</React.Fragment>
	);
};

export default Multiple;

const Body = styled.div`
	padding: 15px;
	border: 2px solid #f8f8f8;
	border-top: 0;
	margin-bottom: 15px;
	${props => {
		if (props.rowAsCard) {
			return `
				& .row{
					border-radius: 0.5rem;
					box-shadow: 0 4px 25px 0 rgba(0,0,0,0.1);
					padding: 20px 15px;
					margin-bottom: 20px;
				}
			`;
		}
	}}
`;

const Actions = styled.div`
	display: flex;
	align-items: center;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 15px 20px;
	align-items: center;
	background: #f8f8f8;
	color: #626262;
`;

const Title = styled.h4`
	font-size: 18px;
	margin: 0;
	font-weight: 500;
	color: #626262;
`;
