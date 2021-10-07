import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const apps = [
	{ name: "Dashboard", path: "", icon: undefined, component: undefined },
	{ name: "Blood Pressure", path: "bp", icon: undefined, component: undefined },
	{ name: "Oxygen", path: "oxy", icon: undefined, component: undefined },
	{ name: "Electrocardiogram", path: "ekg", icon: undefined, component: undefined },
	{ name: "Heart Rate", path: "hr", icon: undefined, component: undefined },
	{ name: "Medications", path: "meds", icon: undefined, component: undefined },
	{ name: "Physical Therapy", path: "pt", icon: undefined, component: undefined },
	{ name: "Alarms", path: "alarms", icon: undefined, component: undefined },
	{ name: "Messages", path: "messages", icon: undefined, component: undefined },
	{ name: "Your Information", path: "info", icon: undefined, component: undefined }
]

let index = apps[0];

function LifeLineMain() {
	return (
		<div className="main">
			LifeLineMain
			<Router>
				<nav className="nav">
					<div className="nav__prev">previous</div>
					<div className="nav__next">next</div>
				</nav>
				<div class="apps">
					<Switch>
						{apps.map(app => <Route path={`/${app.path}`}>{app.name}</Route>)}
					</Switch>
				</div>
				<div className="menus">
					<div className="menu__emergency">emergency menu</div>
					<div className="menu__apps">
						<ul className="menu__list">
							{apps.map(app => {
								return (
									<li className="menu__item">
										<Link className="menu__link" to={`/${app.path}`}>{app.name}</Link>
									</li>
								)
							})}
						</ul>
					</div>
					<div className="menu__settings">settings menu</div>
				</div>
			</Router>
		</div>
	);
}

export default LifeLineMain;