import React, { useState, useEffect } from "react";
import _ from "lodash";
import styled from "styled-components";

import ChartPercentage from "main/components/Chart/ChartPercentage";
import SideToSide from "main/components/SideToSide";

const InscriptionsUpToDate = ({ inscriptions }) => {
	const [percentage, setPercentage] = useState(0);
	const [upToDate, setUpToDate] = useState(0);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const upToDate = _.filter(inscriptions, inscription => {
			return inscription.hasInstallmentsNotPayed === false;
		});

		let percentage = 0;
		const upToDateQty = upToDate.length;
		const totalQty = inscriptions ? inscriptions.length : 0;
		if (upToDateQty > 0 && totalQty > 0) {
			percentage = Math.round((upToDateQty * 100) / totalQty);
		}

		setUpToDate(upToDateQty);
		setTotal(totalQty);
		setPercentage(percentage);
	});

	return (
		<React.Fragment>
			<ChartPercentageContainer>
				<ChartPercentage percentage={percentage} />
			</ChartPercentageContainer>
			<SideToSide
				left={{ title: "Al día", value: upToDate }}
				right={{ title: "Total", value: total }}
			/>
		</React.Fragment>
	);
};

const ChartPercentageContainer = styled.div`
	height: 334px;
`;

export default InscriptionsUpToDate;
