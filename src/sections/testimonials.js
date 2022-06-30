import people from "/src/components/testimonial-card/testimonial-data";
import TestimonialCard from "/src/components/testimonial-card/TestimonialCard";
import PageWrapper from "/src/components/PageWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import Text from "../components/Text";
import styled from "styled-components/";
import TextAnimation from "../components/text/TextAnimation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards, Navigation } from "swiper";

const Box = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
`;

const Testimonials = () => {
	return (
		<PageWrapper>
			<TextAnimation text1={"SOME NICE WORDS"} />
			<Box>
				<Swiper
					effect={"cards"}
					grabCursor={true}
					modules={[EffectCards, Navigation]}
					className='mySwiper'
					// navigation={true}
				>
					{people.map(({ image, title, testimonial, id, name, company }) => (
						<SwiperSlide key={id}>
							<TestimonialCard
								avatar={image}
								title={title}
								company={company}
								name={name}
								testimonial={testimonial}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</Box>
		</PageWrapper>
	);
};

export default Testimonials;
