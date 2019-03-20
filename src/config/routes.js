import Home from "../main/views/Home";
import StudentList from "../main/views/Students/StudentList";
import StudentCreate from "../main/views/Students/StudentCreate";

export const privateRoutes = {
	Home: {
		component: Home,
		path: "/",
		key: "home"
	},
	StudentList: {
		component: StudentList,
		path: "/alumnos/listar",
		key: "student-list"
	},
	StudentCreate: {
		component: StudentCreate,
		path: "/alumnos/alta",
		key: "student-create"
	}
};
