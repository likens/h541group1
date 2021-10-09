import React, { Component } from "react";
import LifeLineHeader from "./system/LifeLineHeader";
import LifeLineMain from "./system/LifeLineMain";

class LifeLineSoftware extends Component {

	constructor() {
		super();
		this.state = {
			...this.state
		}
	}

	render() {
		return (
			<div className="software">
				<LifeLineHeader />
				<LifeLineMain />
			</div>
		);
	}
}

export default LifeLineSoftware;