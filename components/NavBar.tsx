"use client";
import { itemsNavbar } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
	/* Obtenemos la ruta actual del ordenador */
	const router = usePathname();
	return (
		<div className="fixed z-40 flex items-center justify-center w-full mt-auto h-max bottom-10">
			<nav>
				<div className="bg-white/15 flex backdrop-blur-sm rounded-full px-3 py-2 gap-2 ">
					{itemsNavbar.map((item) => (
						<div
							key={item.id}
							className={`cursor-pointer px-3 py-2 transition-all duration-300 ease-in-out rounded-full brightness-125 hover:bg-gradient-to-r hover:from-secondary hover:to-secondaryLight hover:scale-125 ${
								router === item.link &&
								"bg-gradient-to-r from-secondary to-secondaryLight"
							}  `}
							data-tooltip-target="tooltip-default"
						>
							<Link
								href={item.link}
								title={item.title}
							>
								{item.icon}
							</Link>
						</div>
					))}
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
