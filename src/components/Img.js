import styled from "styled-components";
import Image from "next/image";

const Img = ({ src, size, borderRadius = "", alt }) => {
	return (
		<ImgWrapper height={size} width={size}>
			<StyledImg
				src={src}
				height={size}
				width={size}
				borderRadius={borderRadius}
			/>
		</ImgWrapper>
	);
};

const StyledImg = styled(Image)`
	alt: person;
	border-radius: ${(props) => props.borderRadius || ""};
`;

const ImgWrapper = styled.div`
	height: ${(props) => (props.height ? props.height : "75px")};
	width: ${(props) => (props.width ? props.width : "75px")};
	margin-bottom: 10px;
`;

export default Img;
