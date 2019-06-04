import React from "react";

import InscriptionController from "main/controllers/InscriptionController";
import { paths } from "config/routes";

import ContentHeader from "main/layouts/private/components/ContentHeader";
import Card from "main/components/Card";

import InscriptionTable from "main/components/Inscription/InscriptionTable";

const InscriptionList = props => (
	<InscriptionController action="list">
		{({ data, loading, showAlertDelete }) => (
			<React.Fragment>
				<ContentHeader
					title="Listado de inscripciones"
					breadcrumb={[
						{
							text: "Inscripciones",
							active: true
						}
					]}
					actions={[
						{
							success: true,
							text: "Nueva inscripción",
							path: paths.inscriptionCreate,
							...props
						}
					]}
				/>
				<Card p0>
					<InscriptionTable
						data={data}
						loading={loading}
						showAlertDelete={showAlertDelete}
						{...props}
					/>
				</Card>
			</React.Fragment>
		)}
	</InscriptionController>
);

export default InscriptionList;
