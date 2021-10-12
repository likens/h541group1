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
					<div className="spo2 reading">
						<div className="label">SpO2</div>
						<div className="value">99%</div>
					</div>
					<div className="pulse reading">
						<div className="label">Pulse</div>
						<div className="value">70<span>bpm</span></div>
					</div>
				</div>
				<div className="actions">
					<button>Start Measurement</button>
				</div>
				<div className="chart">
					<div className="chart-title">Last 2 Weeks</div>
					<AreaChart width={800} height={200} data={OxygenHistoryData} margin={{ top: 20, right: 50 }}>
						<defs>
							<linearGradient id="colorSpo2" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#419cdd" stopOpacity={0.5}/>
								<stop offset="95%" stopColor="#419cdd" stopOpacity={0}/>
							</linearGradient>
						</defs>
						<XAxis dataKey="date" stroke={"#444444"} tick={{stroke: '#888888', fontSize: 12 }} />
						<YAxis type="number" stroke={"#444444"} tick={{stroke: '#888888', fontSize: 12 }} domain={[45, 100]} />
						<CartesianGrid stroke={"#444444"} strokeDasharray="1" />
						<Area type="monotone" 
							label={{fill : '#fff', fontSize: 10, fontWeight: '700' }}
							dot={{ fill: '#419cdd', r: 8}} 
							dataKey="spo2" 
							stroke="#419cdd" 
							fillOpacity={1} 
							fill="url(#colorSpo2)" />
						<Area type="monotone" 
							label={{fill : '#35f575', fontSize: 10, fontWeight: '700' }}
							dot={{ fill: '#444444', r: 8}} 
							dataKey="hr" 
							stroke="#444444" 
							fillOpacity={0} />
					</AreaChart>
				</div>
			</div>
		);
	}
}

export default LifeLineOxygen;