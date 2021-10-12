import React, { Component } from "react";
import { XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line} from 'recharts';
import { BloodPressureHistoryData } from "../../Utils";


class LifeLineBloodPressure extends Component {

	constructor() {
		super();
		this.state = {
			...this.state
		}
	}

	render() {
		return (
			<div className="blood-pressure">
				<div className="readings">
					<div className="systolic">
						<div className="label">SYS</div>
						<div className="unit">mmHg</div>
						<div className="value">120</div>
					</div>
					<div className="diastolic">
						<div className="label">DIA</div>
						<div className="unit">mmHg</div>
						<div className="value">80</div>
					</div>
					<div className="pulse">
						<div className="label">PULSE</div>
						<div className="unit">/min</div>
						<div className="value">70</div>
					</div>
				</div>
				<div className="chart">
					<LineChart width={800} height={200} data={BloodPressureHistoryData}>
						<XAxis dataKey="date" />
						<YAxis />
						<Tooltip />
						<CartesianGrid strokeDasharray="3 3" />
						<Line type="monotone" dataKey="sys" stroke="#ad0000" />
						<Line type="monotone" dataKey="dia" stroke="#888888" />
						<Line type="monotone" dataKey="hr" stroke="#aaaaaa" />
					</LineChart>
				</div>
				<div className="actions">
					<button>Start</button>
					<button>Stop</button>
					<button>History</button>
				</div>
			</div>
		);
	}
}

export default LifeLineBloodPressure;