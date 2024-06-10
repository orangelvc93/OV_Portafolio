import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { MotionTransition } from "./MotionTransition";

const Intro = () => {
	return (
		<div className="w-full">
			<div className="z-20 grid md:grid-cols-2 items-center justify-center m-auto h-full p-6 lg:py-10 py-20 max-w-7xl">
				<MotionTransition position="right">
					<Image
						src="/home-4.png"
						priority
						width={300}
						height={300}
						alt="Imagen de Perfil"
						className="profile-img lg:w-[20vw] m-auto"
					/>
				</MotionTransition>
				<div className="flex flex-col justify-center max-w-lg">
					<MotionTransition position="right">
						<h1 className="text-2xl md:text-4xl leading-tight text-center mb-5 md:text-left md:mb-10 ">
							Si puedes pensarlo, <br />
							<TypeAnimation
								sequence={[
									// Same substring at the start will only be typed once, initially
									"puedes programarlo",
									1000,
									"puedes optimizarlo",
									1000,
									"puedes implementarlo",
									1000,
									"puedes desarrollarlo",
									1000,
								]}
								speed={50}
								wrapper="span"
								/* style={{ fontSize: "2em" }} */
								repeat={Infinity}
								className="font-bold bg-gradient-to-r from-secondary to-secondaryLight text-transparent bg-clip-text"
							/>
						</h1>
					</MotionTransition>
					<MotionTransition position="right">
						<p className=" text-xl mb-2 text-center text-white/80 md:text-left md:mb-8">
							Como desarrollador frontend y creador de contenido, me dedico a
							combinar diseño y funcionalidad para crear experiencias digitales
							impactantes y accesibles.
						</p>
						<div className="  flex flex-col md:flex-row mt-5 sm:mt-0 mb-10 md:mb-0 gap-5">
							<a
								href="/portfolio"
								className="px-4 py-3 font-bold text-center text-white uppercase transition-all rounded-lg cursor-pointer border-4 hover:scale-110 hover:-rotate-2 hover:shadow-xl active:opacity-85"
							>
								Ver Proyectos
							</a>
							<a
								href="/contact"
								className="px-4 py-3 font-bold text-center bg-gradient-to-r from-secondary to-secondaryLight text-transparent bg-clip-text uppercase transition-all rounded-lg cursor-pointer border-4 border-secondaryLight hover:scale-110 hover:rotate-2 hover:shadow-xl active:opacity-85"
							>
								Contacta conmigo
							</a>
						</div>
					</MotionTransition>
				</div>
			</div>
		</div>
	);
};

export default Intro;
