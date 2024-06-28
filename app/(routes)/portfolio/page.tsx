import { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
	title: "Portafolio",
	description: "Proyectos culminados",
};

const PortfolioPage = () => {
	return (
		<>
			<PortfolioContent />
		</>
	);
};

export default PortfolioPage;
