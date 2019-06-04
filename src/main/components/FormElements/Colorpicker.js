import React from "react";
import styled from "styled-components";
import { BlockPicker } from "react-color";

import Label from "./Label";
import Error from "./Error";

const Colorpicker = props => {
	const {
		field: { name, value },
		form: { errors = null, touched, setFieldValue },
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
			<Error text={error && touched[name] && error} />
		</React.Fragment>
	);
};

export default Colorpicker;

const BlockPickerStyled = styled(BlockPicker)`
	margin-bottom: 15px;
`;
