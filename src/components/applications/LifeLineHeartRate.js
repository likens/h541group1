import React, { Component } from "react";
import { XAxis, YAxis, CartesianGrid, LineChart, Line} from 'recharts';
import { HeartRateHistoryData } from "../../Utils";
import { faChartLine, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle, faStopCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class LifeLineHeartRate extends Component {

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
		})
	}

	toggleHistory() {
		this.setState({
			history: !this.state.history
		})
	}

	render() {
		return (
			<div className="heart-rate">
				<div className={`readings${!this.state.history ? ` readings--active` : ``}`}>
					<div className="hr reading">
						<div className="label">Heart Rate</div>
						<div className="value">--</div>
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
					<div className="chart-title">Last 2 Weeks (Daily Average)</div>
					<LineChart width={800} height={275} data={HeartRateHistoryData} margin={{ right: 50 }}>
						<XAxis dataKey="date" stroke={"#444444"} tick={{stroke: '#888888', fontSize: 12 }} />
						<YAxis type="number" stroke={"#444444"} tick={{stroke: '#888888', fontSize: 12 }} domain={['dataMin - 10', 'dataMax + 10']} />
						<CartesianGrid stroke={"#444444"} strokeDasharray="1" />
						<Line type="monotone" 
							dataKey="hr" 
							stroke="#ad0000" 
							label={{fill : '#fff', fontSize: 10, fontWeight: '700' }} 
							dot={{ fill: '#ad0000', r: 8}} />
					</LineChart>
				</div>
			</div>
		);
	}
}

export default LifeLineHeartRate;