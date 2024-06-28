import { Metadata } from "next";
import AboutMeContent from "./AboutMeContent";

export const metadata: Metadata = {
	title: "Sobre Mí",
	description: "Página de contacto.",
};

const AboutMePage = () => {
	return (
		<>
			<AboutMeContent />
		</>
	);
};

export default AboutMePage;
