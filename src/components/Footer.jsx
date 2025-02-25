import { motion } from "framer-motion";
import { fadeIn } from "../varients";

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="bg-red-600 text-white py-3">
			<motion.div
				variants={fadeIn("up", 0.2)}
				initial="hidden"
				whileInView={"show"}
				viewport={{ once: true, amount: 0.9 }}
				className="max-w-screen-lg mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left"
			>
				{/* Company Name & Copyright */}
				<p className="text-sm md:text-base">
					&copy; {year} Mari Petroleum. All Rights Reserved.
				</p>
			</motion.div>
		</footer>
	);
}
