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
			demoButtonText: "View Product Demo"
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
				{/*
				<br />
				<div className="clickables">
					<ul>
						<li>
							<button>Click To Get Med Notification</button>
						</li>
						<li>
							<button>Click To Get PT Notification</button>
						</li>
						<li>
							<button>Click To Get Appt Notification</button>
						</li>
						<li>
							<button>Click To Get Med Modal</button>
						</li>
						<li>
							<button>Click To Get PT Modal</button>
						</li>
						<li>
							<button>Click To Get Appt Modal</button>
						</li>
					</ul>
				</div>
				<br />
				TODO ---
				<ul>
					<li>
						System
						<ul>
							<li>
								Design
								<ul>
									<li>Colors</li>
									<li>Spacing</li>
									<li>Animations</li>
									<li>Feels</li>
								</ul>
							</li>
							<li>
								Notifications
								<ul>
									<li>Layout</li>
									<li>Icons</li>
									<li>Copy</li>
								</ul>
							</li>
							<li>
								Settings
								<ul>
									<li>Flesh out as best as possible</li>
									<li>Need forms created for it</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						Nice Stuff
						<ul>
							<li>Three Across Emergency (911/hospital/nurse)</li>
							<li>Three Across Emergency Sub (contact/edit/delete)</li>
							<li>Three Across Applications</li>
							<li>3D Hardware</li>
							<li>Splash Animations</li>
						</ul>
					</li>
				</ul> */}
			</div>
		);
	}
}

export default LifeLine;
