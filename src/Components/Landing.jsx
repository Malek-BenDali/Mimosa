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
	//capteur, "flexible electronics"
	// range of sensitivity

	const backgrounY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"])
	const textY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"])
	const opacity = useTransform(opacityScrollY, [0, 0.25, 0.7], [0, 0.1, 1])

	return (
		<>
			<div
				ref={targetRef}
				className="w-full h-[100vh] overflow-hidden relative flex items-center justify-center"
			>
				<motion.h1
					style={{ y: textY }}
					className="font-bold z-10 text-mimosa-yellow"
				>
					Mimose
				</motion.h1>
				<h2>Minimum input Maximum Output</h2>
				<motion.div
					style={{ y: backgrounY }}
					className="absolute inset-0 z-0 img-background "
				/>
			</div>
		</>
	)
}
