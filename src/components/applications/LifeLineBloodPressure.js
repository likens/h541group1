import React, { Component } from "react";
import { XAxis, YAxis, CartesianGrid, LineChart, Line} from 'recharts';
import { BloodPressureHistoryData, BloodPressureDia, BloodPressureSys, BloodPressureHr } from "../../Utils";
import { faChartLine, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle, faStopCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class LifeLineBloodPressure extends Component {

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
		this.bpInterval = setInterval(() => this.updateReading(), 500);
		setTimeout(() => {
			this.setState({
				readings: { 
					active: false,
					sys: this.state.readings.sys,
					dia: this.state.readings.dia,
					hr: this.state.readings.hr
				}
			})
			clearInterval(this.bpInterval);
		}, 5000);
	}

	updateReading() {
		this.setState({
			readings: {
				active: true,
				sys: Math.floor(Math.random() * (BloodPressureSys[1] - BloodPressureSys[0] + 1)) + BloodPressureSys[0],
				dia: Math.floor(Math.random() * (BloodPressureDia[1] - BloodPressureDia[0] + 1)) + BloodPressureDia[0],
				hr: Math.floor(Math.random() * (BloodPressureHr[1] - BloodPressureHr[0] + 1)) + BloodPressureHr[0]
			}
		});
	}

	render() {
		return (
			<div className="blood-pressure">
				<div className={`readings${!this.state.history ? ` readings--active` : ``}`}>
					<div className="systolic reading">
						<div className="label">Systolic</div>
						<div className="value">
							{this.state.readings.sys ? `${this.state.readings.sys}` : `--`}
							{this.state.readings.sys ? <span>mmHg</span> : ``}
						</div>
					</div>
					<div className="diastolic reading">
						<div className="label">Diastolic</div>
						<div className="value">
							{this.state.readings.dia ? `${this.state.readings.dia}` : `--`}
							{this.state.readings.dia ? <span>mmHg</span> : ``}
						</div>
					</div>
					<div className="pulse reading">
						<div className="label">Pulse</div>
						<div className="value">
							{this.state.readings.hr ? `${this.state.readings.hr}` : `--`}
							{this.state.readings.hr ? <span>BPM</span> : ``}
						</div>
					</div>
				</div>
				<div className="actions">
					<div className={`measuring${this.state.readings.active ? ` measuring--active` : ``}`}><FontAwesomeIcon size={"lg"} icon={faHeart} /> Measuring</div>
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
					<LineChart width={800} height={275} data={BloodPressureHistoryData} margin={{ right: 50 }}>
						<XAxis dataKey="date" stroke={"#444444"} tick={{stroke: '#888888', fontSize: 12 }} />
						<YAxis type="number" stroke={"#444444"} tick={{stroke: '#888888', fontSize: 12 }} domain={['dataMin - 10', 'dataMax + 10']} />
						<CartesianGrid stroke={"#444444"} strokeDasharray="1" />
						<Line type="monotone" 
							dataKey="sys" 
							stroke="#0029ff" 
							label={{fill : '#fff', fontSize: 10, fontWeight: '700' }} 
							dot={{ fill: '#0029ff', r: 8}} />
						<Line type="monotone" 
							dataKey="dia" 
							stroke="#ff9400" 
							label={{fill : '#fff', fontSize: 10, fontWeight: '700' }} 
							dot={{ fill: '#ff9400', r: 8}} />
						<Line type="monotone" 
							dataKey="hr" 
							stroke="#444444" 
							label={{fill : '#35f575', fontSize: 10, fontWeight: '700' }} 
							dot={{ fill: '#444444', r: 8}} />
					</LineChart>
				</div>
			</div>
		);
	}
}

export default LifeLineBloodPressure;