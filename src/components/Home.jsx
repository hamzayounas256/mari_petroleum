import home from "../assets/home.png";
import Title from "./Title";
import { motion } from "framer-motion";
import { fadeIn } from "../varients";

export default function Home() {
	return (
		<div className="mx-2 py-20">
			{/* Section Title */}
			<motion.div
				variants={fadeIn("down", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: true, amount: 0.9 }}
				id="home"
				className="text-center text-3xl"
			>
				<Title text1="Home" text2="Section" />
			</motion.div>

			{/* Hero Section */}
			<motion.div
				variants={fadeIn("up", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: true, amount: 0.9 }}
				className="flex flex-col sm:flex-row items-center max-w-screen-lg mx-auto"
			>
				{/* Left Side - Text Content */}
				<div className="w-full sm:w-1/2 flex flex-col justify-center p-4">
					<div className="text-gray-800">
						{/* Section Divider */}
						<div className="flex items-center gap-2 mb-4">
							<div className="w-8 md:w-11 h-[2px] bg-gray-800"></div>
							<p className="font-medium text-sm md:text-base">Our Expertise</p>
						</div>

						{/* Description */}
						<p className="text-sm md:text-base leading-relaxed">
							<strong>Astral Energy Services (AES)</strong> specializes in
							providing comprehensive consultancy services in:
						</p>

						<ul className="list-disc list-inside text-sm md:text-base mt-3 space-y-1">
							<li>AI Interpretation Softwares</li>
							<li>2D/3D Seismic Data Acquisition & Processing</li>
							<li>Gravity/Magnetic Surveys</li>
							<li>Well Site Geology</li>
							<li>Drilling Consultancy (Company Man)</li>
							<li>
								Mining: Scoping Studies, Field Geology, Geophysical Studies
							</li>
						</ul>

						<p className="text-sm md:text-base mt-4 leading-relaxed">
							Founded in 2024 , AES addresses the need for advanced geophysical,
							geological, and drilling consultancy services in Pakistan . Our
							mission is to bridge market gaps by offering state-of-the-art
							solutions . Our team comprises highly qualified geophysicists,
							geologists, and drilling consultants who ensure quality,
							excellence, and adherence to AES standards .
						</p>
					</div>
				</div>

				{/* Right Side - Image */}
				<div className="w-full h-[390px] sm:w-1/2 flex justify-center mt-6 sm:mt-0">
					<img
						className="w-full max-w-sm sm:max-w-md"
						src={home}
						alt="AES Services"
					/>
				</div>
			</motion.div>
		</div>
	);
}
