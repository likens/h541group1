import React, { Component } from "react";
import LifeLineHeader from "./LifeLineHeader";
import LifeLineMain from "./LifeLineMain";

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