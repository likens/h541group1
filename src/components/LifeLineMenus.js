import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LifeLineMenusStructure} from "../Utils";

function LifeLineMenus() {
	return (
		<div className="menus">

			<div className="menu__buttons">
				{LifeLineMenusStructure.map((menu, i) => {
					return (
						<div key={i} className={`menu__button menu__button--${menu.name.toLowerCase()}`}>
							<div className="menu__button-icon">
								<FontAwesomeIcon size="lg" icon={menu.icon} />
							</div>
							<div className="menu__button-label">{menu.name}</div>
						</div>
					)
				})}
			</div>
			
			<div className="menu__drawers">
				{LifeLineMenusStructure.map((menu, i) => {
					return (
						<div key={i} className={`menu__drawer menu__drawer--${menu.name.toLowerCase()}`}>
							<div className="menu__drawer-title">
								<div className="menu__drawer-icon">
									<FontAwesomeIcon size="4x" icon={menu.icon} />
								</div>
								<div className="menu__drawer-text">{menu.name}</div>
							</div>
							<ul className="menu__list">
								{menu.structure.map((item, i) => {
									return (
										<li key={i} className="menu__item">
											<Link className={`menu__link${item.extra ? ` menu__link--extra` : ``}`} to={`/${item.path}`}>
												{item.icon ? 
													<span className="menu__link-icon">
														<FontAwesomeIcon size="lg" icon={item.icon} />
													</span>
												: ``}
												<span className="menu__link-name">{item.name}</span>
												{item.extra ? 
													<span className="menu__link-extra">
														<FontAwesomeIcon size="lg" icon={item.extra} />
													</span>
												: ``}
											</Link>
										</li>
									)
								})}
							</ul>
						</div>
					)
				})}
			</div>
		</div>
	);
}

export default LifeLineMenus;