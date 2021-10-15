import React, { Component } from "react";
import LifeLineSoftware from "./LifeLineSoftware";

class LifeLineHardware extends Component {
	constructor() {
		super();
		this.state = {
			...this.state,
			viewVideo: false,
			scaleBufferX: 250,
			scaleBufferY: 500
		};
	}

	componentDidMount() {
		setTimeout(() => {
			document.getElementById("splashGif").style.opacity = 0;
			setTimeout(() => {
				document.getElementById("splashGif").style.display = "none";
			}, 1500);
		}, 6500);

		window.addEventListener("resize", () => {
			let winWidth = window.outerWidth;
			let winHeight = window.outerHeight;
			let hwElm = document.getElementById("hardwareFrame");
			let compStyles = window.getComputedStyle(hwElm);
			let elmWidth = parseFloat(compStyles.width.split("px")[0]);
			let elmHeight = parseFloat(compStyles.height.split("px")[0]);

			let ratio = 1.0;
			while ((elmWidth + this.state.scaleBufferX) * ratio > winWidth || (elmHeight + this.state.scaleBufferY) * ratio > winHeight) {
				ratio -= 0.01;
			}

			hwElm.style.transform = "translate(-50%, -50%) scale(" + ratio + ", " + ratio + ")";
		});
	}

	render() {
		return (
			<div id="hardwareFrame" className="hardware">
				<div id="splashGif" className="splashImg"></div>
				<div className="hardware__background" />
				<LifeLineSoftware />
			</div>
		);
	}
}

export default LifeLineHardware;
