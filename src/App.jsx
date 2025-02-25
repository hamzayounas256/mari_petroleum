import { useEffect, useRef } from "react";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import OurServices from "./components/OurServices";
import OurTeam from "./components/OurTeam";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
	const sections = useRef({});

	useEffect(() => {
		// Get all sections
		sections.current = {
			Home: document.getElementById("home"),
			"About Us": document.getElementById("about"),
			Services: document.getElementById("services"),
			"Our Team": document.getElementById("team"),
			"Contact Us": document.getElementById("contact"),
		};
	}, []);

	return (
		<>
			<Header />
			<NavigationBar sectionsRef={sections} />
			<main>
				<section id="home" className="min-h-screen">
					<Home />
				</section>
				<section id="about" className="min-h-screen">
					<Aboutus />
				</section>
				<section id="services" className="min-h-screen">
					<OurServices />
				</section>
				<section id="team" className="min-h-screen">
					<OurTeam />
				</section>
				<section id="contact" className="min-h-screen">
					<Contact />
				</section>
			</main>
			<ScrollToTop />
			<Footer />
		</>
	);
}
