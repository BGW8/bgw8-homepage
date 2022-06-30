import styled from "styled-components";

const TextWrapper = styled.div`
	width: ${(props) => props.width || ""};
	text-align: ${(props) => props.textAlign || ""};
	font-weight: ${(props) => props.fontWeight || ""};
	color: ${(props) => props.color};
`;

const Text = ({
	as = "p",
	children,
	color = "rgba(251, 139, 18, 1)",
	width,
	href,
	fontWeight,
	textAlign = "center",
}) => {
	const textAs = {
		h1: <h1>{children}</h1>,
		h2: <h2>{children}</h2>,
		h3: <h3>{children}</h3>,
		h4: <h4>{children}</h4>,
		h5: <h5>{children}</h5>,
		span: <span>{children}</span>,
		p: <p>{children}</p>,
	};

	return href ? (
		<a href={href}>
			<TextWrapper
				width={width}
				textAlign={textAlign}
				fontWeight={fontWeight}
				color={color}
			>
				{textAs[as]}
			</TextWrapper>
		</a>
	) : (
		<TextWrapper
			width={width}
			textAlign={textAlign}
			fontWeight={fontWeight}
			color={color}
		>
			{textAs[as]}
		</TextWrapper>
	);
};
export default Text;
