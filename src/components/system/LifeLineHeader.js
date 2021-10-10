import React, { Component } from "react";
import logo from "../../assets/img/lifeline-logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faWifi, faCloudSun, faPrescription, faBell, faRunning, faBatteryHalf } from '@fortawesome/free-solid-svg-icons'
import { faBluetoothB } from '@fortawesome/free-brands-svg-icons'

class LifeLineHeader extends Component {

    constructor() {
		super();
		this.state = {
			...this.state
		}
    }

    render() {
        return (
            <header className="header">
                <div className="header__tray header__notifications">
                    <div className="header__pt">
                        <FontAwesomeIcon size="lg" icon={faRunning} />
                    </div>
                    <div className="header__rx">
                        <FontAwesomeIcon size="lg" icon={faPrescription} />
                    </div>
                    <div className="header__alarms">
                        <FontAwesomeIcon size="lg" icon={faBell} />
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
                        <span className="header__clock-time">10:45</span>
                        <span className="header__clock-meridiem">AM</span>
                    </div>
                    <div className="header__battery">
                        <span className="header__battery-icon">
                            <FontAwesomeIcon size="lg" icon={faBatteryHalf} />
                        </span>
                        <span className="header__battery-percent">
                            <span className="header__battery-percent-value">50</span>
                            <span className="header__battery-percent-sign">%</span>
                        </span>
                    </div>
                </div>
            </header>
        );
    }
}

export default LifeLineHeader;