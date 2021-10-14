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
				<div className="instructions">This prototype is best viewed on a computer running Google Chrome... etc etc etc fill this out!</div>
				<br />
				<br />
				<LifeLineHardware />
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
				</ul>
			</div>
		);
	}
}

export default LifeLine;
