import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { routes, paths } from "../config/routes";

import AuthController from "main/controllers/AuthController";

import PrivateLayout from "./layouts/private";
import PublicLayout from "./layouts/public";
import CleanLayout from "./layouts/clean";
import Login from "./views/Login";
import Page404 from "./views/Page404";
import LoadingView from "./views/Loading";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
	<Route
		{...rest}
		render={props => (
			<Layout>
				<Component {...props} />
			</Layout>
		)}
	/>
);

const App = () => {
	let routesComponents = routes.map(({ path, component: Component }) => (
		<AppRoute
			exact
			path={path}
			component={Component}
			layout={PrivateLayout}
			key="route"
		/>
	));
	routesComponents.push(
		<AppRoute
			exact
			path="/login"
			component={Login}
			layout={PublicLayout}
			key="route"
		/>
	);
	return (
		<BrowserRouter>
			<AuthController>
				{({ user, loading, location }) => {
					if (loading) {
						return <LoadingView />;
					}
					if (!user && location.pathname !== paths.login) {
						return <Redirect to={paths.login} />;
					}
					return (
						<Switch>
							{routesComponents}
							<AppRoute
								component={Page404}
								layout={CleanLayout}
							/>
						</Switch>
					);
				}}
			</AuthController>
		</BrowserRouter>
	);
};

export default App;
