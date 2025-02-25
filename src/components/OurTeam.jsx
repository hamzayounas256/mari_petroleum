import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";
import team5 from "../assets/team5.png";
import team6 from "../assets/team6.png";
import team7 from "../assets/team7.png";
import team8 from "../assets/team8.png";
import team9 from "../assets/team9.png";
import team10 from "../assets/team10.png";
import team11 from "../assets/team11.png";
import team12 from "../assets/team12.png";
import team13 from "../assets/team13.png";
import team14 from "../assets/team14.png";
import Title from "./Title";
import { motion } from "framer-motion";
import { fadeIn } from "../varients";

const teamMembers = [
	{
		id: 1,
		name: "Alice",
		position: "CEO",
		image: team1,
	},
	{
		id: 2,
		name: "Bob",
		position: "CTO",
		image: team2,
	},
	{
		id: 3,
		name: "Charlie",
		position: "CFO",
		image: team3,
	},
	{
		id: 4,
		name: "Diana",
		position: "COO",
		image: team4,
	},
	{
		id: 5,
		name: "Evan",
		position: "CMO",
		image: team5,
	},
	{
		id: 6,
		name: "Fiona",
		position: "Lead Engineer",
		image: team6,
	},
	{
		id: 7,
		name: "George",
		position: "Senior Developer",
		image: team7,
	},
	{
		id: 8,
		name: "Hannah",
		position: "UI/UX Designer",
		image: team8,
	},
	{
		id: 9,
		name: "Ian",
		position: "QA Engineer",
		image: team9,
	},
	{
		id: 10,
		name: "Jane",
		position: "Product Manager",
		image: team10,
	},
	{
		id: 11,
		name: "Kevin",
		position: "Business Analyst",
		image: team11,
	},
	{
		id: 12,
		name: "Laura",
		position: "HR Manager",
		image: team12,
	},
	{
		id: 13,
		name: "Mike",
		position: "Marketing Lead",
		image: team13,
	},
	{
		id: 14,
		name: "Nina",
		position: "Content Strategist",
		image: team14,
	},
];

export default function OurTeam() {
	return (
		<section className="py-20 bg-gray-100">
			<div className="max-w-screen-lg mx-auto px-4">
				{/* <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2> */}
				<motion.div
					variants={fadeIn("down", 0.2)}
					initial="hidden"
					whileInView={"show"}
					viewport={{ once: true, amount: 0.9 }}
					className="text-center pb-4 text-3xl"
				>
					<Title text1="Our" text2="Team" />
				</motion.div>

				<motion.div
					variants={fadeIn("up", 0.2)}
					initial="hidden"
					whileInView={"show"}
					viewport={{ once: true, amount: 0.9 }}
					className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
				>
					{teamMembers.map((member) => (
						<div
							key={member.id}
							className="bg-white py-4 rounded-lg shadow-md text-center"
						>
							<img
								src={member.image}
								alt={member.name}
								className="w-40 h-32 mx-auto mb-2"
							/>
							{/* <h3 className="text-lg font-semibold">{member.name}</h3> */}
							{/* <p className="text-gray-600">{member.position}</p> */}
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
