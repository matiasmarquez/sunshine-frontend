import React from "react";

import StaffController from "../../controllers/StaffController";
import StaffCategoryController from "../../controllers/StaffCategoryController";
import CourseController from "../../controllers/CourseController";
import { paths } from "../../../config/routes";

import ContentHeader from "../../layouts/private/components/ContentHeader";
import Form from "../../components/Staff/Form";
import Card from "../../components/Card";

const StaffCreate = () => (
	<StaffController>
		{({ createMutation }) => (
			<StaffCategoryController action="list">
				{({ data: dataCats, loading: loadingCats }) => (
					<CourseController action="list">
						{({ data: dataCourses, loading: loadingCourses }) => (
							<React.Fragment>
								<ContentHeader
									title="Alta de staff"
									breadcrumb={[
										{
											text: "Staff",
											route: paths.staffList
										},
										{
											text: "Alta",
											active: true
										}
									]}
								/>
								{!loadingCats && !loadingCourses && (
									<Card>
										<Form
											create={true}
											mutation={createMutation}
											categories={
												dataCats &&
												dataCats.staffCategories
											}
											courses={
												dataCourses &&
												dataCourses.courses
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

export default StaffCreate;
