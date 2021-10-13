import React, { Component } from "react";
import LifeLineSoftware from "./LifeLineSoftware";

class LifeLineHardware extends Component {
	constructor() {
		super();
		this.state = {
			...this.state
		};
	}

	render() {
		return (
			<div className="hardware">
				<LifeLineSoftware />
			</div>
		);
	}
}

export default LifeLineHardware;
