import { dataPortfolio } from "@/data";
import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
	data: {
		id: number,
		title: string,
		image: string,
		description: string,
		urlGithub: string,
		urlDemo: string,
		tags: string[]
	};
}
const PortfolioBox = (props: PortfolioBoxProps) => {
	const { data } = props;
	const { id, title, image, urlGithub, urlDemo, description, tags } = data;
	return (
		<div
			key={id}
			className="group shadow-black shadow-md rounded-2xl"
		>
			<div className="relative overflow-hidden  rounded-2xl h-[340px] sm:h-[320px]">
				<Image
					src={image}
					width={400}
					height={400}
					alt="Imagen portfolio "
					className="group-hover:scale-125  transition-all ease-in-out duration-500 group-hover:blur-[1px] w-full h-full object-cover"
				/>
				<div className=" bg-gradient-to-t from-darkBg  to-darkBg/70 absolute w-full h-[105%] top-0 transition-all translate-y-56 group-hover:translate-y-0 ease-in-out opacity-0 group-hover:opacity-100 duration-500 ">
					<h1 className="px-4 pt-6 text-xl font-bold bg-gradient-to-r text-secondaryLight">
						{title}
					</h1>
					<p className="px-4 text-sm ">{description}</p>
					{/* Imprimimos los tags ======================= */}
					<div className="flex flex-wrap gap-1 px-4 mt-2">

						{tags.map((tag, index) => (
							<span key={index} className="text-sm px-2 py-1  rounded-xl bg-slate-950">
								{tag}
							</span>
						))}
					</div>
					{/* -------------------------------------------- */}

					<div className="absolute bottom-10  flex justify-between gap-3 w-full px-3">
						<Link
							href={urlGithub}
							target="_blank"
							className="bg-gradient-to-t from-secondary to-secondaryLight w-full py-2 rounded-md  transition duration-300 ease-in-out text-center hover:scale-110"
						>
							GitHub
						</Link>
						<Link
							href={urlDemo}
							target="_blank"
							className="bg-gradient-to-t from-purple-500 to-purple-400 w-full py-2 rounded-md  transition duration-300 ease-in-out text-center hover:scale-110"
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
