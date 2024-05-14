"use client";

import { fadeIn } from "@/utils/MotionTransition";
import { motion } from "framer-motion";

export type MotionTransitionProps = {
	children: React.ReactNode;
	className?: string;
	position: "right" | "bottom";
};

export function MotionTransition(props: MotionTransitionProps) {
	const { children, className, position } = props;

	return (
		<motion.div
			variants={fadeIn(position)}
			initial="hidden"
			animate="visible"
			exit="hidden"
			className={className}
		>
			{children}
		</motion.div>
	);
}
