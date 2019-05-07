import { useQuery } from "react-apollo-hooks";

import { parentTypes as parentTypesQuery } from "graphql/parent";

const ParentTypeController = ({ action, children }) => {
	let data;
	let error;
	let loading;

	if (action === "list") {
		({ data, error, loading } = useQuery(parentTypesQuery, {
			skip: action !== "list"
		}));
	}

	return children({
		data,
		error,
		loading
	});
};

export default ParentTypeController;
