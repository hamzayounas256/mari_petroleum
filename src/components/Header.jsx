import phoneIcon from "../assets/phone.png";
import emailIcon from "../assets/email.png";
import logo from "../assets/logo.png";

export default function Header() {
	return (
		<div className="w-full bg-white shadow-md border-b border-gray-300">
			<div className="flex flex-col sm:flex-row items-center justify-between px-16 py-3 gap-3">
				<img src={logo} alt="Company Logo" className="h-16" />

				<div className="flex flex-col md:flex-row items-center gap-4 text-gray-700 text-sm font-medium">
					<div className="flex items-center gap-2">
						<img src={phoneIcon} alt="Phone Icon" className="w-5 h-5" />
						<span>+92-51-111-410-410</span>
					</div>
					<div className="flex items-center gap-2">
						<img src={emailIcon} alt="Email Icon" className="w-5 h-5" />
						<span>info@mpcl.com.pk</span>
					</div>
				</div>
			</div>
		</div>
	);
}
