import styled from "styled-components";
import Image from "next/image";

const Img = ({ src, size, borderradius = "", alt }) => {
	return (
		<ImgWrapper height={size} width={size}>
			<StyledImg
				src={src}
				height={size}
				width={size}
				borderradius={borderradius}
			/>
		</ImgWrapper>
	);
};

const StyledImg = styled(Image)`
	alt: person;
	border-radius: ${(props) => props.borderradius || ""};
`;

const ImgWrapper = styled.div`
	height: ${(props) => (props.height ? props.height : "75px")};
	width: ${(props) => (props.width ? props.width : "75px")};
	margin-bottom: 10px;
`;

export default Img;
