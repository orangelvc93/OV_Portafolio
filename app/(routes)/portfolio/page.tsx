"use client";
import { CoverParticles } from "@/components/CoverParticles";
import { MotionTransition } from "@/components/MotionTransition";
import MotionTransitionPage from "@/components/MotionTransitionPage";
import PortfolioBox from "@/components/PortfolioBox";
import { dataPortfolio } from "@/data";
import Image from "next/image";
import React from "react";

const PortfolioPage = () => {
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

			<div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover pb-32">
				<MotionTransition
					position="right"
					className="flex flex-col px-5 items-center mt-32 sm:mt-24 mx-auto max-w-7xl"
				>
					<h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl mb-5">
						Mis últimos{" "}
						<span className="font-bold bg-gradient-to-r from-secondary to-secondaryLight text-transparent bg-clip-text">
							{" "}
							trabajos realizados
						</span>
					</h1>
					<div className="grid lg:grid-cols-3 w-full gap-4">
						{dataPortfolio.map((data) => (
							<PortfolioBox
								key={data.id}
								data={data}
							/>
						))}
					</div>
				</MotionTransition>
			</div>
		</>
	);
};

export default PortfolioPage;
