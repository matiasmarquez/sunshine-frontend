import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./layouts/private";
import Home from "./views/Home";

import StudentCreate from "./views/Students/StudentCreate";
import StudentEdit from "./views/Students/StudentEdit";
import StudentList from "./views/Students/StudentList";

import CourseCreate from "./views/Courses/CourseCreate";
import CourseEdit from "./views/Courses/CourseEdit";
import CourseList from "./views/Courses/CourseList";

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
	return (
		<BrowserRouter>
			<Switch>
				<AppRoute exact path="/" layout={Layout} component={Home} />
				<AppRoute
					exact
					path="/alumnos/listar"
					layout={Layout}
					component={StudentList}
				/>
				<AppRoute
					exact
					path="/alumnos/alta"
					layout={Layout}
					component={StudentCreate}
				/>
				<AppRoute
					exact
					path="/alumnos/editar/:id"
					layout={Layout}
					component={StudentEdit}
				/>

				<AppRoute
					exact
					path="/cursos/listar"
					layout={Layout}
					component={CourseList}
				/>
				<AppRoute
					exact
					path="/cursos/alta"
					layout={Layout}
					component={CourseCreate}
				/>
				<AppRoute
					exact
					path="/cursos/editar/:id"
					layout={Layout}
					component={CourseEdit}
				/>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
