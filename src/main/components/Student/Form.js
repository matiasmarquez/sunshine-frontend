import React from "react";
import { Formik, Form as FormFormik, Field } from "formik";

import Button from "../Button";
import Input from "../FormElements/Input";

const Form = props => {
	const {
		data = {
			name: "",
			lastName: "",
			address: "",
			phone: "",
			email: ""
		},
		mutation
	} = props;

	return (
		<Formik
			onSubmit={values => {
				mutation({ variables: values });
			}}
			initialValues={data}
			//validationSchema={validationSchema()}
			render={({ values, errors }) => {
				return (
					<FormFormik>
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
						<Button success filled text="Guardar" type="submit" />
					</FormFormik>
				);
			}}
		/>
	);
};

export default Form;
