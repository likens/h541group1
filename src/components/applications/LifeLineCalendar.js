import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrescription, faRunning, faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { CalendarData } from "../../Utils";

class LifeLineCalendar extends Component {

	constructor() {
		super();
		this.state = {
			...this.state,
			today: 15,
			day: undefined,
			med: undefined,
			pt: undefined,
			appts: undefined
		}
	}

	getMedPtAppt(day) {
		this.setState({
			day: day,
			meds: this.getMeds(),
			pt: this.getPt(),
			appts: this.getAppt()
		})
	}

	getMeds() {
		const numberOf = Math.floor(Math.random() * (2 - -1 + 1) + -1);
		const items = [];
		for (let i = 0; i <= numberOf; i++) {
			const dose = Math.floor(Math.random() * (CalendarData.doses[1] - CalendarData.doses[0] + 1)) + CalendarData.doses[0];
			const med = CalendarData.meds[Math.floor(Math.random() * (CalendarData.meds.length - 1 + 1)) + 0];
			const hour = Math.floor(Math.random() * (CalendarData.hours[1] - CalendarData.hours[0] + 1)) + CalendarData.hours[0];
			const meridiem = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
			items.push(`${dose}mg ${med} @ ${hour}:00${CalendarData.meridiem[meridiem]}`)
		}
		return items;
	}

	getPt() {
		const numberOf = Math.floor(Math.random() * (2 - -1 + 1) + -1);
		const items = [];
		for (let i = 0; i <= numberOf; i++) {
			const length = Math.floor(Math.random() * (CalendarData.lengths[1] - CalendarData.lengths[0] + 1)) + CalendarData.lengths[0];
			const exercise = CalendarData.exercises[Math.floor(Math.random() * (CalendarData.exercises.length - 1 + 1)) + 0];
			const hour = Math.floor(Math.random() * (CalendarData.hours[1] - CalendarData.hours[0] + 1)) + CalendarData.hours[0];
			const meridiem = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
			items.push(`${length} minutes of ${exercise} @ ${hour}:00${CalendarData.meridiem[meridiem]}`)
		}
		return items;
	}

	getAppt() {
		const numberOf = Math.floor(Math.random() * (2 - -1 + 1) + -1);
		const items = [];
		for (let i = 0; i <= numberOf; i++) {
			const appt = CalendarData.appointments[Math.floor(Math.random() * (CalendarData.appointments.length - 1 + 1)) + 0];
			const hour = Math.floor(Math.random() * (CalendarData.hours[1] - CalendarData.hours[0] + 1)) + CalendarData.hours[0];
			const meridiem = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
			items.push(`${appt} appointment @ ${hour}:00${CalendarData.meridiem[meridiem]}`)
		}
		return items;
	}

	render() {

		const weeks = [
			[-29, -30, -31, 1, 2, 3, 4],
			[5, 6, 7, 8, 9, 10, 11],
			[12, 13, 14, 15, 16, 17, 18],
			[19, 20, 21, 22, 23, 24, 25],
			[26, 27, 28, 29, 30, -1, -2]
		]
	

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
							{weeks.map((week, i) => {
								return (
									<div key={i} className="days-row">
										{week.map(w => {
											return (
												<div key={w} className={`days-cell${Math.sign(w) === -1 ? ` days-cell--invalid` : ``}`}>
													{Math.sign(w) === -1 ? `${Math.abs(w)}` 
													: <button onClick={() => this.getMedPtAppt(w)} 
														className={`days-button${this.state.day === w ? ` days-button--active` : ``}${this.state.today === w ? ` days-button--today` : ``}`}>{w}</button>}
												</div>
											)
										})}
									</div>
								)
							})}
						</div>
					</div>
					{this.state.day ? <div className="calendar-selected">September {this.state.day}</div> : ``}
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
								{this.state?.meds ? this.state.meds.map((med, i) => <li key={i}>{med}</li>) : ``}
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
								{this.state?.pt ? this.state.pt.map((pt, i) => <li key={i}>{pt}</li>) : ``}
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
								{this.state?.appts ? this.state.appts.map((appt, i) => <li key={i}>{appt}</li>) : ``}
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LifeLineCalendar;