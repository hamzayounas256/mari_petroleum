import Title from "./Title";
import { motion } from "framer-motion";
import { fadeIn } from "../varients";

export default function OurServices() {
	return (
		<div className="py-20">
			<motion.div
				variants={fadeIn("down", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: true, amount: 0.9 }}
				className="text-center pb-2 mt-4 text-3xl"
			>
				<Title text1="Our" text2="Services" />
			</motion.div>

			<motion.div
				variants={fadeIn("up", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: true, amount: 0.9 }}
				className="max-w-screen-lg mx-auto p-4"
			>
				{/* Description */}
				<p className="text-sm md:text-base text-gray-800 leading-relaxed text-justify">
					AES offers a seasoned team of experts. We aim to collaborate closely
					with clients, offering superior field expertise and
					consultancy/Studies services. Our personnel have extensive experience
					in Consultancy/Studies roles across diverse projects for national and
					international oil, Gas and Mineral companies.
				</p>
			</motion.div>

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
							<p className="font-medium text-sm md:text-base">
								Consultancy Services Includes:
							</p>
						</div>
						<ul className="list-disc list-inside text-sm md:text-base mt-3 space-y-1">
							<li>2D/3D Seismic Data Acquisition QC</li>
							<li>2D/3D Seismic Data Processing QC</li>
							<li>Gravity/Magnetic QC</li>
						</ul>
					</div>
				</div>

				{/* Right Side - Text Content */}
				<div className="w-full sm:w-1/2 flex flex-col justify-center mx-auto">
					<div className="text-gray-800">
						{/* Section Divider */}
						<div className="flex items-center gap-2 mb-4">
							<div className="w-8 md:w-11 h-[2px] bg-gray-800"></div>
							<p className="font-medium text-sm md:text-base">
								Drilling Services Include:
							</p>
						</div>
						<ul className="list-disc list-inside text-sm md:text-base mt-3 space-y-1">
							<li>Wells Site Geologist</li>
							<li>Company Man</li>
							<li>Mud Engineer</li>
						</ul>
					</div>
				</div>
			</motion.div>

			<motion.div
				variants={fadeIn("up", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: true, amount: 0.9 }}
				className="flex flex-col sm:flex-row items-center max-w-screen-lg mx-auto p-4 "
			>
				{/* Left Side - Text Content */}
				<div className="w-full sm:w-1/2 flex flex-col justify-center p-2">
					<div className="text-gray-800">
						{/* Section Divider */}
						<div className="flex items-center gap-2 mb-4">
							<div className="w-8 md:w-11 h-[2px] bg-gray-800"></div>
							<p className="font-medium text-sm md:text-base">
								Studies Services Include:
							</p>
						</div>
						<ul className="list-disc list-inside text-sm md:text-base mt-3 space-y-1">
							<li>Field Geology</li>
							<li>
								Mineral Exploration (CRIRSCO Code)
								<ul className="list-inside ml-4 mt-2 space-y-1">
									{/* <ul> */}
									<li>
										<strong>a. </strong>Scoping Study
									</li>
									<li>
										<strong>b. </strong>Field Geology
									</li>
									<li>
										<strong>c. </strong>Geophysical Study (Magnetic, IP,
										Resistivity)
									</li>
									<li>
										<strong>d. </strong>Core Cutting
									</li>
									<li>
										<strong>e. </strong>Pre-Feasibility Study
									</li>
									<li>
										<strong>f. </strong>Reserve Estimation and Certification
									</li>
									<li>
										<strong>g. </strong>Bankable documents
									</li>
								</ul>
							</li>
							<li>
								Structural geology, Structural forward modeling, Restoration,
								and petroleum systems modeling
							</li>
							<li>Geochemistry/Basin Modeling</li>
							<ul className="list-inside ml-4 mt-2 space-y-1">
								<li>
									<strong>a. </strong>Geochemistry Assessment of Asphaltene and
									prediction of its distribution in Oil and Gas Reservoirs
								</li>
								<li>
									<strong>b. </strong>Unconventional and Conventional Resource
									Evaluation
								</li>
								<li>
									<strong>c. </strong>Assessment of leaked annulus fluids and
									genetic correlation to their source reservoirs
								</li>
								<li>
									<strong>d. </strong>Monitoring and assessment of CO2 and Water
									breakthrough in WAG Projects
								</li>
							</ul>
						</ul>
					</div>
				</div>

				{/* Right Side - Text Content */}
				<div className="w-full sm:w-1/2 flex flex-col justify-center mx-auto p-2">
					<div className="text-gray-800">
						{/* Section Divider */}
						{/* <div className="flex items-center gap-2 mb-4">
							<div className="w-8 md:w-11 h-[2px] bg-gray-800"></div>
							<p className="font-medium text-sm md:text-base">
								Drilling Services Include:
							</p>
						</div> */}
						{/* <ul className="list-disc list-inside text-sm md:text-base mt-3 space-y-1">
							<li>Geochemistry/Basin Modeling</li>
						</ul> */}
						<ul className="list-inside ml-4 mt-2 space-y-1">
							<li>
								<strong>e. </strong>Geochemistry Based methods in Exploration
							</li>
							<li>
								<strong>f. </strong>Assessment of oil and gas field vertical and
								lateral compartments using fluid geochemistry
							</li>
							<li>
								<strong>g. </strong>Core extracted fluids, oil, gas and water
								and hydrocarbon resource potential evaluation
							</li>
							<li>
								<strong>h. </strong>Understanding hydrocarbon charge history,
								basin modeling and basin analysis using fluid inclusion studies
							</li>
							<li>
								<strong>i. </strong>Finding additional value from produced
								formation waters in your wells-how geochemistry can help
							</li>
							<li>
								<strong>j. </strong>Gas composition, isotope geochemistry and
								its application in reservoir studies
							</li>
							<li>
								<strong>k. </strong>Geochemistry based assessment of H2S in
								reservoirs and its distribution prediction
							</li>
							<li>
								<strong>l. </strong>Geochemistry can help to select best sites
								and surveillance for underground carbon storage
							</li>
							<li>
								<strong>m. </strong>Biomarkers and their application in
								exploration and production
							</li>
							<li>
								<strong>n. </strong>Geochemistry labs, instruments, equipment
								and data analytics
							</li>
							<li>
								<strong>o. </strong>Assessment of controls on reservoir property
								distribution and prediction
							</li>
							<li>
								<strong>p. </strong>Exploration and production portfolio
								assessment and its evaluation
							</li>
						</ul>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
