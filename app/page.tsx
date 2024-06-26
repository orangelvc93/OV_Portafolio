"use client";
import { CoverParticles } from "@/components/CoverParticles";
import Intro from "@/components/Intro";
import MotionTransitionPage from "@/components/MotionTransitionPage";

export default function Home() {
	return (
		<main>
			<MotionTransitionPage />
			<CoverParticles />
			<div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
				<Intro />
			</div>
		</main>
	);
}
