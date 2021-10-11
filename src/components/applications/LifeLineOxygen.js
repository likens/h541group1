import React, { Component } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import { OxygenHistoryData } from "../../Utils";

class LifeLineOxygen extends Component {

	constructor() {
		super();
		this.state = {
			...this.state
		}
	}

	render() {
		return (
			<div className="oxygen">
				<div className="readings">
					<div className="spo2">
						<div className="value">99</div>
						<div className="label">%SpO2</div>
					</div>
					<div className="pulse">
						<div className="label">PULSE</div>
						<div className="unit">/min</div>
						<div className="value">70</div>
					</div>
				</div>
				<div className="chart">
					<AreaChart width={800} height={200} data={OxygenHistoryData}>
						<defs>
							<linearGradient id="colorSpo2" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#419cdd" stopOpacity={0.5}/>
								<stop offset="95%" stopColor="#419cdd" stopOpacity={0}/>
							</linearGradient>
						</defs>
						<XAxis dataKey="date" />
						<YAxis />
						<CartesianGrid strokeDasharray="3 3" />
						<Area type="monotone" dataKey="spo2" stroke="#419cdd" fillOpacity={1} fill="url(#colorSpo2)" />
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

export default LifeLineOxygen;