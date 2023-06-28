import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

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

	const backgrounY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"])
	const textY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"])
	const opacity = useTransform(opacityScrollY, [0, 0.25, 0.7], [0, 0.1, 1])

	return (
		<>
			<motion.div
				className="w-full fixed h-6  z-40 bg-mimosa-yellow"
				style={{
					opacity,
				}}
			></motion.div>
			<div
				ref={targetRef}
				className="w-full h-[100vh] overflow-hidden relative flex items-center justify-center"
			>
				<motion.h1 style={{ y: textY }} className="font-bold z-10">
					Test
				</motion.h1>
				<motion.div
					style={{ y: backgrounY }}
					className="absolute inset-0 z-0 parallex-image parallex-image-back"
				/>
				<div className="absolute inset-0 z-20 parallex-image parallex-image-front" />
			</div>
		</>
	)
}
