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
									<li>Icons</li>
									<li>Messages</li>
									<li>Clear Button</li>
									<li>Button To Launch Different Notifications</li>
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
						Applications
						<ul>
							<li>
								Blood Pressure
								<ul>
									<li>Animations</li>
								</ul>
							</li>
							<li>
								Oxygen Saturation
								<ul>
									<li>Animations</li>
								</ul>
							</li>
							<li>
								Heart Rate
								<ul>
									<li>Animations</li>
								</ul>
							</li>
							<li>
								Calendar
								<ul>
									<li>do it</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						Nice Stuff
						<ul>
							<li>3D Hardware</li>
							<li>Splash Animations</li>
						</ul>
					</li>
				</ul>
			</div>
		);
	}
}

export default LifeLine;
