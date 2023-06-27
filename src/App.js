import React from "react"
import "./App.css"
import NavBar from "./Components/NavBar"
import AnimatedSection from "./Components/AnimatedSection"
import { motion } from "framer-motion"
const container = {
	hidden: { opacity: 0, x: -100 },
	show: {
		opacity: 1,
		x: 0,
		transition: {
			delayChildren: 0.5,
			delay: 0.5,
			duration: 1,
		},
	},
}
function App() {
	//const scrollToData = () =>
	//	window.scrollTo({
	//		top: jsonTreeRef.current.offsetTop,
	//		behavior: "smooth",
	//	})
	return (
		<div className="global-container">
			<NavBar />
			<div className="img-backgroun">
				<motion.h1 variants={container} initial="hidden" animate="show">
					MimoSense
				</motion.h1>
				<motion.h2 variants={container} initial="hidden" animate="show">
					for minimal input and maximal output
				</motion.h2>

				<motion.p variants={container} initial="hidden" animate="show">
					We provide you with the best technology
				</motion.p>
			</div>
			{/*---------------- first section -----------------*/}
			<div className="first-container">
				<h1>
					End-to-End solution for the <br /> digitization of tactile interaction
				</h1>
				<div className="first-flex">
					<motion.svg
						fill="#000000"
						height="30px"
						width="30px"
						viewBox="0 0 242.133 242.133"
						whileHover={{
							scale: 1.2,
							transition: { duration: 0.3 },
						}}
					>
						<path
							id="XMLID_24_"
							d="M190.919,212.133h-69.853c-8.284,0-15,6.716-15,15s6.716,15,15,15h106.065c8.284,0,15-6.716,15-15V121.066
	c0-8.284-6.716-15-15-15s-15,6.716-15,15v69.854L25.607,4.394c-5.858-5.858-15.356-5.858-21.213,0
	c-5.858,5.858-5.858,15.356,0,21.213L190.919,212.133z"
						/>
					</motion.svg>
					<div className="first-para-container">
						<p>
							tacterion develops smart surface solutions to enable the next
							generation of interactive and responsive products. We create the
							tactile internet of the future by bringing the sense of touch to
							products.
						</p>
						<p>
							Our sensor technology plyon® flex is the basis of tactile
							digitization. plyon® flex combines resistive and capacitive
							sensing principles, enabling proximity, touch and force
							measurement in one layer. It is highly flexible and can be
							integrated in curved surfaces and applications that bend during
							operation. Showing unique technological advantages, the tacterion
							sensor platform is the basis for smart products.
						</p>
						<p>
							At tacterion, we don't just provide sensors, but we provide fully
							integrated end-to-end tactile sensing solutions for our customers:
						</p>
						<div>
							<p className="first-p-border">
								<div className="bold">SENSORS</div>{" "}
								<motion.div
									whileHover={{ scale: 1.1 }}
									transition={{ type: "spring", stiffness: 400, damping: 10 }}
									className="center-text"
								>
									plyon® flex sensors + readout electronics-custom made for you
									<svg
										fill="#000000"
										height="30px"
										width="30px"
										viewBox="0 0 330 330"
									>
										<path
											id="XMLID_27_"
											d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
	s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
	c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
										/>
									</svg>
								</motion.div>
							</p>
							<p className="first-p-border">
								<div className="bold">FIRMWARE</div>
								<motion.div
									whileHover={{ scale: 1.1 }}
									transition={{ type: "spring", stiffness: 400, damping: 10 }}
									className="center-text"
								>
									data intelligence on the edge
									<svg
										fill="#000000"
										height="30px"
										width="30px"
										viewBox="0 0 330 330"
									>
										<path
											id="XMLID_27_"
											d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
	s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
	c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
										/>
									</svg>
								</motion.div>
							</p>
							<p className="first-p-border">
								<div className="bold">HARDWARE</div>{" "}
								<motion.div
									whileHover={{ scale: 1.1 }}
									transition={{ type: "spring", stiffness: 400, damping: 10 }}
									className="center-text"
								>
									tailored integration into your product
									<svg
										fill="#000000"
										height="30px"
										width="30px"
										viewBox="0 0 330 330"
									>
										<path
											id="XMLID_27_"
											d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
	s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
	c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
										/>
									</svg>
								</motion.div>
							</p>
						</div>
					</div>
				</div>
			</div>
			<iframe
				className="video"
				src="https://www.youtube.com/embed/l-IiamhS9Rc?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0&start=50&enablejsapi=1&&widgetid=3"
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; loop; encrypted-media; gyroscope; picture-in-picture"
			/>
			<div style={{ height: "80vh" }}>
				<marquee className="zminus">
					this will be changed to the list of our partner
				</marquee>
			</div>
		</div>
	)
}

export default App
