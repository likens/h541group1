import React, { Component } from "react";
import logo from "../../assets/img/lifeline-logo-full-dark.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faBatteryFull, faWifi, faCloudSun, faPrescription, faBell, faRunning } from "@fortawesome/free-solid-svg-icons";
import { faBluetoothB } from "@fortawesome/free-brands-svg-icons";

class LifeLineHeader extends Component {
	constructor() {
		super();
		this.state = {
			...this.state
		};
	}

	render() {
		/**
		 * Build out clock data
		 */
		let now = new Date();
		let nowString = now.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
		let timeString = nowString.toString().split(" ")[0].split(":")[0] + ":" + nowString.toString().split(" ")[0].split(":")[1];
		let meridiemString = nowString.toString().split(" ")[1];
		let zoneString = now.toLocaleTimeString("en-us", { timeZoneName: "short" }).split(" ")[2];

		return (
			<header className="header">
				<div className="header__tray header__notifications">
					<div className="header__pt">
						<FontAwesomeIcon icon={faRunning} />
					</div>
					<div className="header__rx">
						<FontAwesomeIcon icon={faPrescription} />
					</div>
					<div className="header__alarms">
						<FontAwesomeIcon icon={faBell} />
					</div>
				</div>
				<div className="header__logo">
					<img className="header__logo-img" src={logo} alt="LifeLine Logo" />
				</div>
				<div className="header__tray header__system">
					<div className="header__gps">
						<FontAwesomeIcon icon={faLocationArrow} />
					</div>
					<div className="header__bluetooth">
						<FontAwesomeIcon icon={faBluetoothB} />
					</div>
					<div className="header__wifi">
						<FontAwesomeIcon icon={faWifi} />
					</div>
					<div className="header__weather">
						<span className="header__weather-icon">
							<FontAwesomeIcon icon={faCloudSun} />
						</span>
						<span className="header__weather-degrees">75°</span>
					</div>
					<div className="header__clock">
						<span className="header__clock-time">{timeString}</span>
						<span className="header__clock-meridiem">
							{meridiemString}
							<br />
							{zoneString}
						</span>
					</div>
					<div className="header__battery">
						<span className="header__battery-icon">
							<FontAwesomeIcon icon={faBatteryFull} />
						</span>
						<span className="header__battery-percent">
							<span className="header__battery-percent-value">95</span>
							<span className="header__battery-percent-sign">%</span>
						</span>
					</div>
				</div>
			</header>
		);
	}
}

export default LifeLineHeader;
