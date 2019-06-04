import React from "react";
import { Formik, Form as FormFormik, Field } from "formik";
import * as Yup from "yup";

import Button from "../Button";
import Input from "../FormElements/Input";

const Form = props => {
	const initialValues = {
		name: "",
		lastName: "",
		username: ""
	};

	const { data = initialValues, create, mutation } = props;

	data.password = "";

	let validationShape = {
		name: Yup.string().required("El nombre es requerido"),
		lastName: Yup.string().required("El apellido es requerido"),
		username: Yup.string()
			.required("El usuario es requerido")
			.min(5, "Debe tener como mínimo 5 caracteres"),
		password: Yup.string().min(6, "Debe tener como mínimo 6 caracteres")
	};

	if (create) {
		validationShape.password = Yup.string()
			.required("La contraseña es requerida")
			.min(6, "Debe tener como mínimo 6 caracteres");
	}

	const validationSchema = Yup.object().shape(validationShape);

	return (
		<Formik
			onSubmit={(variables, { resetForm }) => {
				const result = mutation({ variables });
				result.then(res => {
					if (res.data && create) {
						resetForm();
					}
				});
			}}
			initialValues={data}
			validationSchema={validationSchema}
			render={() => {
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
							name="username"
							label="Usuario"
							type="text"
							component={Input}
						/>
						<Field
							name="password"
							label="Contraseña"
							autocomplete="current-password"
							helpText="No llenar si no se desea cambiar la contraseña (solo aplica en la edición)"
							type="password"
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
