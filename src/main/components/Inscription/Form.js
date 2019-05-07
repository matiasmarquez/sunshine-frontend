import React, { useState } from "react";
import { Formik, Form as FormFormik, Field } from "formik";
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
		price: null
	};
	const [tabActive, setTabActive] = useState(0);
	const { data = initialValues, courses, students, mutation, create } = props;

	return (
		<Formik
			onSubmit={(
				{ course, student, installments, ...rest },
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
						installments: filtered
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
			//validationSchema={validationSchema()}
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
										setValue(
											"installments",
											option.installments
										);
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

export default Form;
