import { codeSkills, profesionalSkills } from "@/data";
import React from "react";

const OtherSkills = () => {
	const react = {
		number: 85,
		name: "React",
	};
	return (
		<section>
			<div className="flex flex-col sm:flex-row  justify-center mb-10 max-w-5xl mx-auto md:gap-3 ">
				{/* ===============code skills===================== */}
				<div className="bg-darkBg/50 rounded-lg px-5 pb-10 pt-5 md:pt-7  md:px-10 sm:w-[50%] mx-3 md:ml-3  relative z-10 mb-3">
					<h2 className="text-2xl leading-tight text-center uppercase ">
						Code{" "}
						<span className="font-bold bg-gradient-to-r from-secondary to-secondaryLight text-transparent bg-clip-text">
							Skills
						</span>
					</h2>
					<div>
						{codeSkills.map((item) => (
							<div
								key={item.id}
								className="py-3 border-b-2 border-slate-50/5"
							>
								<h3
									className={`flex justify-between text-xl -mb-2 w-[${item.percentage}%]`}
								>
									{item.name}
									<span>{item.percentage}%</span>
								</h3>
								<div className="h-[9px]  rounded-md mt-2 bg-black/35">
									<span
										className={`bg-gradient-to-r from-secondary to-secondaryLight rounded-md h-full block w-[${item.percentage}%]`}
									></span>
								</div>
							</div>
						))}
					</div>
				</div>
				{/* =============== Professional Skills ============ */}
				<div className="bg-darkBg/50 rounded-lg px-5 pb-10 pt-5 md:pt-7 md:px-10 sm:w-[50%] mx-3 md:mr-3 relative z-10 mb-5">
					<h2 className="text-2xl  leading-tight text-center uppercase ">
						profesional{" "}
						<span className="font-bold bg-gradient-to-r from-secondary to-secondaryLight text-transparent bg-clip-text">
							Skills
						</span>
					</h2>
					<div>
						{profesionalSkills.map((item) => (
							<div
								key={item.id}
								className="py-3 border-b-2 border-slate-50/5"
							>
								<h3
									className={`flex justify-between text-xl -mb-2 w-[${item.percentage}%]`}
								>
									{item.name}
									<span>{item.percentage}%</span>
								</h3>
								<div className="h-[9px]  rounded-md mt-2 bg-black/35">
									<span
										className={`bg-gradient-to-r from-secondary to-secondaryLight rounded-md h-full block w-[${item.percentage}%]`}
									></span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default OtherSkills;
