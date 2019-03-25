import Home from "../main/views/Home";

import StudentCreate from "../main/views/students/StudentCreate";
import StudentEdit from "../main/views/students/StudentEdit";
import StudentList from "../main/views/students/StudentList";

import CourseCreate from "../main/views/courses/CourseCreate";
import CourseEdit from "../main/views/courses/CourseEdit";
import CourseList from "../main/views/courses/CourseList";

import CourseCategoryCreate from "../main/views/courses/category/CategoryCreate";
import CourseCategoryEdit from "../main/views/courses/category/CategoryEdit";
import CourseCategoryList from "../main/views/courses/category/CategoryList";

export const paths = {
	home: "/",
	studentList: "/alumnos/listar",
	studentCreate: "/alumnos/alta",
	studentEdit: "/alumnos/editar/:id",
	courseList: "/cursos/listar",
	courseCreate: "/cursos/alta",
	courseEdit: "/cursos/editar/:id",
	courseCategoryList: "/cursos-categorias/listar",
	courseCategoryCreate: "/cursos-categorias/alta",
	courseCategoryEdit: "/cursos-categorias/editar/:id"
};

export const routes = {
	private: [
		{
			path: paths.home,
			component: Home
		},
		{
			path: paths.studentList,
			component: StudentList
		},
		{
			path: paths.studentCreate,
			component: StudentCreate
		},
		{
			path: paths.studentEdit,
			component: StudentEdit
		},
		{
			path: paths.courseList,
			component: CourseList
		},
		{
			path: paths.courseCreate,
			component: CourseCreate
		},
		{
			path: paths.courseEdit,
			component: CourseEdit
		},
		{
			path: paths.courseCategoryList,
			component: CourseCategoryList
		},
		{
			path: paths.courseCategoryCreate,
			component: CourseCategoryCreate
		},
		{
			path: paths.courseCategoryEdit,
			component: CourseCategoryEdit
		}
	]
};
