import styled from "styled-components";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

const CardContainer = styled.div`
	max-width: 300px;
	min-width: 250px;
	display: flex;
	background-color: #000;
	flex-direction: column;
	padding: 25px 40px;
	margin: 0 10px;
	border-radius: 1rem;
	align-items: center;
`;

const TestimonialCard = ({ avatar, testimonial, title, name, company }) => {
	return (
		<CardContainer>
			<CardHeader avatar={avatar} title={title} name={name} company={company} />
			<CardBody testimonial={testimonial} />
		</CardContainer>
	);
};

export default TestimonialCard;
