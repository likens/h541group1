import React, { Component } from "react";
import logo from "../../assets/img/lifeline-logo-full-dark.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faBatteryFull, faWifi, faCloudSun, faPrescription, faRunning, faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { faBluetoothB } from "@fortawesome/free-brands-svg-icons";

class LifeLineHeader extends Component {
	constructor() {
		super();
		this.state = {
			...this.state,
			now: new Date(),
			nowString: "",
			timeString: "",
			meridiemString: "",
			zoneString: ""
		};
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		/**
		 * Build out clock data
		 */
		let now = new Date();
		let nowString = now.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
		let timeString = nowString.toString().split(" ")[0].split(":")[0] + ":" + nowString.toString().split(" ")[0].split(":")[1];
		let meridiemString = nowString.toString().split(" ")[1];
		let zoneString = now.toLocaleTimeString("en-us", { timeZoneName: "short" }).split(" ")[2];

		this.setState({
			now: now,
			nowString: nowString,
			timeString: timeString,
			meridiemString: meridiemString,
			zoneString: zoneString
		});
	}

	render() {
		return (
			<header className="header">
				<div className="header__tray header__notifications">
					<div className="header__rx header__notif">
						<FontAwesomeIcon size="lg" icon={faPrescription} />
						<div className="header__dot">2</div>
					</div>
					<div className="header__pt header__notif">
						<FontAwesomeIcon size="lg" icon={faRunning} />
						<div className="header__dot">1</div>
					</div>
					<div className="header__alarms header__notif">
						<FontAwesomeIcon size="lg" icon={faCalendarDay} />
						<div className="header__dot">1</div>
					</div>
				</div>
				<div className="header__logo">
					<img className="header__logo-img" src={logo} alt="LifeLine Logo" />
				</div>
				<div className="header__tray header__system">
					<div className="header__gps">
						<FontAwesomeIcon size="lg" icon={faLocationArrow} />
					</div>
					<div className="header__bluetooth">
						<FontAwesomeIcon size="lg" icon={faBluetoothB} />
					</div>
					<div className="header__wifi">
						<FontAwesomeIcon size="lg" icon={faWifi} />
					</div>
					<div className="header__weather">
						<span className="header__weather-icon">
							<FontAwesomeIcon size="lg" icon={faCloudSun} />
						</span>
						<span className="header__weather-degrees">75°</span>
					</div>
					<div className="header__clock">
						<span className="header__clock-time">{this.state.timeString}</span>
						<span className="header__clock-meridiem">
							{this.state.meridiemString}
							<br />
							{this.state.zoneString}
						</span>
					</div>
					<div className="header__battery">
						<span className="header__battery-icon">
							<FontAwesomeIcon size="lg" icon={faBatteryFull} />
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
