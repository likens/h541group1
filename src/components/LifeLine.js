import React, { Component } from "react";
import LifeLineHardware from "./LifeLineHardware";
import "../assets/css/LifeLine.css";
import videoWEBM from "../assets/img/LIFELINE-HiFi-Full.webm";
import videoOGG from "../assets/img/LIFELINE-HiFi-Full.ogg";
import videoPoster from "../assets/img/Demo-Poster.png";

class LifeLine extends Component {
	constructor() {
		super();
		this.state = {
			...this.state,
			viewVideo: true,
			demoButtonText: "View 3D Product Render"
		};
	}

	demoBtnCLick() {
		let videoPlayer = document.getElementById("hardware__demo_video_player");
		let newViewVideoState = !this.state.viewVideo;
		this.setState({ viewVideo: newViewVideoState });

		if (this.state.viewVideo) {
			this.setState({ demoButtonText: "Exit Product Demo" });
			videoPlayer.style.display = "initial";
			videoPlayer.play();
		} else {
			this.setState({ demoButtonText: "View Product Demo" });
			videoPlayer.style.display = "none";
			videoPlayer.pause();
		}

		this.forceUpdate();
	}

	render() {
		return (
			<div className="lifeline">
				<LifeLineHardware />
				<video id="hardware__demo_video_player" className="hardware__demo_video" poster={videoPoster} controls={false} loop={true} muted={true} preload="auto">
					<source src={videoWEBM} type="video/webm" />
					<source src={videoOGG} type="video/ogg" />
					Your browser does not support the video tag.
				</video>
				<button className="hardware__demo_button" onClick={this.demoBtnCLick.bind(this)}>
					<span>{this.state.demoButtonText}</span>
				</button>
			</div>
		);
	}
}

export default LifeLine;
