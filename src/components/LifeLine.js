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
			demoButtonText: "View 3D Product Render",
			renderViewTime: 0
		};
	}

	demoBtnCLick() {
		let videoPlayer = document.getElementById("hardware__demo_video_player");
		let newViewVideoState = !this.state.viewVideo;
		this.setState({ viewVideo: newViewVideoState });

		if (this.state.viewVideo) {
			this.setState({ demoButtonText: "Exit 3D Product Render" });
			videoPlayer.play();

			setTimeout(() => {
				videoPlayer.style.opacity = 1;
				this.setState({ renderViewTime: Math.round(performance.now()) });
			}, 50);

			videoPlayer.style.display = "initial";
			videoPlayer.style.opacity = 0;
		} else {
			this.setState({ demoButtonText: "View 3D Product Render" });
			setTimeout(() => {
				videoPlayer.style.display = "none";
				videoPlayer.pause();
			}, 750);

			videoPlayer.style.opacity = 0;

			window.gtag("event", "view_render", {
				view_time: (Math.round(performance.now()) - this.state.renderViewTime) / 1000
			});
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
				<button id="demoBtn" className="hardware__demo_button" onClick={this.demoBtnCLick.bind(this)}>
					<span>{this.state.demoButtonText}</span>
				</button>
			</div>
		);
	}
}

export default LifeLine;
