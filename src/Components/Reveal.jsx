import React, { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

export default function ({ children, overlayStyle = {} }) {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })
	const mainControls = useAnimation()
	const slideControls = useAnimation()
	useEffect(() => {
		if (isInView) {
			mainControls.start("visible")
			slideControls.start("visible")
		}
	}, [isInView])

	return (
		<div ref={ref} className="relative overflow-hidden">
			<motion.div
				variants={{
					initial: { opacity: 0, y: 75 },
					visible: { opacity: 1, y: 0 },
				}}
				initial="initial"
				transition={{ delay: 0.5, duration: 0.5 }}
				animate={mainControls}
			>
				{children}
			</motion.div>
			<motion.div
				style={overlayStyle}
				variants={{
					initial: { left: 0 },
					visible: { left: "100%" },
				}}
				initial="initial"
				animate={slideControls}
				transition={{ duration: 0.75, ease: "easeIn" }}
				className=" absolute top-1 bottom-1 left-0 right-0 bg-gray-200 z-20"
			></motion.div>
		</div>
	)
}
