import React, { Component } from "react";
import "../../assets/css/Electrocardiogram.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class LifeLineElectrocardiogram extends Component {

	constructor() {
		super();
		this.state = {
			...this.state
		}
	}

	render() {
		return (
			<div className="ekg">

				<div className="graph">
					<div className="block"></div>
					<div className="block"></div>
					<div className="block"></div>
					<div className="block"></div>
					<div className="block"></div>
					<div className="block"></div>
					<div class="heartbeat">
						<FontAwesomeIcon size={"lg"} icon={faHeart} />
					</div>
				</div>

				<svg width="0" height="0" className="filters">
					<defs>
						<filter id="filter0_dd" x="0.858887" y="28.9809" width="644.262" height="124.108" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
							<feOffset/>
							<feGaussianBlur stdDeviation="2"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.215686 0 0 0 0 0.686275 0 0 0 0 0.54902 0 0 0 1 0"/>
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
							<feOffset/>
							<feGaussianBlur stdDeviation="4"/>
							<feColorMatrix type="matrix" values="0 0 0 0 0.215686 0 0 0 0 0.686275 0 0 0 0 0.54902 0 0 0 1 0"/>
							<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
							<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
						</filter>
					</defs>
				</svg>
			</div>
		);
	}
}

export default LifeLineElectrocardiogram;