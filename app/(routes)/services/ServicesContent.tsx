
"use client"
import { CoverParticles } from "@/components/CoverParticles";
import { MotionTransition } from "@/components/MotionTransition";
import MotionTransitionPage from "@/components/MotionTransitionPage";
import SliderServices from "@/components/SliderServices";
import Image from "next/image";
import Link from "next/link";
const ServicesContent = () => {
    return (
        <>
            <CoverParticles />
            <MotionTransitionPage />
            <div className="fixed bo<ttom-0">
                <MotionTransition position="right">
                    <Image
                        src={"/imageServices.png"}
                        width={300}
                        height={300}
                        alt="Imagen de AboutMe"
                        className="hidden opacity-15 lg:inline-block"
                    />
                </MotionTransition>
                <Image
                    src={"/circles.png"}
                    width={500}
                    height={500}
                    alt="Imagen de AboutMe"
                    className="fixed bottom-0 right-0 opacity-10  "
                />
            </div>
            <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover ">
                <div className="flex flex-col md:flex-row px-5 items-center justify-center mx-auto">
                    <div className="max-w-[450px] ">
                        <MotionTransition position="right">
                            <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl mb-3 md:mb-5 mt-32 md:mt-0">
                                Mis{" "}
                                <span className="font-bold bg-gradient-to-r from-secondary to-secondaryLight text-transparent bg-clip-text">
                                    {" "}
                                    Servicios.
                                </span>
                            </h1>
                            <p className="mb-10 text-xl text-gray-300 text-center md:text-left md:mb-7">
                                Ofrezco servicios de desarrollo web frontend especializados en
                                la creación de sitios web y aplicaciones atractivas y
                                funcionales. Utilizando las últimas tecnologías, como HTML, CSS
                                y JavaScript, diseño interfaces de usuario intuitivas y
                                responsivas que reflejan la identidad de marca de mis clientes y
                                mejoran su presencia en línea.
                            </p>
                            <Link href="/contact">
                                <button className="px-4 py-3 font-bold text-center bg-gradient-to-r from-secondary to-secondaryLight text-transparent bg-clip-text uppercase transition-all rounded-lg border-4 border-secondaryLight relative z-50  hover:shadow-xl active:opacity-85  w-full md:w-auto mb-10">
                                    Contacta conmigo
                                </button>
                            </Link>
                        </MotionTransition>
                    </div>

                    {/* SLIDER */}
                    <div className="mb-32 md:mb-0">
                        <MotionTransition position="right">
                            <SliderServices />
                        </MotionTransition>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServicesContent;
