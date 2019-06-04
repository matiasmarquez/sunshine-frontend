import { withRouter } from "react-router-dom";
import { me as meQuery, login as loginMutation } from "graphql/auth";
import { useQuery, useMutation } from "react-apollo-hooks";

const AuthController = ({ children, ...rest }) => {
	const token = localStorage.getItem("auth");

	const { data, error, loading } = useQuery(meQuery, {
		skip: token === null,
		context: {
			headers: {
				Authorization: `Bearer ${token}`
			}
		}
	});

	const login = useMutation(loginMutation);

	const saveUser = token => {
		localStorage.setItem("auth", token);
	};

	const logout = () => {
		localStorage.removeItem("auth");
		// eslint-disable-next-line no-restricted-globals
		location.reload();
	};

	return children({
		user: data && data.me,
		error,
		loading,
		login,
		saveUser,
		logout,
		...rest
	});
};

export default withRouter(AuthController);
