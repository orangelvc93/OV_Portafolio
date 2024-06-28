"use client";
import { CoverParticles } from "@/components/CoverParticles";
import { MotionTransition } from "@/components/MotionTransition";
import MotionTransitionPage from "@/components/MotionTransitionPage";
import OtherSkills from "@/components/OtherSkills";
import Skills from "@/components/Skills";
import TabAboutMe from "@/components/TabAboutMe";
import Image from "next/image";

const AboutMeContent = () => {
    return (
        <>
            <MotionTransitionPage />
            <CoverParticles />
            <div className="fixed bottom-0">
                <MotionTransition position="bottom">
                    <Image
                        src={"/aboutMe.png"}
                        width={300}
                        height={300}
                        alt="Imagen de AboutMe"
                        className="hidden opacity-50 lg:inline-block"
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
                <div className="max-w-5xl  pb-40 mx-auto mt-24 md:pb-0 ">
                    <MotionTransition position="bottom">
                        <Skills />
                        <OtherSkills />
                        <TabAboutMe />
                    </MotionTransition>
                </div>
            </div>
        </>
    );
}

export default AboutMeContent;
