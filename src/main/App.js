import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { routes, paths } from "../config/routes";

import Layout from "./layouts/private";
import StudentList from "./views/students/StudentList";
import StudentCreate from "./views/students/StudentCreate";

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

const App = props => {
	const routesComponents = routes.private.map(
		({ path, component: Component }) => (
			<AppRoute
				exact
				path={path}
				layout={Layout}
				component={Component}
				key="route"
			/>
		)
	);
	return (
		<BrowserRouter>
			<Switch>{routesComponents}</Switch>
		</BrowserRouter>
	);
};

export default App;
