"use client";
import { CoverParticles } from "@/components/CoverParticles";
import { MotionTransition } from "@/components/MotionTransition";
import MotionTransitionPage from "@/components/MotionTransitionPage";
import { socialNetworks } from "@/data";
import Head from "next/head";
import Image from "next/image";

const ServicesPage = () => {
	return (
		<>

			<CoverParticles />
			<MotionTransitionPage />
			<div className="fixed bottom-0">
				<MotionTransition position="right">
					<Image
						src={"/imageServices.png"}
						width={300}
						height={300}
						alt="Imagen de AboutMe"
						className="hidden opacity-15 lg:inline-block"
					/>
				</MotionTransition>
				<Image
					src={"/circles.png"}
					width={500}
					height={500}
					alt="Imagen de AboutMe"
					className="fixed bottom-0 right-0 opacity-10  "
				/>
			</div>

			{/* Inicio de la web9 */}
			<div>
				<div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover pb-32">
					<MotionTransition
						position="right"
						className="flex flex-col px-5 items-center mt-24 mx-auto max-w-7xl"
					>
						<h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10 mb-5 mt-10 md:mt-5">
							Contá
							<span className="font-bold bg-gradient-to-r from-secondary to-secondaryLight text-transparent bg-clip-text">
								ctame
							</span>
						</h1>
						<div className="flex md:flex-row flex-col gap-5 bg-slate-950/80 rounded-lg w-[90vw]  md:w-[60vw] md:p-5 pt-5">
							<div className=" flex flex-col w-full gap-3 justify-center items-center">
								<div className="group flex flex-col items-center justify-center  bg-slate-600/30 w-4/5 rounded-md px-5 py-10">
									<a
										href="https://wa.link/opkvx5"
										target="_blank"
										className="group-hover:text-secondaryLight  transition ease-in-out duration-200 group-hover:scale-125 flex flex-col items-center"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="50"
											height="50"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-message-circle-more"
										>
											<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
											<path d="M8 12h.01" />
											<path d="M12 12h.01" />
											<path d="M16 12h.01" />
										</svg>
										<p className="group-hover:scale-100 cursor-pointer text-md md:text-xl mt-3 group-hover:text-secondaryLight transition ease-in-out duration-200">
											+593 998975304
										</p>
									</a>
								</div>
								<div className="group flex flex-col items-center justify-center bg-slate-600/30 w-4/5 rounded-md px-5 py-10">
									<a
										href="mailto:orangelvc93@gmail.com"
										className="flex flex-col items-center group-hover:text-secondaryLight transition ease-in-out duration-200 group-hover:scale-125"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="50"
											height="50"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-mail"
										>
											<rect
												width="20"
												height="16"
												x="2"
												y="4"
												rx="2"
											/>
											<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
										</svg>
										<p className="group-hover:scale-100 cursor-pointer text-md md:text-xl mt-3 group-hover:text-secondaryLight transition ease-in-out duration-200">
											orangelvc93@gmail.com
										</p>
									</a>
								</div>
							</div>
							<div className="flex col-span-2 flex-wrap w-full gap-3 justify-center items-center pb-6">
								{socialNetworks.map((item) => (
									<div
										key={item.id}
										className="bg-slate-600/30 w-1/3 rounded-md p-8 flex items-center justify-center group"
									>
										<a
											className="group-hover:text-secondaryLight transition ease-in-out duration-200 group-hover:scale-125"
											href={item.src}
											target="_blank"
										>
											{item.logo}
										</a>
									</div>
								))}
							</div>
						</div>
					</MotionTransition>
				</div>
			</div>
		</>
	);
};

export default ServicesPage;
