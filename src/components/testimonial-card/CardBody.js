import styled from "styled-components";
import { IoMdQuote } from "react-icons/io";

const BodyWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0 1 auto;
	width: 100%;
`;

const IconWrapper = styled.div`
	display: flex;
`;

const TextWrapper = styled.div`
	display: flex;
	font-size: 0.7rem;
	font-weight: 400;
	font-family: "poppins";
	line-height: 1.3;
`;

const CardBody = ({ testimonial }) => {
	return (
		<BodyWrapper>
			<IconWrapper>
				<IoMdQuote size='22px' color='rgba(251, 139, 18, 1)' />
			</IconWrapper>
			<TextWrapper>{testimonial}</TextWrapper>
		</BodyWrapper>
	);
};

export default CardBody;
