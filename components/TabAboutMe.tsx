import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import MotionTransitionPage from "./MotionTransitionPage";
import { styled } from "@mui/material";
import { color } from "framer-motion";
import ProfesionalExperience from "./ProfesionalExperience";
import EducationExperience from "./EducationExperience";

/* Aplicar estilos al elemento Tabs ====================== */
interface StyledTabsProps {
	children?: React.ReactNode;
	value: number;
	onChange: (event: React.SyntheticEvent, newValue: number) => void;
}
const StyledTabs = styled((props: StyledTabsProps) => (
	<Tabs
		centered
		{...props}
		TabIndicatorProps={{
			children: <span className="MuiTabs-indicatorSpan" />,
		}}
	/>
))({
	"& .MuiTabs-indicator": {
		display: "flex",
		justifyContent: "center",
		backgroundColor: "transparent",
		borderBottom: "3px solid",
		borderBottomColor: "#ff9900",
	},
	"& .MuiTabs-indicatorSpan": {
		maxWidth: 150,
		width: "100%",
		backgroundColor: "#ff9900",
	},
});

/* Aplicar estilos a los Tab ====================== */

interface StyledTabProps {
	label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
	<Tab
		disableRipple
		{...props}
	/>
))(({ theme }) => ({
	textTransform: "none",
	fontWeight: theme.typography.fontWeightBold,
	fontSize: "30px",
	marginRight: theme.spacing(1),
	color: "rgba(255, 255, 255, 0.7)",
	"@media (max-width: 768px)": {
		// Mobile size (adjust breakpoint as needed)
		fontSize: "20px",
	},
	"@media (min-width: 768px)": {
		// Tablet size (adjust breakpoints)
		fontSize: "23px",
		marginTop: "5px",
	},
	/* 	"text-transform": "uppercase", */
	"&.Mui-selected": {
		color: "#ff9900",
	},
	"&.Mui-focusVisible": {
		backgroundColor: "rgba(100, 95, 228, 0.32)",
	},
}));

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function CustomTabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

const TabAboutMe = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<>
			<h1 className="text-2xl leading-tight text-center md:text-3xl uppercase">
				Toda mi{" "}
				<span className="font-bold bg-gradient-to-r from-secondary to-secondaryLight text-transparent bg-clip-text">
					Experiencia
				</span>
			</h1>
			<Box sx={{ width: "100%" }}>
				<Box
					sx={{
						/* borderBottom: 1,
							borderColor: "divider", */
						marginTop: "15px",
					}}
				>
					<StyledTabs
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
					>
						<StyledTab
							label="Profesional"
							{...a11yProps(0)}
						/>
						<StyledTab
							label="Educativa"
							{...a11yProps(1)}
						/>
					</StyledTabs>
				</Box>
				<Box
					sx={{
						margin: "auto",
					}}
				>
					<div
						role="tabpanel"
						hidden={value !== 0}
						id={`simple-tabpanel-0`}
						aria-labelledby={`simple-tab-0`}
					>
						<ProfesionalExperience />
					</div>
					<div
						role="tabpanel"
						hidden={value !== 1}
						id={`simple-tabpanel-1`}
						aria-labelledby={`simple-tab-1`}
					>
						<EducationExperience />
					</div>
				</Box>
			</Box>
		</>
	);
};

export default TabAboutMe;
