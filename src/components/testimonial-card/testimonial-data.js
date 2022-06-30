import Eric from "/src/public/Images/testimonial-images/Eric.jpeg";
import Fredrik from "/src/public/Images/testimonial-images/Fredrik.jpeg";
import Imran from "/src/public/Images/testimonial-images/Imran.jpeg";
import Jimmy from "/src/public/Images/testimonial-images/Jimmy.jpeg";
import Jonas from "/src/public/Images/testimonial-images/Jonas.jpeg";

//TODO: move code to DB e.g MongoDB

const people = [
	{
		image: Jonas,
		name: "Jonas Augustinson",
		title: "Technology Manager",
		company: "Primozone",
		id: "id4",
		testimonial: (
			<div>
				<p>
					Emil’s ability to learn and find ways to solve his tasks made a
					dramatic difference in the productivity level of our team. Emil earns
					my highest recommendation, he is a talented, hard-working and warm
					co-worker and a joy to collaborate with.
				</p>
				<p> I miss him!</p>
			</div>
		),
	},
	{
		image: Eric,
		name: "Eric Skopal",
		title: "B2B Sales / Investor",
		company: <p></p>,
		id: "id1",
		testimonial: (
			<div>
				<p>
					Emil is friendly, analytical and has a hidden talent to transform
					numbers into beautiful graphs. Emil will be appreciated wherever he
					goes, he is a true talent and I give him my highest recommendation.
				</p>
			</div>
		),
	},
	{
		image: Jimmy,
		name: "Jimmy Boklund",
		title: "Supply Chain Director",
		company: "SWEP Int. AB",
		id: "id5",
		testimonial: (
			<div>
				<p>
					Emil is very professional, quick learner and he has the ability to in
					a early stage see &quot;the bigger picture&quot;. It was a true
					pleasure working with Emil. I have confidence that he will continue to
					grow as a professional and I look forward to seeing him succeed.
				</p>
			</div>
		),
	},
	{
		image: Fredrik,
		name: "Fredrik Ejserholm",
		title: "Operations Manager",
		company: "Sony",
		id: "id2",
		testimonial: (
			<div>
				<p>
					Emil always showed great interest and always wanted to learn. Even
					though it was Emils first assignment he came with ideas and thoughts
					regarding on how the development team for our web services should
					work.
				</p>
			</div>
		),
	},
	{
		image: Imran,
		name: "Imran Khan",
		title: "Category Manager",
		company: "IKEA",
		id: "id3",
		testimonial: (
			<div>
				<p>
					Emil you have been great team player, a kind, humble yet very
					professional and demanding professional.You have always been aiming
					for the best, and demanding the best, your curiosity to learn develop
					and then contribute has been very impressive. Wish you all the best in
					future.
				</p>
			</div>
		),
	},
	,
];

export default people;
