import React from "react";

import { useQuery, useMutation } from "react-apollo-hooks";
import updateCourse from "../../../graphql/courses/updateCourse";
import course from "../../../graphql/courses/course";
import courseCategories from "../../../graphql/courses.category/categories";

import ContentHeader from "../../layouts/private/components/ContentHeader";
import Notification from "../../components/Notification";
import Form from "../../components/Course/Form";
import Card from "../../components/Card";

const CourseEdit = props => {
	const {
		match: {
			params: { id }
		}
	} = props;

	const updateMutation = useMutation(updateCourse, {
		update: () => {
			Notification({
				text: "Curso editado correctamente",
				type: "success"
			});
			props.history.push("/cursos/listar");
		}
	});
	const { data, error, loading } = useQuery(course, { variables: { id } });
	const { data: dataCats, error: errorCats, loading: loadingCats } = useQuery(
		courseCategories
	);

	return (
		<React.Fragment>
			<ContentHeader
				title="Edición de curso"
				breadcrumb={[
					{
						text: "Cursos",
						route: "/cursos/listar"
					},
					{
						text: "Edición",
						active: true
					}
				]}
			/>
			{!loading && !loadingCats && (
				<Card>
					<Form
						data={data.course}
						mutation={updateMutation}
						categories={dataCats.courseCategories}
					/>
				</Card>
			)}
		</React.Fragment>
	);
};

export default CourseEdit;
