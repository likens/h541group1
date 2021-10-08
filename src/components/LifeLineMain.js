import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { LifeLineAppsStructure } from "../Utils";
import LifeLineMenus from "./LifeLineMenus";

class LifeLineMain extends Component {

	constructor() {
		super();
		this.state = {
			...this.state
		}
	}

	render() {
		return (
			<div className="main">
				<Router>
					<div className="container">
						<div className="nav__item nav__item--prev">
							<FontAwesomeIcon size="7x" icon={faCaretLeft} />	
						</div>
						<div className="apps">
							<Switch>
								{LifeLineAppsStructure.map((app, i) => {
									return (
										<Route key={i} path={`/${app.path}`}>
											<div className="app">
												{`${app.name}`}
												{app.component}
											</div>
										</Route>
									)
								})}
							</Switch>
						</div>
						<div className="nav__item nav__item--next">
							<FontAwesomeIcon size="7x" icon={faCaretRight} />	
						</div>
	
						<LifeLineMenus />

					</div>
	
				</Router>
			</div>
		);
	}
}

export default LifeLineMain;