import Title from "./Title";
import aboutus1 from "../assets/aboutus1.png";
import aboutus2 from "../assets/aboutus2.png";
import aboutus3 from "../assets/aboutus3.png";
import { motion } from "framer-motion";
import { fadeIn } from "../varients";

export default function Aboutus() {
	return (
		<div className="bg-gray-100 py-20">
			<motion.div
				variants={fadeIn("down", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: true, amount: 0.9 }}
				className="text-center text-3xl"
			>
				<Title text1="About" text2="Us" />
			</motion.div>

			<motion.div
				variants={fadeIn("up", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: true, amount: 0.9 }}
				className="max-w-screen-lg mx-auto p-4"
			>
				{/* Section Title */}
				<h2 className="text-2xl font-semibold text-gray-900 mb-4 ">
					Company Overview
				</h2>

				{/* Description */}
				<p className="text-sm md:text-base text-gray-800 leading-relaxed text-justify">
					Welcome to Astral Energy Services (SMC-Private) limited (AES), a
					leading provider in the Geophysical, Geological, and Geodetic services
					sector. We blend technical expertise with innovative strategies to
					tackle various challenges, committed to delivering top-tier service.
					AES aims to be your preferred partner, offering unmatched insights and
					customized solutions to meet unique needs. We stand out with our
					commitment to excellence, local expertise, and cutting-edge
					technology. Choose AES as your strategic partner for Geophysical,
					Geological, and Geodetic services in Pakistan, where client
					satisfaction and quality are our priorities.
				</p>
			</motion.div>

			{/* <hr /> */}
			{/* About Us - Core Values Section */}
			<motion.div
				variants={fadeIn("up", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: true, amount: 0.9 }}
				className="flex flex-col sm:flex-row items-center max-w-screen-lg mx-auto p-4"
			>
				{/* Left Side - Image */}
				<div className="w-full sm:w-1/2 flex justify-center sm:justify-start">
					<img
						className="w-full max-w-sm sm:max-w-md rounded-lg shadow-lg"
						src={aboutus1}
						alt="AES Core Values"
					/>
				</div>

				{/* Right Side - Text Content */}
				<div className="w-full sm:w-1/2 flex flex-col justify-center p-2">
					<div className="text-gray-800">
						{/* Section Divider */}
						<div className="flex items-center gap-2 mb-4">
							<div className="w-8 md:w-11 h-[2px] bg-gray-800"></div>
							<p className="font-medium text-sm md:text-base">Core Values</p>
						</div>

						{/* Description */}
						<p className="text-sm md:text-base leading-relaxed">
							At AES, we are dedicated to maintaining strong principles of
							Ethics and Transparency, Innovation, Loyalty and Commitment,
							Goal-Oriented Teamwork, and Professional Excellence. These values
							define our corporate culture and guide every project we undertake.
						</p>

						<ul className="list-disc list-inside text-sm md:text-base mt-3 space-y-1">
							<li>
								<strong>Integrity:</strong> We uphold the highest standards of
								quality and professionalism, always conducting business
								ethically.
							</li>
							<li>
								<strong>Honesty:</strong> We believe in being truthful, open,
								and candid in all our dealings.
							</li>
							<li>
								<strong>Passion:</strong> We are passionate about our work and
								proud of our achievements.
							</li>
							<li>
								<strong>HSEQ:</strong> Quality, Health, Safety, and
								Environmental stewardship are at the forefront. We ensure that
								our employees, subcontractors, communities, and the environment
								remain safe and eco-friendly.
							</li>
							<li>
								<strong>Innovation:</strong> We continuously strive to innovate
								and solve complex exploration problems.
							</li>
							<li>
								<strong>People:</strong> Our success stems from our people. We
								actively attract and develop top talent from the geophysical
								field.
							</li>
						</ul>

						<p className="text-sm md:text-base mt-4 leading-relaxed">
							Our dedication has resulted in the formation of specialized
							project teams, each with unique knowledge and experience to drive
							success.
						</p>
					</div>
				</div>
			</motion.div>

			{/* <hr /> */}
			{/* About Us - Culture Section */}
			<motion.div
				variants={fadeIn("up", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: true, amount: 0.9 }}
				className="flex flex-col sm:flex-row items-center max-w-screen-lg mx-auto p-4"
			>
				{/* Left Side - Text Content */}
				<div className="w-full sm:w-1/2 flex flex-col justify-center p-2">
					<div className="text-gray-800">
						{/* Section Divider */}
						<div className="flex items-center gap-2 mb-4">
							<div className="w-8 md:w-11 h-[2px] bg-gray-800"></div>
							<p className="font-medium text-sm md:text-base">Culture</p>
						</div>

						{/* Description */}
						<p className="text-sm md:text-base leading-relaxed">
							At Astral Energy Services (SMC-Private) Limited (AES), we take
							pride in nurturing an inclusive and performance-oriented culture.
							Our policies and procedures are meticulously crafted to support,
							motivate, and enhance performance.
						</p>
					</div>
				</div>

				{/* Right Side - Image */}
				<div className="w-full sm:w-1/2 flex justify-center sm:justify-start">
					<img
						className="w-full max-w-sm sm:max-w-md rounded-lg shadow-lg"
						src={aboutus2}
						alt="AES Core Values"
					/>
				</div>
			</motion.div>

			{/* <hr /> */}
			{/* Policies Section */}
			<motion.div
				variants={fadeIn("up", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: true, amount: 0.9 }}
				className="flex flex-col sm:flex-row items-center max-w-screen-lg mx-auto p-4 "
			>
				{/* Left Side - Image */}
				<div className="w-full sm:w-1/2 flex justify-center sm:justify-start">
					<img
						className="w-full max-w-sm sm:max-w-md rounded-lg shadow-lg"
						src={aboutus3}
						alt="AES Policies"
					/>
				</div>

				{/* Right Side - Text Content */}
				<div className="w-full sm:w-1/2 flex flex-col justify-center">
					<div className="text-gray-800">
						{/* Section Divider */}
						<div className="flex items-center gap-2 mb-4">
							<div className="w-8 md:w-11 h-[2px] bg-gray-800"></div>
							<p className="font-medium text-sm md:text-base">Policies</p>
						</div>

						{/* Description */}
						<p className="text-sm md:text-base leading-relaxed">
							Our policies regarding different business practices that form our
							Code of Conduct are:
						</p>

						<ul className="list-disc list-inside text-sm md:text-base mt-3 space-y-1">
							<li>Compliance with Laws and Rules</li>
							<li>Confidentiality</li>
							<li>Conduct of Personnel in Dealings</li>
							<li>Business Integrity</li>
							<li>Health, Safety and the Environment</li>
							<li>Involvement in Politics</li>
							<li>Conflict of Interest</li>
							<li>Accountability</li>
						</ul>
					</div>
				</div>
			</motion.div>

			{/* <hr /> */}
			<div className="max-w-screen-lg mx-auto p-4">
				{/* Description */}
				<motion.p
					variants={fadeIn("up", 0.2)}
					initial="hidden"
					whileInView={"show"}
					viewport={{ once: true, amount: 0.9 }}
					className="text-sm md:text-base text-gray-800 leading-relaxed text-justify"
				>
					At Astral Energy Services (SMC-Private) Limited (AES), we aim to
					become a leading Geophysical, Geological, Geodetic, and Consultancy
					services provider. We plan to achieve this by enhancing our
					professional capabilities with a highly skilled and talented
					workforce, delivering innovative solutions, and offering efficient
					services.
					<br />
					<br />
					Our mission is to advance exploration and production through the use
					of cutting-edge knowledge and technological innovations. By adopting
					competitive industry practices, we aim to replenish produced reserves
					adequately and optimize production to maximize revenues and
					shareholder returns. We are committed to maintaining the highest
					standards of Health, Safety, Environment (HSE), and Corporate Social
					Responsibility (CSR).
				</motion.p>
				<br />
				{/* Section Title */}
				<motion.div
					variants={fadeIn("up", 0.2)}
					initial="hidden"
					whileInView={"show"}
					viewport={{ once: true, amount: 0.9 }}
				>
					<h2 className="text-2xl font-semibold text-gray-900 mb-4">
						Commitment to Quality
					</h2>

					{/* Description */}
					<p className="text-sm md:text-base text-gray-800 leading-relaxed text-justify">
						At Astral Energy Services (SMC-Private) Limited (AES), our mission
						is to deliver top-notch Geophysical, Geological, Geodetic, and
						Consultancy services tailored to meet the varied needs of our
						clients. Through continuous innovation, technological advancements,
						and adherence to competitive industry practices, we strive to exceed
						expectations while ensuring the responsible management of
						Earth&apos;s resources.
					</p>
				</motion.div>
			</div>
		</div>
	);
}
