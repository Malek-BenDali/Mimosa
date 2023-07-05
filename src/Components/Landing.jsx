import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { sensor } from "../images"

export default function () {
	const targetRef = useRef()
	const { scrollYProgress } = useScroll({
		targetRef,
		offset: ["start start", "end start"],
	})
	const { scrollYProgress: opacityScrollY } = useScroll({
		targetRef,
		offset: ["start end", "end end"],
	})
	//capteur, "flexible electronics"
	// range of sensitivity

	const backgrounY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"])
	const textY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"])
	const opacity = useTransform(opacityScrollY, [0, 0.25, 0.7], [0, 0.1, 1])

	return (
		<>
			<div className="flex top-[4%] left-[8%] absolute  items-center">
				<svg
					className="lg:w-20 lg:h-20 sm:h-10 sm:w-10 h-5 w-5 "
					viewBox="0 0 560 499"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1.30073 473.3L86.0007 137.8C87.7007 131.1 93.7007 126.4 100.701 126.4H145.801C153.601 126.4 160.201 132.4 160.901 140.2L176.001 308.4C176.201 310.1 176.001 311.9 175.601 313.5L143.701 437C142.501 441.7 139.101 445.6 134.501 447.3L21.4007 491.1C10.0007 495.5 -1.69927 485.2 1.30073 473.3Z"
						fill="#93C01F"
					/>
					<path
						d="M559.6 484.5L472.8 142.8C470.3 133.1 461.6 126.3 451.6 126.3H348.7C341 126.3 333.9 130.3 329.9 136.9L247.2 275C244.9 278.9 245.1 283.7 247.8 287.3L315.9 380.5C317.4 382.5 320.5 382.4 321.8 380.2L376.6 286.5L414.3 435C415.9 441.5 420.6 446.8 426.8 449.3L544.8 497.4C553.1 500.9 561.8 493.3 559.6 484.5Z"
						fill="#93C01F"
					/>
					<path
						d="M155.202 59.5C156.702 57.7 159.502 58.9 159.302 61.1C155.002 109.9 152.002 210.4 285.202 372.4C285.202 372.4 328.502 413.9 310.102 493.4C309.602 495.5 306.702 495.8 305.802 493.8C288.002 454 193.702 342.5 174.902 308.2C154.802 271.7 142.902 216.3 142.902 216.3C123.102 111.7 145.002 71.8 155.202 59.5Z"
						fill="#006633"
					/>
					<path
						d="M155.202 59.5C156.702 57.7 159.502 58.9 159.302 61.1C155.002 109.9 152.002 210.4 285.202 372.4C285.202 372.4 328.502 413.9 310.102 493.4C309.602 495.5 306.702 495.8 305.802 493.8C288.002 454 193.702 342.5 174.902 308.2C154.802 271.7 142.902 216.3 142.902 216.3C123.102 111.7 145.002 71.8 155.202 59.5Z"
						stroke="white"
						stroke-miterlimit="10"
					/>
					<path
						d="M195.702 10.4L200.802 1.80002C201.402 0.800016 202.902 1.20002 203.002 2.30002C205.902 37.7 187.302 93.8 287.902 244.3C296.402 256.9 303.202 270.6 308.402 284.9C317.302 309.7 327.802 350.1 320.702 383.1C320.402 384.6 318.402 384.9 317.602 383.6C304.702 360.7 265.702 322.2 224.702 251.7C203.802 215.7 188.202 159.2 188.202 159.2C165.802 82.4 180.402 33.1 195.702 10.4Z"
						fill="#006633"
					/>
					<path
						d="M195.702 10.4L200.802 1.80002C201.402 0.800016 202.902 1.20002 203.002 2.30002C205.902 37.7 187.302 93.8 287.902 244.3C296.402 256.9 303.202 270.6 308.402 284.9C317.302 309.7 327.802 350.1 320.702 383.1C320.402 384.6 318.402 384.9 317.602 383.6C304.702 360.7 265.702 322.2 224.702 251.7C203.802 215.7 188.202 159.2 188.202 159.2C165.802 82.4 180.402 33.1 195.702 10.4Z"
						stroke="white"
						stroke-miterlimit="10"
					/>
				</svg>
				<h1 className="text-linear font-semibold text-xl sm:text-3xl lg:text-6xl">
					imosense
				</h1>
			</div>
			<div
				ref={targetRef}
				className="w-full flex flex-1 sm:justify-between justify-evenly items-center flex-col sm:flex-row linear-x h-[100vh] py-[2%] px-[8%]"
			>
				<p className="flex  flex-col gap-4 text-white font-normal text-center  text-3xl md:text-5xl lg:text-6xl">
					<span>Forces ranging from heart</span>
					<span>beat to personc scale</span>
				</p>
				<img
					src={sensor}
					className="drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] w-[60vw] sm:w-[40vw]"
				/>
			</div>
		</>
	)
}
