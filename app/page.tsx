"use client";
import { CoverParticles } from "@/components/CoverParticles";
import Intro from "@/components/Intro";
import MotionTransitionPage from "@/components/MotionTransitionPage";

export default function Home() {
	return (
		<main>
			<MotionTransitionPage />
			<CoverParticles />
			<div className="bg-gradient-intro min-h-[100vh]">
				<Intro />
			</div>
		</main>
	);
}
