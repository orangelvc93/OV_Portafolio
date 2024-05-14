import Link from "next/link";
import { MotionTransition } from "./MotionTransition";
import { socialNetworks } from "@/data";

const Header = () => {
	return (
		<MotionTransition
			position="bottom"
			className="absolute z-40 inline-block w-full  top-5 md:top-10 px-10 lg:px-0"
		>
			<header>
				<div className="container max-w-6xl mx-auto md:flex justify-between">
					<Link href="/">
						<h1 className="text-center font-bold text-4xl my-3 md:text-left">
							Oran<span className="text-secondary">Dev</span>
						</h1>
					</Link>
					<div className="flex items-center justify-center gap-7 ">
						{socialNetworks.map((item) => (
							<Link
								key={item.id}
								href={item.src}
								target="_blank"
								className="transition-all duration-300 hover:text-secondary"
							>
								{item.logo}
							</Link>
						))}
					</div>
				</div>
			</header>
		</MotionTransition>
	);
};

export default Header;
