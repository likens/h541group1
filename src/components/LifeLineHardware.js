import React, { Component } from "react";
import LifeLineSoftware from "./LifeLineSoftware";

class LifeLineHardware extends Component {
	constructor() {
		super();
		this.state = {
			...this.state,
			viewVideo: false
		};
	}

	render() {
		return (
			<div className="hardware">
				<div className="hardware__background" />
				<LifeLineSoftware />
			</div>
		);
	}
}

export default LifeLineHardware;
