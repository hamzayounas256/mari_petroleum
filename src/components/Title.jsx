export default function Title({ text1, text2 }) {
	return (
		<div className="inline-flex gap-2 items-center mb-3 border-t-4">
			{/* <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p> */}
			<p className="text-gray-500 pt-2">
				{text1}
				<span className="text-gray-700 font-medium"> {text2}</span>
			</p>
		</div>
	);
}
