import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const roboto = Roboto({
	weight: ["400", "700"],
	subsets: ["latin"],
	style: "normal",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Orangel Valdespino - Portafolio",
	description: "Portafolio creado por Orangel Valdespino",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<Header />
				<NavBar />

				{children}
			</body>
		</html>
	);
}
