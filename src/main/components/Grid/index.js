import React from "react";
import styled from "styled-components";

import { Row as RowGrid, Col as ColGrid } from "react-flexbox-grid";

export const Row = props => <RowGrid {...props} />;

export const ColStyled = styled(ColGrid)`
	margin-bottom: 30px;
`;
