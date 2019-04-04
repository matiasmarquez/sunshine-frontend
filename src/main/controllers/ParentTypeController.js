import { useQuery } from "react-apollo-hooks";

import parentTypesQuery from "graphql/parents/type/types";

const ParentTypeController = ({ action, children }) => {
	let data;
	let error;
	let loading;

	const {
		data: dataTypes,
		error: errorTypes,
		loading: loadingTypes
	} = useQuery(parentTypesQuery, {
		skip: action !== "list"
	});

	if (action === "list") {
		data = dataTypes;
		error = errorTypes;
		loading = loadingTypes;
	}

	return children({
		data,
		error,
		loading
	});
};

export default ParentTypeController;
