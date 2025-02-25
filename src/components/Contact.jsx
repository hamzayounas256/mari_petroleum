import Title from "./Title";
import contact_img from "../assets/contact_img.png";
import { motion } from "framer-motion";
import { fadeIn } from "../varients";

export default function Contact() {
	return (
		<div className="pt-20">
			<motion.div
				variants={fadeIn("down", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: true, amount: 0.9 }}
				className="text-center text-2xl pb-8"
			>
				<Title text1={"CONTACT"} text2={"US"} />
			</motion.div>

			<motion.div
				variants={fadeIn("up", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: true, amount: 0.9 }}
				className="flex flex-col md:flex-row justify-center gap-10 mb-20"
			>
				<img className="w-full md:max-w-[480px]" src={contact_img} />
				<div className="flex flex-col justify-center items-start gap-6 p-4">
					<p className="font-semibold text-xl text-gray-600">OUR STORE</p>
					<p className="text-gray-500">
						House # 22 , Street # 152, Sector G-13/4 <br /> Islamabad, Pakistan
					</p>
					<strong className="text-gray-500">
						Business Development Manager <br /> Muhammad Rafay Khan
					</strong>
					<p className="text-gray-500">
						Email for Correspondence: <b> astralenergy24@gmail.com</b>
					</p>
					<p className="text-gray-500">
						Registration and NTN Numbers: <br /> <b>Registration Number:</b>{" "}
						0258365 <br /> <b>National Tax Number:</b> D830493
					</p>
				</div>
			</motion.div>
		</div>
	);
}
