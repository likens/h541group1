import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LifeLineMenusStructure, KEY_EMERGENCY } from "../../Utils";
import { faTimes, faPhone, faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

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
									{menu.menu.structure.map((item, i) => {
										return (
											<li key={i} className="menu__item">
												<div className={`menu__link${item.extra ? ` menu__link--extra` : ``}`}
													onClick={item.close ? () => this.openMenuDrawer() : ``}>
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
												</div>
												<ul className="menu__sub">
													{menu.menu.key === KEY_EMERGENCY ?
														<li className="menu__item">
															<div className="menu__link">
																<span className="menu__link-icon">
																	<FontAwesomeIcon flip="horizontal" size="md" icon={faPhone} />
																</span>
																<span className="menu__link-name">Contact</span>
															</div>
														</li>
													: ``} 
													{menu.menu.key === KEY_EMERGENCY && item.edit ?
														<li className="menu__item">
															<div className="menu__link">
																<span className="menu__link-icon">
																	<FontAwesomeIcon flip="horizontal" size="md" icon={faPencilAlt} />
																</span>
																<span className="menu__link-name">Edit</span>
															</div>
														</li>
													: ``}
													{menu.menu.key === KEY_EMERGENCY && item.delete ?
														<li className="menu__item">
															<div className="menu__link">
																<span className="menu__link-icon">
																	<FontAwesomeIcon size="md" icon={faTrash} />
																</span>
																<span className="menu__link-name">Delete</span>
															</div>
														</li>
													: ``}
													{item.sub?.map((sub, i) => {
														return (
															<li key={i} className="menu__item">
																<div className="menu__link">
																	<span className="menu__link-icon"></span>
																	<span className="menu__link-name">{sub.name}</span>
																</div>
															</li>
														)
													})}
												</ul>
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