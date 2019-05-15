import React from "react";

import CourseController from "main/controllers/CourseController";
import StaffController from "main/controllers/StaffController";
import StudentController from "main/controllers/StudentController";
import InscriptionController from "main/controllers/InscriptionController";

import { Row, ColStyled } from "main/components/Grid";

import Card from "main/components/Card";
import CardCounter from "main/components/Card/CardCounter";
import InscriptionsUpToDate from "main/components/Inscription/InscriptionsUpToDate";
import InscriptionTable from "main/components/Inscription/InscriptionTable";

const Home = props => (
	<React.Fragment>
		<Row>
			<ColStyled xs={12} sm={6} md={3}>
				<CourseController action="list">
					{({ data, loading }) => (
						<CardCounter
							icon="book-open"
							total={data.courses}
							series={[0, 100, 50, 200]}
							text="Cursos"
							purple
						/>
					)}
				</CourseController>
			</ColStyled>
			<ColStyled xs={12} sm={6} md={3}>
				<StaffController action="list">
					{({ data, loading }) => (
						<CardCounter
							icon="star"
							total={data.staffPeople}
							series={[0, 300, 200, 300]}
							text="Staff"
							green
						/>
					)}
				</StaffController>
			</ColStyled>
			<ColStyled xs={12} sm={6} md={3}>
				<StudentController action="list">
					{({ data, loading }) => (
						<CardCounter
							icon="users"
							total={data.students}
							series={[0, 200, 300, 100, 300]}
							text="Alumnos"
							orange
						/>
					)}
				</StudentController>
			</ColStyled>
			<ColStyled xs={12} sm={6} md={3}>
				<InscriptionController action="list">
					{({ data, loading }) => (
						<CardCounter
							icon="clipboard"
							total={data.inscriptions}
							series={[0, 100, 350, 200, 350]}
							text="Inscripciones"
							red
						/>
					)}
				</InscriptionController>
			</ColStyled>
		</Row>
		<InscriptionController action="list">
			{({ data, loading, showAlertDelete }) => (
				<Row>
					<ColStyled md={7}>
						<Card p0>
							<InscriptionTable
								data={data}
								loading={loading}
								showAlertDelete={showAlertDelete}
								onlyNotPaid
								{...props}
							/>
						</Card>
					</ColStyled>
					<ColStyled md={5}>
						<Card p0 title="Inscripciones al día">
							<InscriptionsUpToDate
								inscriptions={data.inscriptions}
							/>
						</Card>
					</ColStyled>
				</Row>
			)}
		</InscriptionController>
	</React.Fragment>
);

export default Home;
