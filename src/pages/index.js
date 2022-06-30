import Head from "next/head";
import Testimonials from "/src/sections/testimonials";
import Start from "/src/sections/start";
import Projects from "/src/sections/projects";
import Contact from "/src/sections/contact";

export default function Home() {
	return (
		<>
			<Start />
			<Testimonials />
			<Projects />
			{/* <Contact /> */}
		</>
	);
}

export const getStaticProps = async (context) => {
	// data-fetching
	return {
		props: {},
	};
};
