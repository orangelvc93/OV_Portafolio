import { dataProfessionalExperience } from "@/data";
import React from "react";

const ProfesionalExperience = () => {
	return (
		<div className="flex flex-col justify-center divide-y divide-slate-200 px-4">
			<div className="w-full max-w-4xl mx-auto md:pb-40 pt-8 md:pt-10">
				<div className="-my-6">
					{dataProfessionalExperience.map((data) => (
						<div
							key={data.id}
							className="relative py-6 pl-8 sm:pl-32 group"
						>
							<h3 className="mb-1 text-xl font-bold sm:mb-0">{data.title}</h3>
							<div
								className="flex flex-col sm:flex-row items-start mb-1 
                                        group-last:before:hidden before:absolute 
                                        before:left-2 sm:before:left-0 before:h-[110%]
                                        before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] 
                                        before:self-start before:-translate-x-1/2 
                                        before:translate-y-3 after:absolute after:left-2 
                                        sm:after:left-0 after:w-2 after:h-2 after:bg-secondary 
                                        after:border-4 after:box-content after:border-slate-50 
                                        after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 
                                        after:translate-y-1.5 "
							>
								<time className="sm:absolute -left-2 -translate-y-1 inline-flex items-center justify-center text-center text-xs font-semibold uppercase w-20 h-10 mb-3 sm:mb-0 text-white/80 bg-gradient-to-r from-secondary to-secondaryLight rounded-full">
									{data.date}
								</time>
								<div className="text-xl font-bold text-gray-400">
									{data.subtitle}
								</div>
							</div>
							<div className="text-slate-400">{data.description}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProfesionalExperience;
