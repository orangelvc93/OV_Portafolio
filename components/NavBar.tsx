"use client";
import { itemsNavbar } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./MotionTransition";
import { usePathname } from "next/navigation";

const NavBar = () => {
	/* Obtenemos la ruta actual del ordenador */
	const router = usePathname();
	return (
		<MotionTransition
			position="right"
			className="fixed z-40 flex items-center justify-center w-full mt-auto h-max bottom-10"
		>
			<nav>
				<div className="bg-white/15 flex backdrop-blur-sm rounded-full px-3 py-2 gap-2">
					{itemsNavbar.map((item) => (
						<div
							key={item.id}
							className={`cursor-pointer px-3 py-2 transition duration-300 rounded-full brightness-125 hover:bg-secondary ${
								router === item.link && "bg-secondary "
							}  `}
							data-tooltip-target="tooltip-default"
						>
							<Link href={item.link}>{item.icon}</Link>
						</div>
					))}
				</div>
			</nav>
		</MotionTransition>
	);
};

export default NavBar;
