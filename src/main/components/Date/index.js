import React from "react";

const Date = ({ date, textBeforeMonth, withYear, withMonth }) => {
	const months = [
		"Enero",
		"Febrero",
		"Marzo",
		"Abril",
		"Mayo",
		"Junio",
		"Julio",
		"Agosto",
		"Septiembre",
		"Octubre",
		"Noviembre",
		"Diciembre"
	];
	if (!date) {
		return "";
	}
	return (
		<span>
			{withMonth && months[date.getMonth()]}
			{textBeforeMonth && <span>{textBeforeMonth}</span>}
			{withYear && date.getFullYear()}
		</span>
	);
};

export default Date;
