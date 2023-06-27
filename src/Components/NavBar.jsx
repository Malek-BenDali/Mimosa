import React from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
export default function () {
	const { scrollYProgress } = useScroll()
	return (
		<>
			<motion.div
				className="progress-bar"
				style={{ scaleX: scrollYProgress }}
			/>
			<nav>
				<p className="firma-name">MimoSense</p>
				<ul className="links-container">
					<li className="hover-underline-animation">TECHNOLOGY</li>
					<li className="hover-underline-animation">DIGITIZATION</li>
					<li className="hover-underline-animation">INDUSTRIES</li>
					<li className="hover-underline-animation">COMPANY</li>
				</ul>
				<button className="buy-nav">BUY A DEVKIT</button>
			</nav>
		</>
	)
}
