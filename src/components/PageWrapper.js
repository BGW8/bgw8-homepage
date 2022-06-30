import styled from "styled-components";

const StyledPageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;

	/* background: radial-gradient(
		circle,
		rgba(255, 191, 107, 1) 0%,
		rgba(255, 182, 65, 1) 0%,
		rgba(251, 139, 18, 1) 100%
	); */
	background-color: #232323;
`;

const PageWrapper = ({ children }) => {
	return <StyledPageWrapper>{children}</StyledPageWrapper>;
};

export default PageWrapper;
