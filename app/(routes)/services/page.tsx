

import { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
	title: "Servicios",
	description: "Servicios ofrecidos por mi",
};

const ServicesPage = () => {
	return (
		<>
			<ServicesContent />
		</>
	);
};

export default ServicesPage;
