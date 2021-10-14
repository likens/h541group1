import React, { Component } from "react";
import LifeLineHardware from "./LifeLineHardware";
import "../assets/css/LifeLine.css";

class LifeLine extends Component {
	constructor() {
		super();
		this.state = {
			...this.state
		};
	}

	render() {
		return (
			<div className="lifeline">

				<LifeLineHardware />
				
				{/*
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
