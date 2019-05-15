import React from "react";
import { Formik, Form as FormFormik, Field } from "formik";
import * as Yup from "yup";

import _ from "lodash";

import Button from "../Button";
import Input from "../FormElements/Input";
import Multiple from "main/components/FormElements/Multiple";
import Card from "main/components/Card";
import { Row, Col } from "react-flexbox-grid";
import SubmitContainer from "main/components/FormElements/SubmitContainer";

const Form = props => {
	const initialValues = {
		name: "",
		lastName: "",
		address: "",
		phone: "",
		email: "",
		school: "",
		degree: ""
	};

	const { data = initialValues, mutation, parentTypes, create } = props;

	const validationSchema = Yup.object().shape({
		name: Yup.string().required("El nombre es requerido"),
		lastName: Yup.string().required("El apellido es requerido"),
		parents: Yup.array()
			.required("Al menos un familiar es requerido")
			.of(
				Yup.object().shape({
					type: Yup.string().required("La relación es requerida"),
					name: Yup.string().required("El nombre es requerido"),
					lastName: Yup.string().required("El apellido es requerido")
				})
			)
	});

	return (
		<Formik
			onSubmit={({ parents, ...rest }, { resetForm }) => {
				const filtered = [];
				_.forEach(parents, parent => {
					if (typeof parent.type === "object") {
						parent.type = parent.type.id;
					}
					filtered.push(_.omit(parent, ["__typename"]));
				});
				const result = mutation({
					variables: {
						...rest,
						parents: filtered
					}
				});
				result.then(res => {
					if (res.data && create) {
						resetForm();
					}
				});
			}}
			initialValues={data}
			validationSchema={validationSchema}
			render={({ values, errors }) => {
				return (
					<FormFormik>
						<Row>
							<Col md={6}>
								<Card title="Datos del alumno" mb={25}>
									<Field
										name="name"
										label="Nombre"
										type="text"
										component={Input}
									/>
									<Field
										name="lastName"
										label="Apellido"
										type="text"
										component={Input}
									/>
									<Field
										name="address"
										label="Dirección"
										type="text"
										component={Input}
									/>
									<Field
										name="phone"
										label="Teléfono"
										type="text"
										component={Input}
									/>
									<Field
										name="email"
										label="Correo"
										type="text"
										component={Input}
									/>
									<Row>
										<Col md={8}>
											<Field
												name="school"
												label="Escuela"
												type="text"
												component={Input}
											/>
										</Col>
										<Col md={4}>
											<Field
												name="degree"
												label="Grado"
												type="text"
												component={Input}
											/>
										</Col>
									</Row>
									<SubmitContainer>
										<Button
											success
											filled
											text="Guardar"
											type="submit"
										/>
									</SubmitContainer>
								</Card>
							</Col>
							<Col md={6}>
								<Card title="Datos de los padres">
									<Field
										name="parents"
										label="Gestión"
										rowAsCard={true}
										fields={[
											{
												label: "Relación",
												name: "type",
												options: parentTypes,
												optionValue: "id",
												optionLabel: "type",
												placeholder:
													"Seleccionar relacion",
												colxs: 12,
												colmd: 12,
												type: "select"
											},
											{
												label: "Nombre",
												name: "name",
												colxs: 12,
												colmd: 4,
												type: "text"
											},
											{
												label: "Apellido",
												name: "lastName",
												colxs: 12,
												colmd: 4,
												type: "text"
											},
											{
												label: "Teléfono",
												name: "phone",
												colxs: 12,
												colmd: 4,
												type: "text"
											},
											{
												label: "Comentarios",
												name: "comment",
												colxs: 12,
												colmd: 12,
												type: "textarea"
											}
										]}
										component={Multiple}
									/>
								</Card>
							</Col>
						</Row>
					</FormFormik>
				);
			}}
		/>
	);
};

export default Form;
