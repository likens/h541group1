import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight, faCaretLeft, faTimes, faPhone, faPencilAlt, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import { LifeLineApps, LifeLineMenusStructure, LifeLineModals, KEY_EMERGENCY, KEY_SETTINGS } from "../../Utils";

class LifeLineMain extends Component {

	constructor() {
		super();
		this.state = {
			app: {
				key: LifeLineApps.structure[0].key,
				idx: 0,
				component: LifeLineApps.structure[0].component
			},
			menu: undefined,
			submenu: undefined,
			modal: undefined
		}
	}

	menuItemClick(item) {
		if (item.component) {
			this.goToApp(item.key);
		} else if (item.extra) {
			this.toggleSubmenu(item.key);
		}
	}

	goToApp(key) {
		this.setState({
			app: {
				key: key,
				idx: LifeLineApps.structure.findIndex(app => app.key === key),
				component: LifeLineApps.structure.find(app => app.key === key).component
			}
		});
		this.toggleMenu();
	}

	getAppKey(next) {
		const structure = LifeLineApps.structure;
		let idx = this.state.app.idx;
		if (next) {
			if (idx + 1 >= structure.length) {
				idx = 0;
			} else {
				idx++;
			}
		} else {
			if (idx - 1 < 0) {
				idx = structure.length - 1;
			} else {
				idx--;
			}
		}
		return structure[idx].key;
	}

	toggleMenu(key) {
		this.setState({
			menu: key
		});
		this.toggleSubmenu();
	}

	toggleSubmenu(key) {
		if (key && key === this.state.submenu) {
			this.toggleSubmenu();
		} else {
			this.setState({
				submenu: key
			})
		}
	}

	toggleModal(key) {
		this.setState({
			menu: undefined,
			submenu: undefined,
			modal: key
		})
	}

	toggleOverlay() {
		this.setState({
			menu: undefined,
			submenu: undefined,
			modal: undefined,
		})
	}

	render() {
		return (
			<div className="main">
				<div className="container">
					<div className="nav__item nav__item--prev"
						onClick={() => this.goToApp(this.getAppKey(false))}>
						<FontAwesomeIcon size="7x" icon={faCaretLeft} />	
					</div>
					<div className="apps">
						{this.state.app.component}
					</div>
					<div className="nav__item nav__item--next"
						onClick={() => this.goToApp(this.getAppKey(true))}>
						<FontAwesomeIcon size="7x" icon={faCaretRight} />	
					</div>

					<div className="menus">

						<div className="menu__buttons">
							{LifeLineMenusStructure.map((menu, i) => {
								return (
									<button key={i} className={`menu__btn menu__btn--${menu.key}`} onClick={() => this.toggleMenu(menu.key)}>
										<div className="menu__btn-icon">
											<FontAwesomeIcon size="lg" icon={menu.icon} />
										</div>
										<div className="menu__btn-label">{menu.name}</div>
									</button>
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
											<div className="menu__drawer-close" onClick={() => this.toggleMenu()}>
												<FontAwesomeIcon size="lg" icon={faTimes} />
											</div>
										</div>
										<ul className="menu__list">
											{menu.menu.structure.map((item, i) => {
												return (
													<li key={i} className="menu__item">

														<button className={`menu__link${item.extra ? ` menu__link--extra` : ``}`}
															onClick={() => this.menuItemClick(item)}>
															{item.icon ? 
																<span className="menu__link-icon">
																	<FontAwesomeIcon size="lg" icon={item.icon} />
																</span>
															: ``}
															<span className="menu__link-name">{item.name}</span>
															{menu.menu.key === KEY_EMERGENCY ? 
																<span className="menu__link-extra">
																	<FontAwesomeIcon size="lg" 
																			icon={item.key === this.state.submenu ? faCaretDown : faCaretRight} />
																</span>
															: ``}
															{menu.menu.key === KEY_SETTINGS ? 
																<span className="menu__link-extra">
																	{item?.sub?.length ?
																		<FontAwesomeIcon size="lg" 
																			icon={item.key === this.state.submenu ? faCaretDown : faCaretLeft} /> : ``}
																</span>
															: ``}
														</button>
															
														<ul className={`menu__sub${item.key === this.state.submenu ? ` menu__sub--active` : ``}`}>
															{menu.menu.key === KEY_EMERGENCY ?
																<li className="menu__item">
																	<button className="menu__link"
																			onClick={() => this.toggleModal("contact")}>
																		<span className="menu__link-icon">
																			<FontAwesomeIcon flip="horizontal" icon={faPhone} />
																		</span>
																		<span className="menu__link-name">Contact</span>
																	</button>
																</li>
															: ``} 
															{menu.menu.key === KEY_EMERGENCY && item.edit ?
																<li className="menu__item">
																	<button className="menu__link" 
																			onClick={() => this.toggleModal("edit")}>
																		<span className="menu__link-icon">
																			<FontAwesomeIcon flip="horizontal" icon={faPencilAlt} />
																		</span>
																		<span className="menu__link-name">Edit</span>
																	</button>
																</li>
															: ``}
															{menu.menu.key === KEY_EMERGENCY && item.delete ?
																<li className="menu__item">
																	<button className="menu__link"
																			onClick={() => this.toggleModal("delete")}>
																		<span className="menu__link-icon">
																			<FontAwesomeIcon icon={faTrash} />
																		</span>
																		<span className="menu__link-name">Delete</span>
																	</button>
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

					</div>

					<div className="modals">

						<div className={`modal${this.state.modal ? ` modal--active` : ``}`}>
							<div className="modal__header">
								<div className="modal__heading">{LifeLineModals.find(modal => modal.key === this.state.modal)?.heading}</div>
								<button className="modal__close" onClick={() => this.toggleOverlay()}>
									<FontAwesomeIcon size={"lg"} icon={faTimes} />
								</button>
							</div>
							<div className="modal__body">
								{LifeLineModals.find(modal => modal.key === this.state.modal)?.body}
							</div>
							<div className="modal__footer">
								<button className="modal__btn modal__cancel" onClick={() => this.toggleOverlay()}>
									<span className="modal__btn-icon"><FontAwesomeIcon icon={faTimes} /></span>
									<span className="modal__btn-label">{LifeLineModals.find(modal => modal.key === this.state.modal)?.cancel}</span>
								</button>
								<button className="modal__btn modal__confirm" onClick={() => this.toggleOverlay()}>
									<span className="modal__btn-icon"><FontAwesomeIcon icon={faCheck} /></span>
									<span className="modal__btn-label">{LifeLineModals.find(modal => modal.key === this.state.modal)?.confirm}</span>
								</button>
							</div>
						</div>

					</div>

					<div className={`main__overlay${this.state.menu || this.state.modal ? ` main__overlay--active` : ``}`}
							onClick={() => this.toggleOverlay()}></div>

				
				</div>

			</div>
		);
	}
}

export default LifeLineMain;