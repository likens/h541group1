import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrescription, faRunning, faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { CalendarData } from "../../Utils";

class LifeLineCalendar extends Component {

	constructor() {
		super();
		this.state = {
			...this.state
		}
	}

	getMedPtAppt() {
		console.log(CalendarData);
		this.getMed();
		this.getPt();
		this.getAppt();
	}

	getMed() {
		const numberOf = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
		console.log(numberOf);
	}

	getPt() {
		const numberOf = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
		console.log(numberOf);
	}

	getAppt() {
		const numberOf = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
		console.log(numberOf);
	}

	render() {
		return (
			<div className="calendar">
				<div className="calendar-actual">
					<div className="calendar-month">September 2021</div>
					<div className="calendar-days">
						<div className="days-header">
							<div className="days-row">
								<div className="days-cell">S</div>
								<div className="days-cell">M</div>
								<div className="days-cell">T</div>
								<div className="days-cell">W</div>
								<div className="days-cell">T</div>
								<div className="days-cell">F</div>
								<div className="days-cell">S</div>
							</div>
						</div>
						<div className="days-body">
							<div className="days-row">
								<div className="days-cell days-cell--invalid">29</div>
								<div className="days-cell days-cell--invalid">30</div>
								<div className="days-cell days-cell--invalid">31</div>
								<div className="days-cell">
									<button className="days-button">1</button>
								</div>
								<div className="days-cell">
									<button className="days-button">2</button>
								</div>
								<div className="days-cell">
									<button className="days-button">3</button>
								</div>
								<div className="days-cell">
									<button className="days-button">4</button>
								</div>
							</div>
							<div className="days-row">
								<div className="days-cell">
									<button className="days-button">5</button>
								</div>
								<div className="days-cell">
									<button className="days-button">6</button>
								</div>
								<div className="days-cell">
									<button className="days-button">7</button>
								</div>
								<div className="days-cell">
									<button className="days-button">8</button>
								</div>
								<div className="days-cell">
									<button className="days-button">9</button>
								</div>
								<div className="days-cell">
									<button className="days-button">10</button>
								</div>
								<div className="days-cell">
									<button className="days-button">11</button>
								</div>
							</div>
							<div className="days-row">
								<div className="days-cell">
									<button className="days-button">12</button>
								</div>
								<div className="days-cell">
									<button className="days-button">13</button>
								</div>
								<div className="days-cell">
									<button className="days-button">14</button>
								</div>
								<div className="days-cell">
									<button className="days-button days-button--today" onClick={() => this.getMedPtAppt()}>15</button>
								</div>
								<div className="days-cell">
									<button className="days-button">16</button>
								</div>
								<div className="days-cell">
									<button className="days-button">17</button>
								</div>
								<div className="days-cell">
									<button className="days-button">18</button>
								</div>
							</div>
							<div className="days-row">
								<div className="days-cell">
									<button className="days-button">19</button>
								</div>
								<div className="days-cell">
									<button className="days-button days-button--active">20</button>
								</div>
								<div className="days-cell">
									<button className="days-button">21</button>
								</div>
								<div className="days-cell">
									<button className="days-button">22</button>
								</div>
								<div className="days-cell">
									<button className="days-button">23</button>
								</div>
								<div className="days-cell">
									<button className="days-button">24</button>
								</div>
								<div className="days-cell">
									<button className="days-button">25</button>
								</div>
							</div>
							<div className="days-row">
								<div className="days-cell">
									<button className="days-button">26</button>
								</div>
								<div className="days-cell">
									<button className="days-button">27</button>
								</div>
								<div className="days-cell">
									<button className="days-button">28</button>
								</div>
								<div className="days-cell">
									<button className="days-button">29</button>
								</div>
								<div className="days-cell">
									<button className="days-button">30</button>
								</div>
								<div className="days-cell days-cell--invalid">1</div>
								<div className="days-cell days-cell--invalid">2</div>
							</div>
						</div>
					</div>
					<div className="calendar-selected">September 20</div>
				</div>
				<div className="calendar-panel">
					<div className="panel-panel panel-meds">
						<div className="panel-title">
							<div className="panel-icon">
								<FontAwesomeIcon size={"2x"} icon={faPrescription} />
							</div>
							<div className="panel-text">Medications</div>
						</div>
						<div className="panel-content">
							<ul>
								<li>25mg Lisinopril @ 7:00am</li>
								<li>5mg Hydrocloxine @ 7:00am</li>
							</ul>
						</div>
					</div>
					<div className="panel-panel panel-pt">
						<div className="panel-title">
							<div className="panel-icon">
								<FontAwesomeIcon size={"2x"} icon={faRunning} />
							</div>
							<div className="panel-text">Physical Therapy</div>
						</div>
						<div className="panel-content">
							<ul>
								<li>2 mile walk with cooldown @ 9:00am</li>
								<li>2 mile walk with cooldown @ 4:00pm</li>
							</ul>
						</div>
					</div>
					<div className="panel-panel panel-cal">
						<div className="panel-title">
							<div className="panel-icon">
								<FontAwesomeIcon size={"2x"} icon={faCalendarDay} />
							</div>
							<div className="panel-text">Appointments</div>
						</div>
						<div className="panel-content">
							<ul>
								<li>Dr. Stanielson Appointment @ 2:00pm</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LifeLineCalendar;