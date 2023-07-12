import React, { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

export default function ({ children, variants }) {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })
	const mainControls = useAnimation()
	useEffect(() => {
		if (isInView) {
			mainControls.start("visible")
		}
	}, [isInView])

	return (
		<div ref={ref} className="relative overflow-hidden">
			<motion.div variants={{}} initial="initial" animate={mainControls}>
				{children}
			</motion.div>
		</div>
	)
}
