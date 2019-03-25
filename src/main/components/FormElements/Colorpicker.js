import React from "react";
import styled from "styled-components";
import { BlockPicker } from "react-color";

import Label from "./Label";

const Colorpicker = props => {
	const {
		field: { name, value },
		form: { errors = null, setFieldValue },
		label
	} = props;

	const error = errors && errors[name];

	return (
		<React.Fragment>
			<Label label={label} />
			<BlockPickerStyled
				name={name}
				color={value}
				colors={[
					"#E67401",
					"#009C53",
					"#DD3624",
					"#0061A8",
					"#7C2282",
					"#FCB900",
					"#00D084",
					"#0693E3",
					"#EB144C",
					"#F78DA7"
				]}
				triangle="hide"
				onChangeComplete={({ hex }) => {
					setFieldValue(name, hex);
				}}
			/>
			<Error>{error && error}</Error>
		</React.Fragment>
	);
};

export default Colorpicker;

const Error = styled.p`
	color: #ff4f56;
	font-size: 12px;
	margin: 0;
	margin-top: 5px;
`;

const BlockPickerStyled = styled(BlockPicker)`
	margin-bottom: 15px;
`;
