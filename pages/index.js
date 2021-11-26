import { useState } from "react";
import Head from "next/head";
import NavBar from "../components/navigation/navbar.component";
import HomeSVG from "../components/svgs/home-svg.component";

export default function Home() {
	const [darkMode, setDarkMode] = useState(false);
	return (
		<div>
			<Head>
				<title>SVGssss</title>
				<meta
					name="description"
					content="Created by Hunter"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<NavBar
					darkMode={darkMode}
					setDarkMode={setDarkMode}
				/>
				<div style={{ backgroundColor: "coral" }}>
					<HomeSVG darkMode={darkMode} />
				</div>
				{darkMode ? <p>true</p> : <p>false</p>}
			</main>
		</div>
	);
}
