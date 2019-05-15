import React, { useState } from "react";
import styled from "styled-components";
import { Formik, Form as FormFormik, Field } from "formik";
import * as Yup from "yup";

import _ from "lodash";

import Button from "main/components/Button";
import Input from "main/components/FormElements/Input";
import Textarea from "main/components/FormElements/Textarea";
import Select from "main/components/FormElements/Select";
import Installments from "main/components/FormElements/Installments";
import SubmitContainer from "main/components/FormElements/SubmitContainer";

import { Tab, Tabs, TabList, TabPanel } from "main/components/Tabs";

const Form = props => {
	const initialValues = {
		name: "",
		installments: [],
		category: null,
		description: "",
		duration: "",
		schedule: "",
		price: 0
	};
	const [tabActive, setTabActive] = useState(0);
	const { data = initialValues, categories, create, mutation } = props;

	const validationSchema = Yup.object().shape({
		name: Yup.string().required("El nombre es requerido"),
		category: Yup.string()
			.required("La categoría es requerida")
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
			onSubmit={({ category, installments, ...rest }, { resetForm }) => {
				const filtered = [];
				_.forEach(installments, installment => {
					filtered.push(_.omit(installment, ["__typename"]));
				});
				const result = mutation({
					variables: {
						...rest,
						installments: filtered,
						categoryId: category.id
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
						>
							<TabList>
								<Tab>Información general</Tab>
								<Tab>
									Cuotas{" "}
									{errors && errors["installments"] && (
										<ErrorInstallments>!</ErrorInstallments>
									)}
								</Tab>
							</TabList>
							<TabPanel>
								<Field
									name="name"
									label="Nombre"
									type="text"
									component={Input}
								/>
								<Field
									name="category"
									label="Categoría"
									options={categories}
									optionValue="id"
									optionLabel="name"
									placeholder="Seleccionar categoría"
									component={Select}
								/>
								<Field
									name="duration"
									label="Duración"
									type="text"
									component={Input}
								/>
								<Field
									name="schedule"
									label="Horario"
									type="text"
									component={Input}
								/>
								<Field
									name="description"
									label="Descripción"
									type="text"
									component={Textarea}
								/>
							</TabPanel>
							<TabPanel>
								<Field
									name="installments"
									label="Cuotas"
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
	animation: pulse 2s infinite;
	margin-left: 7px;
	width: 18px;
	height: 18px;
	font-weight: 600;
	border-radius: 4px;
`;

export default Form;
