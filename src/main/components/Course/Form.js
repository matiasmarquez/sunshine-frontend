import React from "react";
import { Formik, Form as FormFormik, Field } from "formik";

import Button from "../Button";
import Input from "../FormElements/Input";
import Textarea from "../FormElements/Textarea";
import Select from "../FormElements/Select";

const Form = props => {
	const {
		data = {
			name: "",
			installments: [],
			briefDescription: "",
			description: "",
			duration: "",
			schedule: "",
			price: 0
		},
		categories,
		mutation
	} = props;

	data.categoryId = data.category.id;

	return (
		<Formik
			onSubmit={values => {
				console.log(values);
				//mutation({ variables: values });
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
							name="categoryId"
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
							name="briefDescription"
							label="Descripción breve"
							type="text"
							component={Textarea}
						/>
						<Field
							name="description"
							label="Descripción"
							type="text"
							component={Textarea}
						/>
						<Button success filled text="Guardar" type="submit" />
					</FormFormik>
				);
			}}
		/>
	);
};

export default Form;
