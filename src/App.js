import React from "react"
import "./App.css"
import { motion } from "framer-motion"
import {
	AddedValue,
	Journey,
	Landing,
	Maintenance,
	OldMan,
	Product,
	Tennis,
} from "./Components"
//const container = {
//	hidden: { opacity: 0, x: -100 },
//	show: {
//		opacity: 1,
//		x: 0,
//		transition: {
//			delayChildren: 0.5,
//			delay: 0.5,
//			duration: 1,
//		},
//	},
//}
function App() {
	//const scrollToData = () =>
	//	window.scrollTo({
	//		top: jsonTreeRef.current.offsetTop,
	//		behavior: "smooth",
	//	})
	return (
		<div>
			<Landing />
			{/*<AddedValue />*/}
			<Journey />
			<Product />
			<OldMan />
			<Tennis />
			<Maintenance />
		</div>
	)
}

export default App
