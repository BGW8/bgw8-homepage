import PageWrapper from "/src/components/PageWrapper";
import Img from "../components/Img";
import TextAnimation from "../components/text/TextAnimation";
import Emil from "/src/public/Images/avatar-image/Emil.jpeg";

const Start = (props) => {
	return (
		<PageWrapper>
			<Img src={Emil} size={"250px"} borderRadius={"50%"} />
			<TextAnimation
				text1={"Emil Rydén"}
				text2={"FRONT-END DEVELOPER"}
				dot={true}
			/>
		</PageWrapper>
	);
};
export default Start;
