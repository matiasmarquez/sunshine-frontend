import React from "react";
import styled from "styled-components";

const SubmitContainer = ({ children }) => <Container>{children}</Container>;

export default SubmitContainer;

const Container = styled.div`
	padding: 10px 0;
	text-align: right;
`;
