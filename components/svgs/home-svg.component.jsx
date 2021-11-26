import React from "react";
import styled from "styled-components";

const Home = styled.g``;

const Orbits = styled.g`
	transition: all 0.5s;

	${Home}:hover & {
		transform: translate(-20%, -40%);
	}
`;

//Style settings
let svgWidth = "200";
let svgHeight = "200";

let moonColor = "#E8E8E8";
let moonDetailColor = "#DCDCDC";

const HomeSVG = ({ darkMode }) => {
	let moonDisplay = "none";
	let sunDisplay = "block";

	!darkMode
		? ((moonDisplay = "none"), (sunDisplay = "block"))
		: ((moonDisplay = "block"), (sunDisplay = "none"));

	return (
		<svg
			width={svgWidth}
			height={svgHeight}
			viewBox="0 0 200 200"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Home clipPath="url(#clip0_757:109)">
				<Orbits>
					<g
						id="moon"
						style={{
							display: `${moonDisplay}`,
						}}
					>
						<path
							id="moon_body"
							d="M120.401 138.221C108.736 157.62 83.0224 159.016 65.1114 147.945C65.195 147.914 65.2834 147.881 65.3763 147.845C66.1706 147.544 67.3011 147.086 68.6518 146.461C71.3518 145.211 74.9396 143.285 78.4831 140.585C85.4964 135.241 92.4033 126.804 91.7827 114.52C98.4174 111.566 101.833 107.258 103.448 102.606C105.081 97.9064 104.858 92.9074 104.37 88.717C104.248 87.6675 104.109 86.6651 103.977 85.7299C103.964 85.638 103.951 85.5467 103.938 85.4561C103.821 84.6232 103.711 83.8492 103.626 83.139C103.435 81.5334 103.387 80.3661 103.597 79.6543C103.696 79.3197 103.837 79.1419 104 79.0467C104.171 78.9474 104.449 78.8897 104.916 78.9732C105.872 79.1439 107.364 79.8566 109.625 81.328C127.451 92.9313 132.326 118.391 120.401 138.221Z"
							fill={moonColor}
							stroke="black"
						/>
						<path
							id="moon_eye"
							d="M101.916 111.231V111.231C105.082 112.96 108.812 113.48 112.421 112.695L113.028 112.563"
							stroke={moonDetailColor}
						/>
						<g id="moon_spots">
							<ellipse
								id="Ellipse 13"
								cx="80.809"
								cy="147.838"
								rx="5.83776"
								ry="5.52199"
								transform="rotate(20 80.809 147.838)"
								fill={moonDetailColor}
							/>
							<ellipse
								id="Ellipse 14"
								cx="118.637"
								cy="134.937"
								rx="1.94592"
								ry="5.94676"
								transform="rotate(20 118.637 134.937)"
								fill={moonDetailColor}
							/>
							<ellipse
								id="Ellipse 15"
								cx="106.183"
								cy="121.362"
								rx="3.50266"
								ry="2.54861"
								transform="rotate(20 106.183 121.362)"
								fill={moonDetailColor}
							/>
							<ellipse
								id="Ellipse 16"
								cx="106.464"
								cy="83.0424"
								rx="1.55674"
								ry="1.27431"
								transform="rotate(20 106.464 83.0424)"
								fill={moonDetailColor}
							/>
						</g>
					</g>
					<g
						id="sun"
						style={{ display: `${sunDisplay}` }}
					>
						<path
							id="flares"
							d="M104.124 88.2562L108.274 82.184L109.49 89.4374L109.645 90.3593L110.326 89.719L115.684 84.6807L115.313 92.0261L115.265 92.9597L116.068 92.4807L122.384 88.7121L120.442 95.8059L120.196 96.7076L121.083 96.4123L128.061 94.0896L124.64 100.6L124.205 101.428L125.135 101.33L132.449 100.562L127.708 106.185L127.106 106.899L128.035 107.004L135.343 107.826L129.505 112.298L128.763 112.867L129.647 113.168L136.608 115.542L129.945 118.655L129.098 119.051L129.897 119.535L136.185 123.35L129.008 124.958L128.096 125.162L128.772 125.807L134.093 130.885L126.738 130.912L125.804 130.915L126.325 131.691L130.43 137.793L123.242 136.239L122.328 136.041L122.671 136.911L125.368 143.753L118.682 140.689L117.832 140.3L117.98 141.223L119.143 148.485L113.272 144.056L112.526 143.493L112.472 144.426L112.046 151.769L107.265 146.181L106.657 145.47L106.403 146.37L104.41 153.449L100.941 146.964L100.5 146.14L100.059 146.964L96.5903 153.449L94.5967 146.37L94.3433 145.47L93.7355 146.181L88.9536 151.769L88.5285 144.426L88.4744 143.493L87.7282 144.056L81.8568 148.485L83.02 141.223L83.1679 140.3L82.318 140.689L75.6318 143.753L78.329 136.911L78.6718 136.041L77.7581 136.239L70.5695 137.793L74.6746 131.691L75.1963 130.915L74.2615 130.912L66.9068 130.885L72.2277 125.807L72.904 125.162L71.9918 124.958L64.8149 123.35L71.1029 119.535L71.9021 119.051L71.0552 118.655L64.3916 115.542L71.3526 113.168L72.2374 112.867L71.4953 112.298L65.6566 107.826L72.9653 107.004L73.8942 106.899L73.2917 106.185L68.5509 100.562L75.8654 101.33L76.7951 101.428L76.3602 100.6L72.9391 94.0896L79.9174 96.4123L80.8044 96.7076L80.5576 95.8059L78.616 88.7121L84.9318 92.4807L85.7346 92.9597L85.6874 92.0261L85.3162 84.6807L90.6742 89.719L91.3552 90.3593L91.5099 89.4374L92.7264 82.184L96.8761 88.2562L97.4035 89.028L97.7527 88.1609L100.5 81.3385L103.247 88.1609L103.597 89.028L104.124 88.2562Z"
							fill="#FFC46C"
							stroke="black"
						/>
						<circle
							id="ball"
							cx="100.715"
							cy="117.286"
							r="29.5"
							fill="#FCFF6C"
							stroke="black"
						/>
					</g>
				</Orbits>
				<g id="house">
					<g
						id="house_front"
						filter="url(#filter0_d_757:109)"
					>
						<path
							d="M45.5 108.003L100.995 57L155.5 108.003V200H45.5V108.003Z"
							fill="#EEEEDE"
						/>
						<path
							d="M46 199.5V108.223L100.992 57.6819L155 108.22V199.5H46Z"
							stroke="black"
						/>
					</g>
					<g id="bushes">
						<rect
							id="right_bush"
							x="107.778"
							y="174.5"
							width="54.2218"
							height="25"
							fill="#408D51"
							stroke="black"
						/>
						<rect
							id="left_bush"
							x="38.5"
							y="174.5"
							width="25.1048"
							height="25"
							fill="#408D51"
							stroke="black"
						/>
					</g>
					<g id="square_window">
						<rect
							id="glass"
							x="108"
							y="130.5"
							width="44"
							height="37"
							fill="url(#paint0_linear_757:109)"
							stroke="black"
						/>
						<rect
							id="blinds"
							x="108"
							y="130.5"
							width="44"
							height="9"
							fill="#C36839"
							stroke="black"
						/>
					</g>
					<path
						id="chimney"
						d="M129 59.5H155V103.917L129 81.7691V59.5Z"
						fill="url(#paint1_linear_757:109)"
						stroke="black"
					/>
					<path
						id="roof"
						d="M100.84 59.6338L100.497 59.3143L100.156 59.637L43.493 113.318L38.7357 108.993L100.502 50.6861L161.781 108.012L157.487 112.306L100.84 59.6338Z"
						fill="#BE2323"
						stroke="black"
					/>
					<g id="front_door">
						<rect
							id="door"
							x="67"
							y="130.5"
							width="33"
							height="69"
							fill="#C36839"
							stroke="black"
						/>
						<circle
							id="handle"
							cx="95"
							cy="166.5"
							r="2"
							fill="#F9E95A"
							stroke="black"
						/>
					</g>
					<circle
						id="circle_window"
						cx="100"
						cy="94.5"
						r="12"
						fill="url(#paint2_linear_757:109)"
						stroke="black"
					/>
				</g>
			</Home>
			<defs>
				<filter
					id="filter0_d_757:109"
					x="41.5"
					y="57"
					width="118"
					height="151"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood
						floodOpacity="0"
						result="BackgroundImageFix"
					/>
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="2" />
					<feComposite
						in2="hardAlpha"
						operator="out"
					/>
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_757:109"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_757:109"
						result="shape"
					/>
				</filter>
				<linearGradient
					id="paint0_linear_757:109"
					x1="151.5"
					y1="165"
					x2="119.5"
					y2="132"
					gradientUnits="userSpaceOnUse"
				>
					<stop
						offset="0.411213"
						stopColor="#B7F9FD"
					/>
					<stop offset="1" stopColor="#F6FFFF" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_757:109"
					x1="154"
					y1="96"
					x2="117"
					y2="69"
					gradientUnits="userSpaceOnUse"
				>
					<stop
						offset="0.540801"
						stopColor="#A4A2A2"
					/>
					<stop offset="1" stopColor="#D5D5D5" />
				</linearGradient>
				<linearGradient
					id="paint2_linear_757:109"
					x1="108.5"
					y1="102.5"
					x2="92"
					y2="87"
					gradientUnits="userSpaceOnUse"
				>
					<stop
						offset="0.395833"
						stopColor="#B7F9FD"
					/>
					<stop offset="1" stopColor="white" />
				</linearGradient>
				<clipPath id="clip0_757:109">
					<rect
						width="200"
						height="200"
						fill="white"
					/>
				</clipPath>
			</defs>
		</svg>
	);
};

export default HomeSVG;
