import React from "react";
import { Formik, Form as FormFormik, Field } from "formik";
import _ from "lodash";

import Button from "../Button";
import Input from "../FormElements/Input";
import Textarea from "../FormElements/Textarea";
import Select from "../FormElements/Select";
import SubmitContainer from "../FormElements/SubmitContainer";
import Multiple from "../FormElements/Multiple";

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

	const { data = initialValues, categories, create, mutation } = props;

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
							name="category"
							label="Categoría"
							options={categories}
							optionValue="id"
							optionLabel="name"
							placeholder="Seleccionar categoría"
							component={Select}
						/>
						<Field
							name="installments"
							label="Cuotas"
							fields={[
								{
									label: "Número de cuota",
									name: "number",
									type: "number"
								},
								{
									label: "Precio",
									name: "price",
									type: "number"
								}
							]}
							component={Multiple}
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
