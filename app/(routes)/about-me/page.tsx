"use client";
import { CoverParticles } from "@/components/CoverParticles";
import MotionTransitionPage from "@/components/MotionTransitionPage";
import TabAboutMe from "@/components/TabAboutMe";

const page = () => {
	return (
		<>
			<MotionTransitionPage />
			<CoverParticles />
			<div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
				<TabAboutMe />
			</div>
		</>
	);
};

export default page;
