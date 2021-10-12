import React, { Component } from "react";
import ekgHR from "../../assets/img/ekg-hr.svg";
import ekgO2 from "../../assets/img/ekg-o2.svg";
import ekgRP from "../../assets/img/ekg-rp.svg";
import "../../assets/css/Electrocardiogram.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class LifeLineElectrocardiogram extends Component {

	constructor() {
		super();
		this.state = {
			...this.state
		}
	}

	render() {
		return (
			<div className="ekg">

				<div className="graph graph--hr">
					<div className="block" style={{backgroundImage:`url(${ekgHR})`}}></div>
					<div className="block" style={{backgroundImage:`url(${ekgHR})`}}></div>
					<div className="block" style={{backgroundImage:`url(${ekgHR})`}}></div>
					<div className="block" style={{backgroundImage:`url(${ekgHR})`}}></div>
					<div className="block" style={{backgroundImage:`url(${ekgHR})`}}></div>
					<div className="block" style={{backgroundImage:`url(${ekgHR})`}}></div>
					<div className="heartbeat">
						<FontAwesomeIcon size={"lg"} icon={faHeart} />
					</div>
					<div className="graph-label">ECG</div>
					<div className="graph-value">75<br/>bpm</div>
				</div>

				<div className="graph graph--o2">
					<div className="block" style={{backgroundImage:`url(${ekgO2})`}}></div>
					<div className="block" style={{backgroundImage:`url(${ekgO2})`}}></div>
					<div className="block" style={{backgroundImage:`url(${ekgO2})`}}></div>
					<div className="block" style={{backgroundImage:`url(${ekgO2})`}}></div>
					<div className="block" style={{backgroundImage:`url(${ekgO2})`}}></div>
					<div className="block" style={{backgroundImage:`url(${ekgO2})`}}></div>
					<div className="graph-label">SPO2</div>
					<div className="graph-value">100%</div>
				</div>

				<div className="graph graph--rp">
					<div className="block" style={{backgroundImage:`url(${ekgRP})`}}></div>
					<div className="block" style={{backgroundImage:`url(${ekgRP})`}}></div>
					<div className="block" style={{backgroundImage:`url(${ekgRP})`}}></div>
					<div className="block" style={{backgroundImage:`url(${ekgRP})`}}></div>
					<div className="block" style={{backgroundImage:`url(${ekgRP})`}}></div>
					<div className="block" style={{backgroundImage:`url(${ekgRP})`}}></div>
					<div className="graph-label">RESP</div>
					<div className="graph-value">10<br/>rpm</div>
				</div>

			</div>
		);
	}
}

export default LifeLineElectrocardiogram;