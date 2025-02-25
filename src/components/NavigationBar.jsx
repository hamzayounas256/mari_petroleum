import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function NavigationBar({ sectionsRef }) {
	const [active, setActive] = useState("Home");
	const [isOpen, setIsOpen] = useState(false);

	const menuItems = ["Home", "About Us", "Services", "Our Team", "Contact Us"];

	// Map menu items to their corresponding IDs
	const menuToId = {
		Home: "home",
		"About Us": "about",
		Services: "services",
		"Our Team": "team",
		"Contact Us": "contact",
	};

	// Handle scroll detection
	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight / 3;

			for (const [section, element] of Object.entries(sectionsRef.current)) {
				if (element) {
					const { offsetTop, offsetHeight } = element;

					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setActive(section);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		// Initial check
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, [sectionsRef]);

	// Handle click navigation
	const handleNavClick = (item) => {
		setActive(item);
		setIsOpen(false);

		const element = document.getElementById(menuToId[item]);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	};

	return (
		<nav className="sticky top-0 border-t border-b border-gray-300 bg-white shadow-md z-50">
			<div className="flex justify-between items-center px-6 py-3 md:justify-center">
				{/* Mobile Menu Button */}
				<button
					className="md:hidden justify-end text-gray-700"
					onClick={() => setIsOpen(!isOpen)}
					aria-label="Toggle menu"
				>
					{isOpen ? <X size={28} /> : <Menu size={28} />}
				</button>

				{/* Navigation Menu */}
				<ul
					className={`md:flex md:space-x-6 text-gray-700 font-medium ${
						isOpen
							? "absolute top-full left-0 right-0 flex flex-col items-center space-y-4 py-4 bg-white shadow-md"
							: "hidden"
					} md:relative md:flex md:shadow-none`}
				>
					{menuItems.map((item) => (
						<li
							key={item}
							onClick={() => handleNavClick(item)}
							className={`cursor-pointer px-4 py-3 transition-all duration-300 ${
								active === item
									? "bg-red-600 text-white font-bold rounded-md"
									: "hover:text-red-600"
							}`}
						>
							{item}
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}
