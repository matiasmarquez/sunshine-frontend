import React, { useState } from "react";
import styled from "styled-components";
import { Formik, Form as FormFormik, Field } from "formik";
import * as Yup from "yup";
import moment from "moment";

import _ from "lodash";

import Button from "main/components/Button";
import Input from "main/components/FormElements/Input";
import Select from "main/components/FormElements/Select";
import Installments from "main/components/FormElements/Installments";
import SubmitContainer from "main/components/FormElements/SubmitContainer";

import Alert from "main/components/Inscription/Alert";

import { Tab, Tabs, TabList, TabPanel } from "main/components/Tabs";

const Form = props => {
	const initialValues = {
		course: null,
		student: null,
		installments: [],
		price: undefined
	};
	const [tabActive, setTabActive] = useState(0);
	const { data = initialValues, courses, students, mutation, create } = props;

	const validationSchema = Yup.object().shape({
		course: Yup.string()
			.required("El curso es requerido")
			.nullable(),
		student: Yup.string()
			.required("El alumno es requerido")
			.nullable(),
		installments: Yup.array()
			.of(
				Yup.object().shape({
					price: Yup.number()
						.moreThan(0, "El precio debe ser mayor a $0")
						.integer("El precio es requerido")
						.required("El precio es requerido")
						.transform((cv, ov) => {
							return ov === "" ? undefined : cv;
						})
				})
			)
			.required("Las cuotas son requeridas")
	});

	return (
		<Formik
			onSubmit={(
				{ course, student, installments, price, ...rest },
				{ resetForm }
			) => {
				const filtered = [];
				_.forEach(installments, installment => {
					filtered.push(_.omit(installment, ["__typename", "id"]));
				});
				const result = mutation({
					variables: {
						...rest,
						courseId: course.id,
						studentId: student.id,
						installments: filtered,
						price
					}
				});
				result.then(res => {
					if (res.data && create) {
						resetForm();
					}
				});
				if (create) {
					setTabActive(0);
				}
			}}
			initialValues={data}
			validationSchema={validationSchema}
			render={({ values, errors }) => {
				return (
					<FormFormik>
						<Tabs
							selectedIndex={tabActive}
							onSelect={index => setTabActive(index)}
							forceRenderTabPanel={true}
						>
							<TabList>
								<Tab>Información general</Tab>
								<Tab>
									Cuotas{" "}
									{errors && errors["installments"] && (
										<ErrorInstallments>!</ErrorInstallments>
									)}
									{!create && (
										<Alert
											ml={10}
											installments={values.installments}
										/>
									)}
								</Tab>
							</TabList>
							<TabPanel>
								<Field
									name="course"
									label="Curso *"
									options={courses}
									optionValue="id"
									optionLabel="name"
									placeholder="Seleccionar curso"
									component={Select}
									callback={(option, setValue) => {
										const installments = _.map(
											option.installments,
											installment => {
												installment.paid = false;
												installment.comment = "";
												installment.date = moment(
													installment.date
												)
													.hour(23)
													.minute(59)
													.second(59);
												return installment;
											}
										);
										setValue("installments", installments);
									}}
								/>
								<Field
									name="student"
									label="Alumno *"
									options={students}
									optionValue="id"
									optionLabel={["name", "lastName"]}
									placeholder="Seleccionar alumno"
									component={Select}
								/>
								<Field
									name="price"
									label="Precio completo (opcional)"
									type="number"
									component={Input}
								/>
							</TabPanel>
							<TabPanel>
								<Field
									name="installments"
									withPayment={true}
									withComment={true}
									component={Installments}
								/>
							</TabPanel>
						</Tabs>
						<SubmitContainer>
							<Button
								success
								filled
								text="Guardar"
								type="submit"
							/>
						</SubmitContainer>
					</FormFormik>
				);
			}}
		/>
	);
};

const ErrorInstallments = styled.span`
	color: ${props => `rgb(${props.theme.danger})`};
	background: #fff;
	animation: pulse 2s infinite;
	margin-left: 7px;
	width: 18px;
	height: 18px;
	font-weight: 600;
	border-radius: 4px;
`;

export default Form;
