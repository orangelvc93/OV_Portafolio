import * as React from "react";
import CircularProgress, {
	CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(
	props: CircularProgressProps & { value: number }
) {
	return (
		<Box sx={{ position: "relative", display: "inline-flex" }}>
			<CircularProgress
				variant="determinate"
				{...props}
				sx={{
					color: props.color || "#d86b17",
				}}
				size={props.size || 100}
			/>
			<Box
				sx={{
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					position: "absolute",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Typography
					variant="caption"
					component="div"
					color="white"
					fontSize="18px"
				>{`${Math.round(props.value)}%`}</Typography>
			</Box>
		</Box>
	);
}

const Skills = () => {
	const [progressHTML, setProgressHTML] = React.useState(10);
	const [progressCSS, setProgressCSS] = React.useState(10);
	const [progressJS, setProgressJS] = React.useState(10);
	const [progressTS, setProgressTS] = React.useState(10);
	/*========= Loader HTML ============================ */
	React.useEffect(() => {
		const timer = setInterval(() => {
			setProgressHTML((prevProgress) =>
				prevProgress >= 95 ? 95 : prevProgress + 1
			);
		}, 50);
		return () => {
			clearInterval(timer);
		};
	}, []);

	/*========= Loader CSS ============================ */
	React.useEffect(() => {
		const timer = setInterval(() => {
			setProgressCSS((prevProgress) =>
				prevProgress >= 96 ? 96 : prevProgress + 1
			);
		}, 40);
		return () => {
			clearInterval(timer);
		};
	}, []);
	/*========= Loader JavaScript ============================ */
	React.useEffect(() => {
		const timer = setInterval(() => {
			setProgressJS((prevProgress) =>
				prevProgress >= 80 ? 80 : prevProgress + 1
			);
		}, 60);
		return () => {
			clearInterval(timer);
		};
	}, []);
	/*========= Loader TypeScript ============================ */
	React.useEffect(() => {
		const timer = setInterval(() => {
			setProgressTS((prevProgress) =>
				prevProgress >= 70 ? 70 : prevProgress + 1
			);
		}, 80);
		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div
			id="skills"
			className="flex justify-center items-center flex-col mt-5 mb-3 bg-darkBg/55 rounded-lg mx-3 pb-10"
		>
			<h2 className="text-2xl leading-tight text-center uppercase my-4">
				Ski
				<span className="bg-gradient-to-r from-secondary to-secondaryLight text-transparent bg-clip-text font-bold">
					lls
				</span>
			</h2>

			<section className="flex gap-8 flex-wrap px-10 md:px-0 justify-center items-center">
				<div className="flex flex-col items-center gap-1">
					<CircularProgressWithLabel value={progressHTML} />
					<span className=" text-lg font-bold">HTML</span>
				</div>
				<div className="flex flex-col items-center gap-1">
					<CircularProgressWithLabel value={progressCSS} />
					<span className=" text-lg font-bold">CSS</span>
				</div>
				<div className="flex flex-col items-center gap-1">
					<CircularProgressWithLabel value={progressJS} />
					<span className=" text-lg font-bold">JavaScript</span>
				</div>
				<div className="flex flex-col items-center gap-1">
					<CircularProgressWithLabel value={progressTS} />
					<span className=" text-lg font-bold">TypeScript</span>
				</div>
			</section>
		</div>
	);
};

export default Skills;
