import { Metadata } from "next";
import ContactContent from "./ContactContent";



export const metadata: Metadata = {
	title: "Contacto",
	description: "Página de contacto.",
};

const ServicesPage = () => {
	return (
		<>
			<ContactContent />
		</>
	);
};

export default ServicesPage;
