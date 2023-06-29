import React from "react"
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
)

const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: true,
			text: "Chart.js Line Chart",
		},
	},
}

const labels = ["January", "February", "March", "April", "May", "June", "July"]
const fakedata = [
	135, 73, 120, 89, 157, 117, 155, 117, 118, 130, 71, 156, 79, 92, 157, 123, 77,
	100, 122, 72, 142, 129, 133, 145, 66, 79, 87, 83, 86, 143,
]
export const data = {
	labels: fakedata,
	datasets: [
		{
			label: "Dataset 1",
			data: fakedata,
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
		{
			label: "Dataset 2",
			data: fakedata,
			borderColor: "rgb(53, 162, 235)",
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
	],
}

export default function () {
	return <Line options={options} data={data} />
}
