import React, { useState } from "react";
import styled from "styled-components";
import { Formik, Form as FormFormik, Field } from "formik";
import * as Yup from "yup";
import { Redirect } from "react-router-dom";

import AuthController from "main/controllers/AuthController";
import { paths } from "config/routes";

import logo from "assets/logo.png";
import Button from "main/components/Button";
import Input from "main/components/FormElements/Input";

import LoadingView from "main/views/Loading";

const Login = ({ history }) => {
	const [error, setError] = useState(null);

	const initialValues = {
		username: "",
		password: ""
	};

	const validationSchema = Yup.object().shape({
		username: Yup.string().required("El usuario es requerido"),
		password: Yup.string().required("El usuario es requerido")
	});

	return (
		<AuthController>
			{({ user, loading, login, saveUser }) => {
				if (loading) {
					return <LoadingView />;
				}
				if (user) {
					return <Redirect to={paths.home} />;
				}
				return (
					<CardLogin className="animated zoomIn">
						<ImgStyled src={logo} alt="Logo de Sunshine" />
						<Separator />
						<Formik
							onSubmit={variables => {
								const result = login({ variables });
								result
									.then(res => {
										if (res.data && res.data.login) {
											saveUser(res.data.login.token);
										}
										history.push(paths.home);
									})
									.catch(err => {
										const message = err.message;
										if (
											message.indexOf("username") !== -1
										) {
											setError("El usuario no existe");
										}
										if (
											message.indexOf("password") !== -1
										) {
											setError(
												"La contraseña es incorrecta"
											);
										}
									});
							}}
							initialValues={initialValues}
							validationSchema={validationSchema}
							render={() => {
								return (
									<FormFormik>
										<Field
											name="username"
											label="Usuario"
											autocomplete="username"
											type="text"
											component={Input}
										/>
										<Field
											name="password"
											label="Contraseña"
											type="password"
											autocomplete="current-password"
											component={Input}
										/>
										<Button
											success
											filled
											block
											text="Ingresar"
											type="submit"
										/>
										<LoginError>
											{error && error}
										</LoginError>
									</FormFormik>
								);
							}}
						/>
					</CardLogin>
				);
			}}
		</AuthController>
	);
};

const CardLogin = styled.div`
	display: block;
	position: relative;
	width: 100%;
	background: #fff;
	padding: 1.5rem;
	max-width: 430px;
	border-radius: 0.5rem;
	box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
	transition: transform 0.35s, opacity 0.28s ease-in-out;
`;

const ImgStyled = styled.img`
	display: block;
	margin: 15px auto 30px auto;
`;

const Separator = styled.div`
	height: 1px;
	background: #eee;
	margin: 20px auto;
	width: calc(100% - 25%);
`;

const LoginError = styled.p`
	color: ${props => `rgb(${props.theme.danger})`};
	font-weight: 600;
	font-size: 13px;
	margin-bottom: 0;
`;

export default Login;
