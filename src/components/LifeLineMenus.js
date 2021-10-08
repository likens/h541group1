import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LifeLineMenusStructure} from "../Utils";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class LifeLineMenus extends Component {

	constructor() {
		super();
		this.state = {
			...this.state,
			menu: undefined
		}
	}

	openMenuDrawer(key) {
		this.setState({
			...this.state,
			menu: key
		})
	}
	
	render() {
		return (
			<div className="menus">
	
				<div className="menu__buttons">
					{LifeLineMenusStructure.map((menu, i) => {
						return (
							<div key={i} className={`menu__button menu__button--${menu.key}`} onClick={() => this.openMenuDrawer(menu.key)}>
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
							<div key={i} className={`menu__drawer menu__drawer--${menu.key}${menu.key === this.state.menu ? ` menu__drawer--active` : ``}`}>
								<div className="menu__drawer-title">
									<div className="menu__drawer-icon">
										<FontAwesomeIcon size="4x" icon={menu.icon} />
									</div>
									<div className="menu__drawer-text">{menu.name}</div>
									<div className="menu__drawer-close" onClick={() => this.openMenuDrawer()}>
										<FontAwesomeIcon size="lg" icon={faTimes} />
									</div>
								</div>
								<ul className="menu__list">
									{menu.structure.map((item, i) => {
										return (
											<li key={i} className="menu__item">
												<Link className={`menu__link${item.extra ? ` menu__link--extra` : ``}`}
													onClick={item.close ? () => this.openMenuDrawer() : ``}
													to={item.close ? `/${item.path}` : ``}>
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

				<div className={`menu__overlay${this.state.menu ? ` menu__overlay--active` : ``}`} onClick={() => this.openMenuDrawer()}></div>

			</div>
		);
	}
}

export default LifeLineMenus;