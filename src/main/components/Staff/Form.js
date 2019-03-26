import React from "react";
import { Formik, Form as FormFormik, Field } from "formik";

import Button from "../Button";
import Input from "../FormElements/Input";
import Select from "../FormElements/Select";

const Form = props => {
	const initialValues = {
		name: "",
		lastName: "",
		category: null,
		courses: [],
		address: "",
		phone: "",
		email: ""
	};

	const {
		data = initialValues,
		categories,
		courses,
		create,
		mutation
	} = props;

	return (
		<Formik
			onSubmit={({ category, courses, ...rest }, { resetForm }) => {
				const coursesIds = courses.map(course => {
					return course.id;
				});
				const result = mutation({
					variables: {
						...rest,
						categoryId: category.id,
						coursesIds
					}
				});
				result.then(res => {
					if (res.data && create) {
						resetForm();
					}
				});
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
							name="category"
							label="Categoría"
							options={categories}
							optionValue="id"
							optionLabel="name"
							placeholder="Seleccionar categoría"
							component={Select}
						/>
						<Field
							name="courses"
							label="Cursos"
							options={courses}
							optionValue="id"
							optionLabel="name"
							placeholder="Seleccionar cursos"
							isMulti={true}
							component={Select}
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
