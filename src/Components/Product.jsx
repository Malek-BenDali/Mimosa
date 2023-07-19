import React, { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import Reveal from "./Reveal"
export default function () {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })
	const mainControls = useAnimation()
	useEffect(() => {
		if (isInView) {
			mainControls.start("visible")
		}
	}, [isInView])
	return (
		<div className=" img-background-electronics flex flex-col justify-between py-[5%] w-full min-h-[70vh]">
			<h1 className="self-center w-fit text-white text-center text-4xl font-bold ">
				<Reveal overlayStyle={{ backgroundColor: "white" }}>
					Setting new standars in flexible force sensing with our core
					competency
				</Reveal>
			</h1>

			<div className="flex items-center gap-10 px-10 justify-evenly text-white">
				<motion.div
					ref={ref}
					variants={{
						initial: { opacity: 0, x: -75, y: -75 },
						visible: { opacity: 1, x: 0, y: 0 },
					}}
					initial="initial"
					transition={{ delay: 0.5, duration: 0.5 }}
					animate={mainControls}
					className="flex flex-col items-center justify-center gap-5"
				>
					<svg
						width="10rem"
						viewBox="0 0 376 377"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M219.478 93.6701C219.478 84.3401 219.548 75.0001 219.438 65.6701C219.408 62.7901 220.378 60.7101 222.448 58.6901C232.218 49.1501 241.828 39.4501 251.498 29.8201C253.158 28.1601 254.258 26.8801 253.218 23.9201C251.118 17.9101 254.028 11.7301 259.468 8.5701C264.778 5.4901 271.068 6.3401 275.528 10.7601C279.608 14.8001 280.608 21.4401 277.898 26.4301C274.878 31.9801 268.938 34.9501 262.718 33.1801C260.198 32.4601 259.128 33.2601 257.668 34.7301C248.498 43.9301 239.288 53.1101 230.058 62.2501C228.318 63.9701 227.318 65.7801 227.328 68.3701C227.418 86.3701 227.478 104.37 227.308 122.36C227.278 125.93 228.568 127.05 231.878 126.97C234.688 126.9 237.568 126.89 240.328 127.39C246.438 128.49 250.648 133.39 250.748 140.18C250.808 143.77 252.248 144.34 255.218 144.29C261.718 144.18 268.218 144.2 274.718 144.29C276.718 144.32 278.168 143.87 279.388 142.15C281.018 139.84 282.668 137.43 284.768 135.6C294.038 127.53 296.468 117.29 295.058 105.59C294.808 103.51 294.638 102.09 292.488 100.84C286.648 97.4301 284.368 91.3501 286.158 85.4901C287.838 79.9901 293.178 76.0001 298.888 75.9901C304.718 75.9701 310.078 79.8201 311.818 85.2401C313.708 91.1501 311.598 97.2601 305.818 100.7C303.338 102.18 302.568 103.85 302.998 106.33C305.428 120.26 299.858 130.84 290.858 141.26C284.338 148.8 278.268 153.65 267.998 151.92C264.108 151.26 260.018 151.77 256.018 151.75C255.188 151.75 254.238 151.49 253.538 151.79C247.638 154.28 252.268 159.31 250.998 162.98C250.318 164.93 250.778 166.79 253.878 166.77C270.878 166.65 287.878 166.67 304.878 166.74C307.108 166.74 308.058 165.46 309.168 163.93C314.548 156.52 320.068 149.22 325.388 141.77C327.288 139.12 329.318 137.54 332.818 138.02C335.438 138.37 338.138 138.04 340.808 138.09C345.568 138.18 349.558 138.25 352.928 133.09C357.128 126.65 366.968 127.06 372.238 132.66C377.758 138.52 377.058 147.6 370.708 152.51C364.378 157.41 355.738 156.17 351.678 149.19C349.808 145.98 347.588 145.92 344.508 145.48C335.808 144.26 329.798 146.97 325.398 154.88C322.028 160.95 317.138 166.15 313.178 171.91C311.668 174.1 310.068 174.87 307.438 174.85C290.268 174.73 273.108 174.9 255.938 174.69C251.738 174.64 250.478 175.94 250.828 180.06C251.218 184.69 251.018 189.39 250.868 194.05C250.788 196.5 251.298 197.63 254.108 197.59C266.108 197.45 278.108 197.48 290.108 197.59C292.458 197.61 293.518 196.6 294.678 194.65C298.038 188.99 303.808 186.76 309.548 188.49C315.808 190.37 319.318 194.96 319.388 201.34C319.448 207.22 315.618 212.59 310.178 214.25C304.088 216.11 298.008 213.94 294.688 208.15C293.488 206.06 292.308 205.43 290.088 205.45C278.418 205.54 266.758 205.59 255.088 205.44C251.888 205.4 250.588 206.25 250.838 209.63C251.118 213.44 251.248 217.33 250.838 221.11C250.378 225.34 252.208 226.08 255.898 226.05C273.728 225.92 291.568 226.1 309.398 225.91C313.198 225.87 315.948 226.9 318.598 229.64C327.868 239.21 337.388 248.55 346.758 258.04C348.488 259.79 349.828 260.74 352.688 259.76C358.608 257.73 364.538 260.38 367.718 265.63C370.958 270.99 370.298 277.23 366.028 281.74C362.148 285.83 355.878 287.1 350.868 284.8C345.298 282.25 341.708 276.06 343.208 270.06C343.998 266.92 343.218 265.26 341.138 263.23C332.198 254.5 323.358 245.66 314.598 236.76C312.468 234.59 310.268 233.6 307.158 233.63C289.998 233.77 272.828 233.78 255.658 233.63C252.108 233.6 250.728 234.31 250.808 238.28C250.988 247.23 245.478 252.51 236.598 252.67C224.958 252.88 225.708 252.94 224.718 264.37C223.818 274.75 227.818 280.92 235.428 287.77C244.448 295.88 254.008 295.9 264.458 295.68C266.908 295.63 267.298 293.83 268.308 292.39C271.838 287.35 277.468 285.21 283.158 286.68C288.108 287.96 292.258 292.88 292.928 298.23C293.608 303.68 290.628 308.94 285.308 311.69C279.638 314.63 272.118 312.78 268.668 307.1C267.088 304.5 265.528 303.02 262.448 303.58C248.248 306.15 237.888 299.74 227.188 291C219.118 284.41 215.518 277.97 216.878 268.02C217.398 264.26 216.778 260.35 217.018 256.54C217.218 253.37 215.918 252.64 212.968 252.58C201.958 252.35 201.948 252.25 201.958 263.15C201.958 276.48 202.078 289.82 201.908 303.15C201.868 306.32 202.738 308.37 205.368 310.21C213.008 315.55 220.408 321.23 228.018 326.62C230.128 328.11 231.268 329.64 231.038 332.33C230.798 335.14 231.028 337.99 230.988 340.82C230.918 345.84 230.448 350.18 236.138 353.82C242.548 357.92 241.768 367.98 236.038 373.09C230.308 378.19 221.738 377.64 216.838 371.87C211.788 365.93 212.648 356.78 219.188 352.59C222.308 350.59 222.708 348.38 223.188 345.03C224.518 335.78 221.148 329.78 213.098 325.28C207.478 322.14 202.668 317.58 197.308 313.93C194.818 312.23 193.938 310.3 193.958 307.33C194.078 290.66 193.908 274 194.098 257.33C194.138 253.67 193.298 252.25 189.428 252.56C184.958 252.92 180.418 252.92 175.938 252.58C172.268 252.3 171.438 253.81 171.488 257.1C171.638 268.26 171.618 279.43 171.578 290.59C171.578 292.77 172.128 294.01 174.268 295.22C179.938 298.44 182.248 304.86 180.428 310.67C178.648 316.35 172.978 320.35 167.118 320.08C160.928 319.79 155.718 315.44 154.238 309.32C153.088 304.57 155.478 298.55 160.338 295.61C162.838 294.1 163.738 292.51 163.708 289.69C163.588 278.86 163.568 268.02 163.738 257.19C163.788 253.81 162.918 252.32 159.268 252.57C155.118 252.86 150.928 252.82 146.778 252.58C143.598 252.39 142.918 253.64 142.938 256.61C143.068 274.94 142.958 293.28 143.058 311.61C143.068 314.31 142.288 316.2 140.328 318.12C130.458 327.81 120.808 337.72 110.968 347.44C109.118 349.27 108.338 350.78 109.238 353.48C111.078 359.05 108.638 364.96 103.688 368.16C98.5981 371.45 92.4081 371.05 87.9581 367.15C83.1281 362.92 81.7581 357.04 84.2681 351.34C86.6581 345.93 92.6881 342.26 98.5181 343.71C102.088 344.6 103.898 343.41 106.128 341.14C114.768 332.35 123.528 323.69 132.328 315.06C134.208 313.22 135.208 311.37 135.188 308.57C135.048 291.07 135.128 273.57 135.088 256.07C135.088 254.38 135.758 252.5 133.308 251.45C126.908 248.72 125.058 243.32 125.068 236.83C125.068 226.53 124.888 227.58 114.638 226.27C101.878 224.64 94.7681 230.37 87.0381 239.62C79.6981 248.41 81.4481 257.43 81.0281 266.77C80.9081 269.39 83.6081 269.54 85.0581 270.69C90.9781 275.4 92.1581 283.19 87.7081 289.36C83.5881 295.06 75.2681 296.46 69.4481 292.44C63.3181 288.19 61.7781 280.16 65.9181 273.92C66.3781 273.23 66.7981 272.23 67.4581 272.01C74.3381 269.65 73.4681 263.86 72.9181 258.75C71.9181 249.41 74.2481 241.7 81.0881 234.97C86.0381 230.1 89.1081 222.25 94.8281 219.52C100.558 216.79 108.528 218.73 115.518 218.7C125.068 218.66 124.878 218.68 125.158 208.95C125.268 204.95 124.358 203.5 120.058 203.56C104.398 203.79 88.7281 203.67 73.0581 203.55C70.3081 203.53 68.5081 204.26 66.8581 206.63C61.5181 214.27 55.8181 221.66 50.4181 229.26C48.7181 231.65 46.9281 232.95 43.8581 232.65C41.0481 232.37 38.1981 232.65 35.3681 232.57C30.4281 232.41 26.3581 232.41 22.9281 237.76C18.8081 244.17 8.82809 243.61 3.64809 237.93C-1.76191 232 -0.971909 222.78 5.35809 218.07C11.5381 213.47 20.6981 214.92 24.5181 221.64C26.0881 224.41 27.9481 224.43 30.4581 224.85C40.0781 226.47 46.8081 223.27 51.5881 214.52C54.6681 208.87 59.2481 204.05 62.9481 198.71C64.4581 196.53 66.1281 195.84 68.7481 195.85C86.0781 195.94 103.418 195.75 120.748 195.87C123.898 195.89 125.318 195.36 125.138 191.87C124.878 186.88 124.948 181.87 125.118 176.88C125.208 174.31 124.448 173.38 121.768 173.41C109.768 173.53 97.7681 173.51 85.7681 173.41C83.4781 173.39 82.3781 174.25 81.1981 176.23C77.8581 181.81 71.5281 184 65.6481 182.08C60.0881 180.26 56.5281 175.15 56.6081 169.09C56.6781 163.05 60.4981 158.06 66.1881 156.55C72.5381 154.87 78.1781 157.01 81.4581 162.92C82.6581 165.08 83.9581 165.6 86.1481 165.58C97.8181 165.51 109.478 165.46 121.148 165.6C124.168 165.64 125.318 164.77 125.138 161.64C124.898 157.49 124.848 153.29 125.168 149.15C125.438 145.62 124.258 144.6 120.748 144.63C102.588 144.79 84.4181 144.61 66.2481 144.82C62.5781 144.86 60.0381 143.74 57.5381 141.17C48.3781 131.73 39.0581 122.44 29.7481 113.14C28.0381 111.43 26.6481 109.85 23.3781 111.02C17.3481 113.18 11.2281 110.29 8.03809 104.79C5.07809 99.6801 5.80809 93.4601 9.86809 89.0701C13.8581 84.7701 20.0881 83.6101 25.4081 86.1901C31.0881 88.9401 34.3381 94.7901 32.7781 101.05C32.0881 103.83 32.7281 105.25 34.5181 107.02C43.6481 116.03 52.7181 125.11 61.7181 134.25C63.4981 136.05 65.3481 136.77 67.8781 136.75C85.7081 136.65 103.548 136.65 121.378 136.72C124.068 136.73 125.978 136.43 127.178 133.46C128.488 130.24 131.438 128.27 134.828 127.59C137.438 127.07 137.888 125.69 137.858 123.39C137.768 116.22 137.758 109.06 137.908 101.89C137.958 99.6501 137.268 98.1501 135.528 96.8101C131.838 93.9701 127.758 91.4101 124.738 87.9501C116.998 79.0601 106.848 81.9401 97.3281 81.5301C95.3781 81.4501 95.0581 83.2101 94.2381 84.3901C90.4681 89.8501 84.7581 92.1001 79.1181 90.3401C73.6381 88.6301 69.5481 83.2201 69.5081 77.6301C69.4681 71.8501 73.3781 66.3501 78.7181 64.6501C84.6481 62.7601 90.8381 64.9101 94.2181 70.6301C95.6681 73.0801 97.3281 73.9401 99.8381 73.5001C113.768 71.0401 124.318 76.6701 134.748 85.6301C142.328 92.1401 147.138 98.1501 145.548 108.45C144.818 113.17 145.628 118.11 145.358 122.92C145.178 126.09 146.388 126.86 149.328 126.97C160.428 127.38 160.398 127.47 160.398 116.6C160.398 102.43 160.358 88.2701 160.508 74.1001C160.538 70.8201 159.688 68.6101 156.808 66.6301C149.398 61.5501 142.328 55.9701 134.998 50.7701C132.588 49.0601 131.358 47.2501 131.668 44.1901C131.968 41.2201 131.708 38.2001 131.758 35.2001C131.828 30.6201 132.288 26.5501 126.788 23.6401C121.798 20.9901 120.948 13.8101 123.268 8.4301C125.448 3.3701 130.878 0.170102 136.598 0.600102C142.438 1.0301 147.358 5.4601 148.738 11.5001C149.878 16.5201 147.468 22.5401 142.558 25.1001C139.648 26.6201 139.488 28.6201 139.058 31.4201C137.628 40.7901 140.878 47.1301 149.308 51.6701C154.678 54.5601 159.168 59.0401 164.298 62.4501C167.398 64.5201 168.608 66.8101 168.558 70.6401C168.318 87.4701 168.598 104.3 168.358 121.13C168.288 125.75 169.878 127.25 174.318 126.95C178.798 126.65 183.318 126.74 187.808 126.95C190.238 127.06 191.038 126.3 191.028 123.89C190.958 111.22 190.918 98.5601 191.088 85.8901C191.128 83.2101 189.408 82.6701 187.758 81.5901C181.008 77.1601 179.518 68.1301 184.448 61.9701C189.078 56.1901 198.538 55.5301 204.098 60.6001C210.468 66.4101 209.528 77.2001 201.988 81.6001C199.598 83.0001 198.838 84.3801 198.858 87.0201C198.988 98.8501 198.998 110.69 198.828 122.52C198.788 125.68 199.538 127.05 202.958 126.85C207.278 126.6 211.628 126.66 215.948 126.92C218.968 127.1 219.568 125.84 219.538 123.13C219.408 113.3 219.488 103.47 219.488 93.6301H219.508L219.478 93.6701ZM187.648 244.62V244.6C203.638 244.6 219.628 244.62 235.618 244.59C241.228 244.58 242.938 243 242.938 237.65C242.978 205.84 242.978 174.02 242.938 142.21C242.938 136.63 241.048 134.76 235.398 134.76C203.918 134.72 172.438 134.72 140.958 134.76C134.528 134.76 132.958 136.4 132.948 142.68C132.928 173.99 132.918 205.31 132.918 236.62C132.918 243.39 134.178 244.62 141.168 244.63C156.658 244.64 172.148 244.63 187.638 244.63L187.648 244.62ZM167.298 301.17C163.888 301.61 161.878 303.56 162.038 307.08C162.178 310.43 164.558 312.3 167.608 312.24C170.658 312.17 172.888 310.18 172.948 306.84C173.018 303.21 170.838 301.5 167.288 301.17H167.298ZM362.158 136.35C359.238 136.83 357.138 138.48 357.078 141.79C357.018 145.36 359.208 147.46 362.608 147.44C365.758 147.42 367.848 145.42 367.928 142.08C368.018 138.44 365.838 136.76 362.158 136.35ZM7.84809 229.06C8.30809 232.28 10.0581 234.47 13.3081 234.41C16.7281 234.35 18.9381 232.17 18.8481 228.67C18.7681 225.13 16.6081 223.22 12.9781 223.45C9.54809 223.67 8.17809 225.9 7.84809 229.06ZM356.328 277.9C359.688 277.63 361.748 275.76 361.798 272.56C361.858 269.07 359.598 266.94 356.158 266.99C352.698 267.05 350.708 269.12 350.868 272.79C351.018 276.29 353.178 277.67 356.328 277.89V277.9ZM285.078 299.47C284.828 296.44 283.218 294.35 279.858 294.27C276.398 294.19 274.148 295.97 273.978 299.56C273.798 303.35 276.438 305.04 279.628 305.04C282.698 305.04 284.778 303.05 285.078 299.46V299.47ZM136.058 8.4401C132.408 8.5501 130.218 10.2701 129.968 13.8001C129.718 17.2201 131.848 19.2001 134.998 19.4301C138.428 19.6801 140.778 17.8201 140.978 14.2001C141.168 10.8101 139.018 9.1601 136.058 8.4401ZM25.0681 98.3401C24.9781 94.8901 23.0181 92.8901 19.8981 92.7501C16.4881 92.6001 14.1281 94.7701 14.0981 98.1901C14.0681 101.6 16.2281 103.7 19.8081 103.61C23.1381 103.52 24.9081 101.65 25.0581 98.3501L25.0681 98.3401ZM232.348 363.48C232.288 359.74 230.388 357.7 226.918 357.62C223.568 357.54 221.728 359.72 221.588 362.89C221.428 366.4 223.388 368.48 226.958 368.54C230.348 368.59 231.928 366.48 232.338 363.49L232.348 363.48ZM305.578 206.72C309.378 206.75 311.538 204.78 311.638 201.4C311.728 198.26 309.618 196.02 306.408 195.9C303.008 195.78 300.728 197.66 300.678 201.29C300.638 204.59 302.378 206.49 305.578 206.72ZM96.3181 351.41C93.1981 351.79 91.0781 353.34 90.9281 356.69C90.7681 360.38 93.1481 362.32 96.4181 362.36C99.4681 362.4 101.778 360.5 101.928 357.15C102.088 353.46 99.6981 351.96 96.3281 351.41H96.3181ZM265.888 25.6301C269.818 25.4601 271.468 23.1601 271.478 20.0701C271.488 16.8601 269.388 14.6301 266.108 14.7201C262.668 14.8101 260.608 16.9601 260.718 20.5801C260.828 24.0801 263.008 25.5001 265.878 25.6301H265.888ZM194.618 75.9401C198.188 75.9401 200.148 73.8501 200.378 70.5001C200.598 67.1601 198.278 65.1001 195.258 64.8401C191.758 64.5401 189.628 66.9701 189.448 70.3101C189.268 73.5301 191.258 75.4901 194.628 75.9401H194.618ZM299.278 94.6701C302.788 94.4901 304.538 92.4201 304.478 89.1801C304.418 85.8901 302.208 83.7801 299.038 83.8401C295.618 83.9001 293.558 86.0701 293.678 89.7201C293.798 93.3001 296.058 94.5701 299.278 94.6701ZM75.3581 169.38C74.9781 165.85 72.9381 163.6 69.5781 163.73C66.5081 163.85 64.2481 166.21 64.2481 169.34C64.2481 172.76 66.4381 174.86 70.0481 174.74C73.4181 174.63 75.0881 172.63 75.3581 169.38ZM82.2381 281.75C82.2381 278.06 80.2681 275.97 77.1681 275.86C73.8181 275.74 71.4581 277.83 71.4781 281.4C71.4981 284.69 73.3981 286.6 76.8181 286.62C80.2381 286.64 81.9581 284.8 82.2381 281.75ZM88.3081 77.2101C88.0881 74.2801 86.4181 72.0901 83.1281 72.0201C79.6481 71.9601 77.4681 74.0401 77.5081 77.6001C77.5381 80.9201 79.5281 82.7901 82.9081 82.7701C86.2681 82.7501 88.0881 80.9401 88.3181 77.2101H88.3081Z"
							fill="white"
						/>
						<path
							d="M188.468 149.7C200.118 149.7 211.778 149.82 223.428 149.63C226.748 149.58 228.028 150.19 227.998 153.91C227.818 177.55 227.828 201.19 227.968 224.83C227.988 228.35 227.368 229.71 223.398 229.67C199.758 229.47 176.118 229.47 152.478 229.67C148.518 229.7 147.868 228.33 147.888 224.82C148.018 201.18 148.038 177.54 147.868 153.9C147.838 150.17 149.208 149.56 152.508 149.61C164.488 149.79 176.478 149.68 188.468 149.69V149.7ZM219.978 189.62C219.978 180.46 219.848 171.3 220.048 162.15C220.118 158.89 219.548 157.45 215.798 157.49C197.158 157.67 178.508 157.63 159.858 157.51C156.808 157.49 155.848 158.39 155.868 161.46C155.988 180.27 155.968 199.09 155.898 217.9C155.888 220.51 156.378 221.8 159.408 221.79C178.388 221.69 197.368 221.72 216.348 221.83C219.158 221.85 220.078 220.94 220.028 218.1C219.878 208.61 219.968 199.12 219.978 189.63V189.62Z"
							fill="white"
						/>
					</svg>
					<h2 className="font-medium text-3xl text-center">
						Sensordesign <br />
						and readout circuit
					</h2>
				</motion.div>
				<motion.div
					variants={{
						initial: { opacity: 0, y: -75 },
						visible: { opacity: 1, y: 0 },
					}}
					initial="initial"
					transition={{ delay: 0.75, duration: 0.5 }}
					animate={mainControls}
					className="flex flex-col items-center justify-center gap-5"
				>
					<svg
						width="10rem"
						viewBox="0 0 323 323"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M136.117 195.751C133.437 200.161 132.867 204.851 131.097 209.081C128.217 215.961 122.887 216.911 118.297 211.031C111.767 202.661 105.467 194.101 98.3668 184.701C95.9568 194.981 93.7469 204.231 91.6269 213.491C89.4869 222.861 87.4468 232.26 85.3568 241.65C84.4968 245.49 82.4369 248.011 78.1669 247.821C74.1069 247.641 72.3668 244.981 71.7368 241.381C68.7268 224.211 65.7669 207.031 62.7769 189.861C60.7269 178.101 58.6669 166.341 55.6469 154.381C52.6569 162.711 49.5968 171.011 46.7068 179.361C42.4368 191.691 42.4868 191.71 29.6168 191.73C28.1168 191.73 26.6168 191.73 25.1168 191.73C15.8468 191.73 15.8068 191.731 15.8068 201.241C15.7868 234.901 15.8768 268.571 15.6668 302.231C15.6368 306.741 16.9669 307.761 21.2969 307.751C116.617 307.641 211.947 307.681 307.267 307.701C310.267 307.701 313.307 307.481 316.257 307.901C320.447 308.491 322.667 311.241 322.647 315.491C322.627 319.811 320.337 322.291 316.037 322.781C314.717 322.931 313.377 322.871 312.037 322.871C211.877 322.871 111.727 322.871 11.5669 322.841C9.26685 322.841 6.85686 323.341 4.69686 322.151C1.13686 320.191 0.626861 316.951 0.636861 313.201C0.706861 239.711 0.686849 166.221 0.686849 92.7205C0.686849 65.2205 0.656829 37.7305 0.666829 10.2305C0.666829 3.6405 3.00684 0.750504 8.17684 0.780504C13.2268 0.810504 15.8369 4.0205 15.8369 10.2705C15.8269 64.2605 15.8568 118.261 15.6768 172.251C15.6668 176.731 16.6869 178.311 21.3969 178.211C32.9569 177.981 32.9168 178.191 36.7268 167.351C41.6868 153.251 46.8269 139.221 51.6769 125.081C52.9169 121.461 55.0168 119.101 58.7268 119.221C62.8268 119.351 64.7469 122.4 65.4069 126.15C68.1769 141.97 70.8768 157.801 73.6168 173.631C75.3168 183.411 77.0468 193.181 78.8568 203.461C81.3968 201.291 81.2669 198.68 81.7869 196.4C83.9369 187.03 86.0368 177.65 88.0768 168.26C88.7868 164.99 90.5868 162.731 93.8668 162.171C96.9468 161.651 99.1568 163.271 100.997 165.741C107.707 174.791 114.537 183.761 121.917 193.561C124.657 185.561 127.217 178.461 129.497 171.281C130.577 167.871 132.277 165.701 136.097 165.701C139.827 165.701 141.737 167.62 142.817 171.12C146.627 183.49 150.637 195.801 154.577 208.131C155.167 209.981 155.777 211.811 157.497 213.671C159.477 205.791 161.527 197.921 163.437 190.021C168.567 168.751 173.657 147.481 178.737 126.201C179.627 122.481 181.517 119.451 185.537 119.321C189.537 119.181 191.487 122.061 192.867 125.661C198.127 139.391 203.607 153.041 209.357 167.631C212.547 161.921 215.297 157.071 217.977 152.171C219.747 148.941 221.817 146.24 226.077 146.87C230.327 147.5 231.507 150.841 232.407 154.301C235.437 165.931 238.407 177.581 242.437 189.301C243.887 183.561 245.347 177.83 246.777 172.09C250.617 156.651 254.517 141.23 258.227 125.76C259.167 121.85 261.307 119.17 265.217 119.23C268.847 119.29 270.887 121.831 271.877 125.551C275.997 141.081 280.457 156.531 284.577 172.061C285.517 175.621 286.877 177.171 290.887 176.971C298.367 176.581 305.877 176.831 313.377 176.911C318.927 176.961 321.997 179.531 321.897 183.831C321.797 187.871 318.767 190.301 313.497 190.321C303.167 190.361 292.827 190.161 282.497 190.321C277.657 190.391 275.127 188.181 273.937 183.711C271.627 175.061 269.177 166.441 266.797 157.801C266.537 156.871 266.597 155.8 264.917 154.93C262.127 166.14 259.357 177.121 256.657 188.111C254.197 198.111 251.837 208.131 249.387 218.131C248.417 222.091 246.617 225.731 241.967 225.531C237.687 225.351 236.127 221.901 235.137 218.061C231.247 203.011 227.207 188.001 223.027 172.221C219.077 176.591 217.287 181.401 214.757 185.711C213.057 188.621 211.017 190.391 207.677 190.241C204.387 190.091 202.797 187.801 201.697 184.991C197.807 175.091 193.897 165.201 189.977 155.321C189.377 153.821 188.707 152.341 187.557 149.661C184.477 157.591 183.317 164.84 181.597 171.9C176.067 194.48 170.747 217.111 165.337 239.721C165.187 240.361 164.857 240.971 164.717 241.611C163.937 245.211 162.157 247.681 158.097 247.851C153.937 248.021 152.177 245.37 151.107 241.98C147.947 232 144.907 221.991 141.687 212.031C139.967 206.731 138.827 201.211 136.097 195.741L136.117 195.751Z"
							fill="white"
						/>
					</svg>

					<h2 className="font-medium text-3xl">Signal processing</h2>
				</motion.div>
				<motion.div
					variants={{
						initial: { opacity: 0, x: 75, y: -75 },
						visible: { opacity: 1, x: 0, y: 0 },
					}}
					initial="initial"
					transition={{ delay: 1, duration: 0.5 }}
					animate={mainControls}
					className="flex flex-col items-center justify-center gap-5"
				>
					<svg
						width="10rem"
						viewBox="0 0 385 340"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M156.94 227.69C202.27 227.69 247.6 227.65 292.93 227.76C296.61 227.76 298.18 227.2 298.12 222.94C297.9 205.11 298.01 187.28 298.21 169.45C298.25 166.06 296.89 165.28 293.87 165.03C281.22 163.99 275.21 157.32 275.16 144.62C275.16 143.45 275.24 142.28 275.15 141.12C274.84 137.18 272.63 135.83 269.07 137.51C267.27 138.36 265.62 139.53 263.85 140.46C254.62 145.3 244.8 142.93 239.44 134.29C235.23 127.5 231.21 120.59 227.44 113.56C222.49 104.32 225.44 94.6301 234.57 89.0201C244.3 83.0501 244.35 81.8101 234.61 76.3001C227.77 72.4201 224.57 66.5201 225.39 58.9401C225.83 54.8501 224.54 54.2201 221.02 54.2401C204.02 54.3601 187.02 54.3201 170.02 54.3201C168.69 54.3201 167.35 54.3601 166.02 54.2301C161.56 53.7701 158.3 50.3401 158.52 46.4401C158.74 42.5801 161.85 39.6701 166.26 39.4601C169.25 39.3201 172.26 39.4601 175.26 39.4601C192.43 39.4601 209.6 39.1601 226.75 39.6301C232.82 39.8001 236.01 37.7501 238.66 32.4901C243.54 22.8001 254.14 19.8601 263.78 24.9001C265.25 25.6701 266.61 26.6601 268.07 27.4501C272.58 29.8901 274.96 28.5201 275.16 23.3701C275.23 21.7101 275.13 20.0401 275.17 18.3701C275.42 8.03014 282.28 0.680138 292.61 0.260138C300.6 -0.0598618 308.62 -0.0298618 316.6 0.260138C327.34 0.660138 334.28 8.23014 334.37 19.1001C334.37 19.6001 334.37 20.1001 334.37 20.6001C334.41 29.6701 335.91 30.5201 343.77 25.9501C355.19 19.3201 364.88 21.9701 371.52 33.5401C374.84 39.3101 378.26 45.0301 381.5 50.8401C387.02 60.7401 384.53 70.3201 375.02 76.2401C364.91 82.5301 364.91 82.9401 375.1 89.1801C384.37 94.8601 386.97 104.6 381.64 114.19C378.08 120.59 374.4 126.92 370.68 133.23C364.95 142.93 354.76 145.64 345 140.12C335.34 134.66 334.4 135.22 334.34 146.44C334.29 156.96 327.43 164.53 316.87 164.96C313.24 165.11 312.95 166.51 312.96 169.45C313.04 198.28 312.97 227.11 313.03 255.94C313.06 271.99 304.53 280.71 288.49 280.72C259.99 280.72 231.49 280.76 202.99 280.6C199.66 280.58 198.99 281.67 199.36 284.61C200.51 293.84 201.33 303.11 202.67 312.31C203.76 319.76 208.78 324.02 216.31 324.49C219.47 324.69 222.64 324.54 225.8 324.7C230.18 324.91 232.63 327.61 232.88 331.68C233.14 335.87 230.56 338.46 226.47 339.36C225.35 339.61 224.15 339.6 222.99 339.6C181.32 339.61 139.66 339.62 97.9897 339.6C96.6597 339.6 95.2898 339.63 94.0198 339.32C90.0998 338.36 88.0897 335.78 88.2497 331.73C88.4097 327.66 90.5998 325.15 94.6498 324.75C97.7898 324.44 100.98 324.74 104.14 324.56C112.44 324.1 117.61 318.96 118.47 310.78C119.37 302.18 120.26 293.58 121.59 285.04C122.19 281.16 120.8 280.65 117.46 280.66C86.4598 280.76 55.4598 280.51 24.4598 280.83C9.14975 280.99 0.119746 270.05 0.199746 256.67C0.589746 192.17 0.509723 127.67 0.269723 63.1801C0.219723 50.3301 8.82973 38.8701 24.1797 39.2401C47.8297 39.8101 71.5097 39.3901 95.1697 39.4001C96.8297 39.4001 98.5197 39.3801 100.14 39.6801C103.93 40.3701 106.08 43.0301 106.17 46.6001C106.26 50.1801 104.21 52.9801 100.54 53.9401C98.7997 54.3901 96.9098 54.3401 95.0798 54.3401C71.5798 54.3701 48.0798 54.3601 24.5798 54.3601C17.2298 54.3601 15.3697 56.1601 15.3697 63.4401C15.3597 116.61 15.4197 169.77 15.2597 222.94C15.2497 227.15 16.6897 227.73 20.3697 227.73C65.8697 227.62 111.37 227.66 156.87 227.66V227.72L156.94 227.69ZM304.86 150.17C304.86 150.17 304.86 150.14 304.86 150.13C306.19 150.13 307.53 150.13 308.86 150.13C321.47 150.13 319.25 150.47 319.48 139.78C319.7 129.77 327.76 122.05 337.79 121.74C343.35 121.57 347.66 124.37 352.11 126.89C354.94 128.49 356.73 127.9 358.23 125.19C360.64 120.83 363.15 116.52 365.6 112.17C368.693 106.663 367.536 102.257 362.13 98.9501C349.8 91.4001 349.66 74.3101 361.86 66.6501C363.27 65.7701 364.64 64.7901 366.13 64.0701C369.3 62.5401 370.25 60.7201 368.1 57.4101C365.21 52.9501 362.79 48.1801 360.12 43.5801C357.333 38.7801 353.433 37.7901 348.42 40.6101C337.98 46.4801 326.6 43.2801 321.19 33.0701C319.2 29.3201 319.19 25.3301 319.52 21.3801C319.94 16.4101 317.79 14.8001 313.12 15.0701C308.8 15.3201 304.46 15.1801 300.13 15.1601C288.7 15.0901 290.37 15.2701 290.14 24.7101C289.77 39.8201 274.94 48.1201 261.67 40.8501C260.21 40.0501 258.7 39.3301 257.28 38.4801C254.76 36.9701 252.85 37.5901 251.44 40.0501C247.97 46.1101 244.54 52.1901 241.06 58.2501C239.56 60.8701 240.38 62.6201 242.92 63.9101C244.4 64.6601 245.82 65.5301 247.26 66.3701C257.38 72.3401 259.78 85.8101 252.34 94.8501C249.94 97.7601 246.67 99.4701 243.43 101.16C240.25 102.82 239.49 104.76 241.47 107.94C244.02 112.03 246.23 116.33 248.68 120.49C254.12 129.74 252.78 129.37 261.89 124.35C272.32 118.59 284.46 122.9 288.9 133.64C290.48 137.45 290.23 141.49 290.15 145.46C290.07 148.89 291.5 150.33 294.88 150.21C298.21 150.1 301.54 150.19 304.87 150.19L304.86 150.17ZM156.99 242.58V242.65C114.19 242.65 71.3898 242.62 28.5898 242.7C24.3298 242.7 18.4997 240.73 16.2297 243.47C14.0697 246.07 15.4697 251.7 15.4397 255.99C15.3797 264.11 17.0997 265.75 25.4097 265.75C109.01 265.75 192.61 265.76 276.21 265.77C280.87 265.77 285.54 265.85 290.2 265.75C295.63 265.63 297.79 263.53 298 258.21C298.14 254.72 297.77 251.18 298.17 247.73C298.69 243.36 296.84 242.5 292.87 242.51C247.57 242.62 202.28 242.58 156.98 242.58H156.99ZM160.42 324.58C169.25 324.58 178.08 324.64 186.91 324.52C188.35 324.5 191.32 325.44 190.12 321.99C186.01 310.21 186.08 297.79 184.68 285.62C184.18 281.24 182.7 280.56 178.93 280.63C168.6 280.83 158.27 280.71 147.94 280.7C141.206 280.693 137.28 283.95 136.16 290.47C135.83 292.43 135.71 294.43 135.31 296.37C133.66 304.31 134.76 312.71 131.52 320.35C130.09 323.72 130.86 324.69 134.43 324.62C143.09 324.46 151.76 324.57 160.42 324.57V324.58Z"
							fill="white"
						/>
						<path
							d="M112.9 165.9C92.08 165.9 71.26 165.92 50.43 165.89C44.49 165.89 41.24 163.24 41.25 158.59C41.27 153.94 44.71 150.95 50.44 150.94C91.92 150.91 133.4 150.94 174.87 150.92C178.89 150.92 182.08 152.22 183.85 155.97C185.23 158.9 184.21 161.45 182.23 163.76C180.37 165.93 177.89 165.92 175.36 165.92C154.54 165.91 133.72 165.92 112.89 165.9H112.9Z"
							fill="white"
						/>
						<path
							d="M94.4695 204.1C79.8195 204.1 65.1796 204.12 50.5296 204.09C44.4296 204.08 41.3495 201.59 41.2595 196.8C41.1695 191.94 44.5995 189.03 50.7695 189.02C79.8995 188.99 109.02 188.98 138.15 189.05C144.99 189.06 149.03 193.38 147.43 198.78C146.19 202.96 142.96 204.17 138.91 204.16C124.099 204.11 109.29 204.14 94.4695 204.14V204.12V204.1Z"
							fill="white"
						/>
						<path
							d="M212.669 204.09C202.509 204.09 192.359 204.12 182.199 204.08C176.409 204.06 173.459 201.65 173.269 196.95C173.079 192.26 176.459 189.05 182.129 189.03C202.439 188.96 222.749 188.98 243.069 189.08C248.669 189.11 252.389 192.5 252.219 196.88C252.039 201.33 248.459 204.06 242.649 204.08C232.659 204.11 222.669 204.08 212.679 204.09H212.669Z"
							fill="white"
						/>
						<path
							d="M182.871 102.52C182.671 104.56 181.901 106.51 180.331 108.15C173.661 115.12 167.071 122.16 160.351 129.07C156.751 132.77 152.471 133.13 149.331 130.27C145.711 126.98 145.641 123.19 149.501 118.91C153.841 114.1 158.341 109.42 162.911 104.82C164.721 102.99 164.761 101.72 162.901 99.8803C158.531 95.5503 154.281 91.1003 150.111 86.5803C145.691 81.8003 145.491 77.7503 149.281 74.4303C152.711 71.4203 157.081 72.1103 161.061 76.3003C167.361 82.9303 173.611 89.6103 179.981 96.1703C181.711 97.9503 182.601 99.9603 182.881 102.51L182.871 102.52Z"
							fill="white"
						/>
						<path
							d="M69.7002 72.6402C73.0502 72.5102 75.2501 74.1702 76.6201 76.8502C78.1401 79.8302 77.6101 82.6802 75.3201 85.1302C70.7801 90.0002 66.3101 94.9402 61.6001 99.6602C59.5201 101.75 59.2501 103.06 61.5501 105.27C66.1101 109.65 70.3901 114.32 74.6601 118.99C78.1201 122.78 78.2402 127.11 75.2102 130.06C71.9602 133.22 67.5902 132.94 63.7802 129.05C57.2602 122.39 50.7901 115.67 44.4401 108.84C39.9001 103.97 39.9502 100.75 44.5102 95.8602C50.7502 89.1602 57.0901 82.5502 63.4201 75.9302C65.1601 74.1102 66.9902 72.3602 69.7002 72.6302V72.6402Z"
							fill="white"
						/>
						<path
							d="M99.9384 132.17C92.6184 132.33 89.3984 125.88 92.9484 119.91C98.8984 109.93 105.108 100.11 111.188 90.2205C113.708 86.1205 116.228 82.0205 118.698 77.9005C121.828 72.6705 126.078 71.1105 130.218 73.7205C134.188 76.2305 134.708 80.4705 131.668 85.4305C123.258 99.1605 114.858 112.89 106.448 126.62C104.668 129.53 102.728 132.21 99.9384 132.18V132.17Z"
							fill="white"
						/>
						<path
							d="M139.931 47.0199C139.821 51.1299 136.251 54.3299 132.001 54.1199C127.971 53.9199 124.961 50.6199 125.111 46.5699C125.261 42.4899 128.471 39.3199 132.421 39.3399C136.471 39.3699 140.031 43.0099 139.931 47.0199Z"
							fill="white"
						/>
						<path
							d="M217.911 158.51C218.001 162.57 214.901 165.72 210.731 165.83C206.351 165.94 203.411 163.23 203.251 158.92C203.101 154.75 206.641 150.93 210.581 151.01C214.241 151.08 217.831 154.75 217.911 158.52V158.51Z"
							fill="white"
						/>
						<path
							d="M304.228 113.85C287.298 113.71 273.328 99.4099 273.458 82.3199C273.578 65.2699 287.838 51.3099 304.908 51.5199C322.188 51.7299 335.918 65.6299 335.818 82.7999C335.708 100.34 321.828 113.99 304.238 113.85H304.228ZM304.448 66.5699C295.558 66.6399 288.278 74.0599 288.418 82.8999C288.558 91.6499 296.108 98.9899 304.888 98.9099C313.868 98.8299 320.878 91.5599 320.708 82.4999C320.538 73.2099 313.678 66.4899 304.448 66.5699Z"
							fill="white"
						/>
					</svg>
					<h2 className="font-medium text-3xl">Software</h2>
				</motion.div>
			</div>
		</div>
	)
}
