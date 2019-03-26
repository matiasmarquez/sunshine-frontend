import React from "react";

import StaffController from "../../controllers/StaffController";
import StaffCategoryController from "../../controllers/StaffCategoryController";
import CourseController from "../../controllers/CourseController";
import { paths } from "../../../config/routes";

import ContentHeader from "../../layouts/private/components/ContentHeader";
import Form from "../../components/Staff/Form";
import Card from "../../components/Card";

const StaffEdit = ({ match, history }) => (
	<StaffController action="edit" match={match} history={history}>
		{({ data, loading, updateMutation }) => (
			<StaffCategoryController action="list">
				{({ data: dataCats, loading: loadingCats }) => (
					<CourseController action="list">
						{({ data: dataCourses, loading: loadingCourses }) => (
							<React.Fragment>
								<ContentHeader
									title="Edición de persona del staff"
									breadcrumb={[
										{
											text: "Staff",
											route: paths.staffList
										},
										{
											text: "Edición",
											active: true
										}
									]}
								/>
								{!loading && !loadingCats && !loadingCourses && (
									<Card>
										<Form
											data={data && data.staffPerson}
											mutation={updateMutation}
											courses={
												dataCourses &&
												dataCourses.courses
											}
											categories={
												dataCats &&
												dataCats.staffCategories
											}
										/>
									</Card>
								)}
							</React.Fragment>
						)}
					</CourseController>
				)}
			</StaffCategoryController>
		)}
	</StaffController>
);

export default StaffEdit;
