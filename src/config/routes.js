import Home from "main/views/Home";

import StudentCreate from "main/views/students/StudentCreate";
import StudentEdit from "main/views/students/StudentEdit";
import StudentList from "main/views/students/StudentList";

import CourseCreate from "main/views/courses/CourseCreate";
import CourseEdit from "main/views/courses/CourseEdit";
import CourseList from "main/views/courses/CourseList";

import CourseCategoryCreate from "main/views/courses/category/CategoryCreate";
import CourseCategoryEdit from "main/views/courses/category/CategoryEdit";
import CourseCategoryList from "main/views/courses/category/CategoryList";

import StaffCreate from "main/views/staff/StaffCreate";
import StaffEdit from "main/views/staff/StaffEdit";
import StaffList from "main/views/staff/StaffList";

import StaffCategoryCreate from "main/views/staff/category/CategoryCreate";
import StaffCategoryList from "main/views/staff/category/CategoryList";
import StaffCategoryEdit from "main/views/staff/category/CategoryEdit";

import InscriptionList from "main/views/inscriptions/InscriptionList";
import InscriptionCreate from "main/views/inscriptions/InscriptionCreate";
import InscriptionEdit from "main/views/inscriptions/InscriptionEdit";

import UserList from "main/views/users/UserList";
import UserCreate from "main/views/users/UserCreate";
import UserEdit from "main/views/users/UserEdit";

export const paths = {
	home: "/",
	login: "/login",

	studentList: "/alumnos/listar",
	studentCreate: "/alumnos/alta",
	studentEdit: "/alumnos/editar/:id",

	courseList: "/cursos/listar",
	courseCreate: "/cursos/alta",
	courseEdit: "/cursos/editar/:id",

	courseCategoryList: "/cursos-categorias/listar",
	courseCategoryCreate: "/cursos-categorias/alta",
	courseCategoryEdit: "/cursos-categorias/editar/:id",

	staffList: "/staff/listar",
	staffCreate: "/staff/alta",
	staffEdit: "/staff/editar/:id",

	staffCategoryList: "/staff-categorias/listar",
	staffCategoryCreate: "/staff-categorias/alta",
	staffCategoryEdit: "/staff-categorias/editar/:id",

	inscriptionList: "/inscripcion/listar",
	inscriptionCreate: "/inscripcion/alta",
	inscriptionEdit: "/inscripcion/editar/:id",

	userList: "/usuarios/listar",
	userCreate: "/usuarios/alta",
	userEdit: "/usuarios/editar/:id"
};

export const routes = [
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
	},
	{
		path: paths.staffList,
		component: StaffList
	},
	{
		path: paths.staffCreate,
		component: StaffCreate
	},
	{
		path: paths.staffEdit,
		component: StaffEdit
	},
	{
		path: paths.staffCategoryList,
		component: StaffCategoryList
	},
	{
		path: paths.staffCategoryCreate,
		component: StaffCategoryCreate
	},
	{
		path: paths.staffCategoryEdit,
		component: StaffCategoryEdit
	},
	{
		path: paths.inscriptionList,
		component: InscriptionList
	},
	{
		path: paths.inscriptionCreate,
		component: InscriptionCreate
	},
	{
		path: paths.inscriptionEdit,
		component: InscriptionEdit
	},
	{
		path: paths.userList,
		component: UserList
	},
	{
		path: paths.userCreate,
		component: UserCreate
	},
	{
		path: paths.userEdit,
		component: UserEdit
	}
];
