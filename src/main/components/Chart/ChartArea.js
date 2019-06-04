import React from "react";
import Chart from "react-apexcharts";

const ChartArea = ({ series: data, ...rest }) => {
	const getColor = () => {
		if (rest.purple) {
			return "#7367F0";
		}
		if (rest.green) {
			return "#28C76F";
		}
		if (rest.orange) {
			return "#FF9F43";
		}
		if (rest.red) {
			return "#EA5455";
		}
	};

	const series = [
		{
			data
		}
	];

	const options = {
		dataLabels: {
			enabled: false
		},
		tooltip: {
			enabled: false
		},
		stroke: {
			colors: [getColor()],
			width: 2
		},
		fill: {
			type: "gradient",
			colors: [getColor()],
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.7,
				opacityTo: 0.4,
				stops: [0, 90]
			}
		},
		chart: {
			sparkline: {
				enabled: true
			},
			parentHeightOffset: 0,
			toolbar: {
				show: false
			}
		}
	};

	return (
		<Chart
			type="area"
			width="100%"
			height="100%"
			options={options}
			series={series}
		/>
	);
};

export default ChartArea;
