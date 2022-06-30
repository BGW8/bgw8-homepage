import styled from "styled-components";
import Img from "../Img";

const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 10px 0;
	font-weight: 400;
`;

const Title = styled.div`
	text-align: center;
	color: #fff;
	font-size: 0.7rem;
	margin-top: 5px;
`;

const Name = styled.div`
	text-align: center;
	color: #fff;
	font-size: 1rem;
	font-weight: 700;
`;

const CardHeader = ({ avatar, size, title, name, company }) => {
	return (
		<HeaderContainer>
			<a href='https://www.linkedin.com/in/emil-ryd%C3%A9n-0a37175a/details/recommendations/?detailScreenTabIndex=0'>
				<Img src={avatar} size={size} borderRadius={"3rem"} />
			</a>
			<Name>{name}</Name>
			<Title>{title}</Title>
			<Title>{company}</Title>
		</HeaderContainer>
	);
};

export default CardHeader;
