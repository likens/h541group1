import React, { Component } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
import { OxygenHistoryData, OxygenSpo2, OxygenHr } from "../../Utils";
import { faChartLine, faSignal } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle, faStopCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class LifeLineOxygen extends Component {

	constructor() {
		super();
		this.state = {
			...this.state,
			readings : {
				active: false
			},
			history: false
		}
	}

	toggleMeasure() {
		this.setState({
			readings: {
				active: !this.state.readings.active
			},
			history: false
		});
		if (!this.state.readings.active) {
			this.generateReadings();
		}
	}

	toggleHistory() {
		this.setState({
			history: !this.state.history
		})
	}

	generateReadings() {
		this.oxyInterval = setInterval(() => this.updateReading(), 500);
		setTimeout(() => {
			this.setState({
				readings: { 
					active: false,
					spo2: this.state.readings.spo2,
					hr: this.state.readings.hr
				}
			})
			clearInterval(this.oxyInterval);
		}, 5000);
	}

	updateReading() {
		this.setState({
			readings: {
				active: true,
				spo2: Math.floor(Math.random() * (OxygenSpo2[1] - OxygenSpo2[0] + 1)) + OxygenSpo2[0],
				hr: Math.floor(Math.random() * (OxygenHr[1] - OxygenHr[0] + 1)) + OxygenHr[0]
			}
		});
	}

	render() {
		return (
			<div className="oxygen">
				<div className={`readings${!this.state.history ? ` readings--active` : ``}`}>
					<div className="spo2 reading">
						<div className="label">Oxy. Sat. (SpO2)</div>
						<div className="value">
							{this.state.readings.spo2 ? `${this.state.readings.spo2}` : `--`}
							{this.state.readings.spo2 ? <span>%</span> : ``}
						</div>
					</div>
					<div className="pulse reading">
						<div className="label">Pulse</div>
						<div className="value">
							{this.state.readings.hr ? `${this.state.readings.hr}` : `--`}
							{this.state.readings.hr ? <span>bpm</span> : ``}
						</div>
					</div>
				</div>
				<div className="actions">
					<div className={`measuring${this.state.readings.active ? ` measuring--active` : ``}`}><FontAwesomeIcon size={"lg"} icon={faSignal} /> Measuring</div>
					<button className="action__btn" onClick={() => this.toggleMeasure()}>
						<div className="action__btn-icon">
							<FontAwesomeIcon icon={this.state.readings.active ? faStopCircle : faPlayCircle} />
						</div>
						<div className="action__btn-label">{this.state.readings.active ? `Stop` : `Start`} Measurement</div>
					</button>
					<button className="action__btn" onClick={() => this.toggleHistory()}>
						<div className="action__btn-icon">
							<FontAwesomeIcon icon={faChartLine} />
						</div>
						<div className="action__btn-label">{this.state.history ? `Hide` : `Show`} History</div>
					</button>
				</div>
				<div className={`chart ${this.state.history ? ` chart--active` : ``}`}>
					<div className="chart-title">Last 2 Weeks</div>
					<LineChart width={800} height={275} data={OxygenHistoryData} margin={{ top: 20, right: 50 }}>
						<XAxis dataKey="date" stroke={"#444444"} tick={{stroke: '#888888', fontSize: 12 }} />
						<YAxis type="number" stroke={"#444444"} tick={{stroke: '#888888', fontSize: 12 }} domain={[45, 100]} />
						<CartesianGrid stroke={"#444444"} strokeDasharray="1" />
						<Line type="monotone" 
							label={{fill : '#fff', fontSize: 10, fontWeight: '700' }}
							dot={{ fill: '#419cdd', r: 8}} 
							dataKey="spo2" 
							stroke="#419cdd" />
						<Line type="monotone" 
							label={{fill : '#35f575', fontSize: 10, fontWeight: '700' }}
							dot={{ fill: '#444444', r: 8}} 
							dataKey="hr" 
							stroke="#444444" />
					</LineChart>
				</div>
			</div>
		);
	}
}

export default LifeLineOxygen;