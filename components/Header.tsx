import Link from "next/link";
import { MotionTransition } from "./MotionTransition";
import { socialNetworks } from "@/data";

const Header = () => {
	return (
		<MotionTransition
			position="bottom"
			className="absolute z-40 inline-block w-full top-2 md:top-3 px-10"
		>
			<header>
				<div className="container max-w-6xl mx-auto md:flex justify-between ">
					<Link href="/">
						<h2 className="text-center font-bold text-3xl my-3 md:text-left ">
							Oran
							<span className="bg-gradient-to-r from-secondary to-secondaryLight text-transparent bg-clip-text">
								Dev
							</span>
						</h2>
					</Link>
					<div className="flex items-center justify-center gap-7 ">
						{socialNetworks.map((item) => (
							<Link
								key={item.id}
								href={item.src}
								target="_blank"
								className="transition-all duration-300 brightness-150 hover:text-secondary hover:scale-150"
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
