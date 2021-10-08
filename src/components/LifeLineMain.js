import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { LifeLineAppsStructure } from "../Utils";
import LifeLineMenus from "./LifeLineMenus";

function LifeLineMain() {
	return (
		<div className="main">
			<Router>
				<div className="container">
					<div className="nav__item nav__item--prev">
                    	<FontAwesomeIcon size="7x" icon={faCaretLeft} />	
					</div>
					<div className="apps">
						APPLICATION SPACE
						<br/>
						APPLICATION SPACE
						<br/>
						APPLICATION SPACE
						<br/>
						APPLICATION SPACE
						<br/>
						APPLICATION SPACE
						<Switch>
							{LifeLineAppsStructure.map((app, i) => <Route key={i} path={`/${app.path}`}>{app.component}</Route>)}
						</Switch>
					</div>
					<div className="nav__item nav__item--next">
						<FontAwesomeIcon size="7x" icon={faCaretRight} />	
					</div>
				</div>

				<LifeLineMenus />

			</Router>
		</div>
	);
}

export default LifeLineMain;