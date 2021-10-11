import React, { Component } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
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
					<AreaChart width={800} height={200} data={BloodPressureHistoryData}>
						<defs>
							<linearGradient id="colorSys" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#ad0000" stopOpacity={0.5}/>
								<stop offset="95%" stopColor="#ad0000" stopOpacity={0}/>
							</linearGradient>
							<linearGradient id="colorDia" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#888888" stopOpacity={0.5}/>
								<stop offset="95%" stopColor="#888888" stopOpacity={0}/>
							</linearGradient>
						</defs>
						<XAxis dataKey="date" />
						<YAxis />
						<CartesianGrid strokeDasharray="3 3" />
						<Area type="monotone" dataKey="sys" stroke="#ad0000" fillOpacity={1} fill="url(#colorSys)" />
						<Area type="monotone" dataKey="dia" stroke="#888888" fillOpacity={1} fill="url(#colorDia)" />
					</AreaChart>
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