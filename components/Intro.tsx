import Image from "next/image";

const Intro = () => {
	return (
		<div>
			<div>
				<Image
					src="/home-4.png"
					priority
					width={500}
					height={500}
					alt="Imagen de Perfil"
					className="profile-img"
				/>
				<div>
					<h1>
						Si puedes pensarlo, <br />
					</h1>
					<p>
						Como desarrollador frontend y creador de contenido, me dedico a
						combinar diseño y funcionalidad para crear experiencias digitales
						impactantes y accesibles.
					</p>
					<div>
						<a href="/projects">Ver Proyectos</a>
						<a href="/contact">Contacta conmigo</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;
