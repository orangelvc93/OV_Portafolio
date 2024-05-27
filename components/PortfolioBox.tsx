import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
	data: {
		id: number;
		title: string;
		image: string;
		urlGithub: string;
		urlDemo: string;
	};
}
const PortfolioBox = (props: PortfolioBoxProps) => {
	const { data } = props;
	const { id, title, image, urlGithub, urlDemo } = data;
	return (
		<div
			key={id}
			className="group shadow-black shadow-md rounded-2xl"
		>
			<div className="relative overflow-hidden rounded-2xl">
				<Image
					src={image}
					width={400}
					height={400}
					alt="Imagen portfolio "
					className="group-hover:scale-125 transition-all ease-in-out duration-500 group-hover:blur-[1px] "
				/>
				<div className=" bg-gradient-to-t from-darkBg  to-darkBg/20 absolute w-full h-[105%] top-0 transition-all translate-y-56 group-hover:translate-y-0 ease-in-out opacity-0 group-hover:opacity-100 duration-500 ">
					<h1 className="absolute bottom-[85px] px-3 text-xl font-bold">
						{title}
					</h1>
					<div className=" absolute bottom-10 flex justify-between gap-3 w-full px-3">
						<Link
							href={urlGithub}
							target="_blank"
							className="bg-secondary w-full py-2 rounded-md hover:bg-secondary/80 transition duration-300 ease-in-ou text-center hover:scale-110"
						>
							GitHub
						</Link>
						<Link
							href={urlDemo}
							target="_blank"
							className="bg-purple-500 w-full py-2 rounded-md hover:bg-purple-500/80 transition duration-300 ease-in-out text-center hover:scale-110"
						>
							Live Demo
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortfolioBox;
