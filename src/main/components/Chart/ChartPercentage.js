import React from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";

const ChartPercentage = ({ percentage }) => {
	const options = {
		chart: {
			toolbar: {
				show: false
			}
		},
		plotOptions: {
			radialBar: {
				startAngle: -135,
				endAngle: 225,
				hollow: {
					margin: 10,
					size: "85%",
					background: "#fff",
					image: undefined,
					imageOffsetX: 0,
					imageOffsetY: 0,
					position: "front"
				},
				track: {
					background: "#C8CED4",
					strokeWidth: "25%",
					margin: 0
				},
				dataLabels: {
					showOn: "always",
					value: {
						textAnchor: "middle",
						offsetY: -2,
						color: "#111",
						fontSize: "40px",
						fontWeight: 700,
						show: true
					}
				}
			}
		},
		fill: {
			type: "gradient",
			colors: ["#00B9AF"],
			gradient: {
				type: "horizontal",
				gradientToColors: ["#00D293"],
				opacityFrom: 1,
				opacityTo: 1,
				stops: [0, 100]
			}
		},
		stroke: {
			curve: "smooth",
			width: 1,
			lineCap: "round"
		},
		labels: [""]
	};

	return (
		<ChartStyled
			height="100%"
			type="radialBar"
			options={options}
			series={[percentage]}
		/>
	);
};

const ChartStyled = styled(Chart)`
	& .apexcharts-datalabels-group {
		font-weight: 600;
	}
	& .apexcharts-datalabels-group text {
		font-family: "Montserrat", sans-serif !important;
		fill: rgb(153, 162, 172);
	}
`;

export default ChartPercentage;
