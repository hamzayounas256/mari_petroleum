import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			// Get the About Us section
			const aboutSection = document.getElementById("about");
			if (aboutSection) {
				// Show button when we scroll past the about section
				setIsVisible(window.scrollY >= aboutSection.offsetTop);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		// Initial check
		toggleVisibility();

		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<button
			onClick={scrollToTop}
			className={`fixed bottom-8 right-8 bg-red-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
				isVisible
					? "opacity-100 translate-y-0"
					: "opacity-0 translate-y-16 pointer-events-none"
			}`}
			aria-label="Scroll to top"
		>
			<ArrowUp size={24} />
		</button>
	);
};

export default ScrollToTop;
