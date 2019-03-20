import PropTypes from "prop-types";
import Swal from "sweetalert2";

const SweetAlert = ({
	onConfirm,
	confirmButtonText,
	cancelButtonText,
	...rest
}) => {
	return Swal.fire({
		showCancelButton: true,
		confirmButtonColor: "rgb(40, 199, 111)",
		cancelButtonColor: "#ea5455",
		confirmButtonText: confirmButtonText ? confirmButtonText : "Confirmar",
		cancelButtonText: cancelButtonText ? cancelButtonText : "Cancelar",
		showLoaderOnConfirm: true,
		preConfirm: () => {
			onConfirm();
		},
		...rest
	}).then(({ value }) => {
		if (value) {
		}
	});
};

SweetAlert.propTypes = {
	title: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	text: PropTypes.string,

	confirmButtonText: PropTypes.string,
	cancelButtonText: PropTypes.string,

	onConfirm: PropTypes.func.isRequired,
	onConfirmTitle: PropTypes.string,
	onConfirmText: PropTypes.string,

	onCancelTitle: PropTypes.string,
	onCancelText: PropTypes.string
};

export default SweetAlert;
