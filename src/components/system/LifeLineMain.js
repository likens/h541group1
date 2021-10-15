import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight, faCaretLeft, faTimes, faPhone, faPencilAlt, faTrash, faCheck, faPlus, faCamera } from '@fortawesome/free-solid-svg-icons';
import { LifeLineApps, LifeLineMenusStructure, LifeLineModals, LifeLineForms, LifeLineNotificationCenter, LifeLineNotifications, KEY_EMERGENCY, KEY_SETTINGS } from "../../Utils";

class LifeLineMain extends Component {

	constructor() {
		super();
		this.state = {
			app: {
				key: LifeLineApps.structure[0].key,
				idx: 0,
				component: LifeLineApps.structure[0].component,
				name: LifeLineApps.structure[0].name,
				description: LifeLineApps.structure[0].description,
				interactions: LifeLineApps.structure[0].interactions,
			},
			menu: undefined,
			submenu: undefined,
			modal: undefined,
			form: undefined,
			notification: undefined,
			notifications: {
				center: false,
				notifs: LifeLineNotificationCenter
			}
		}
		this.setInstructions(LifeLineApps.structure[0].name, 
							LifeLineApps.structure[0].description,
							LifeLineApps.structure[0].interactions);
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
				component: LifeLineApps.structure.find(app => app.key === key).component,
				name: LifeLineApps.structure.find(app => app.key === key).name,
				description: LifeLineApps.structure.find(app => app.key === key).description,
				interactions: LifeLineApps.structure.find(app => app.key === key).interactions,
			}
		});
		this.toggleMenu();
		this.setInstructions(LifeLineApps.structure.find(app => app.key === key).name,
							LifeLineApps.structure.find(app => app.key === key).description,
							LifeLineApps.structure.find(app => app.key === key).interactions);
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
			modal: key,
			form: key ? LifeLineModals.find(modal => modal.key === key)?.form : undefined 
		})
	}

	toggleOverlay() {
		this.setState({
			menu: undefined,
			submenu: undefined,
			modal: undefined,
			form: undefined,
			notifications: {
				center: false,
				notifs: this.state.notifications.notifs
			}
		})
	}

	toggleNotificationCenter(active) {
		const notifs = this.state.notifications.notifs.length ? this.state.notifications.notifs : [...LifeLineNotificationCenter];
		this.setState({
			notification: undefined,
			notifications: {
				center: active,
				notifs: notifs
			}
		});
	}

	removeNotification(key, center) {

		let notifs = [];
		let remove = {};

		if (center) {
			notifs = this.state.notifications.notifs;
			remove = notifs.findIndex(notif => notif.key === key);
			notifs.splice(remove, 1);
			this.setState({
				notifications: {
					center: notifs.length > 0 && this.state.notifications.center,
					notifs: notifs
				}
			});
		} else {
			this.setState({
				notification: undefined
			})
		}

	}

	setInstructions(name, description, interactions) {
		document.getElementById("title").innerHTML = name ? name : ``;
		document.getElementById("description").innerHTML = description ? description : ``;
		document.getElementById("interactions").innerHTML = interactions ? interactions : ``;
	}

	getRandomModal() {
		const idx = Math.floor(Math.random() * LifeLineModals.length);
		const key = LifeLineModals[idx].key;
		this.toggleModal(key);
	}

	getRandomNotification() {
		const idx = Math.floor(Math.random() * LifeLineNotifications.length);
		const key = LifeLineNotifications[idx].key;
		this.toggleNotification(key);
	}

	toggleNotification(key) {
		this.setState({
			notification: key,
			notifications: {
				...this.state.notifications,
				center: false
			}
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
						{this.state.app.key === "dashboard" ? 
						<div className="dash dash--snap">
							<button className="snap__btn" onClick={() => this.toggleModal("snap")}>
								<FontAwesomeIcon size={"4x"} icon={faCamera} />
								<br/>
								Snapshot
							</button>
						</div> : ``}
					</div>
					<div className="nav__item nav__item--next"
						onClick={() => this.goToApp(this.getAppKey(true))}>
						<FontAwesomeIcon size="7x" icon={faCaretRight} />	
					</div>

					<div className="notifications">

						<div className="notifications-fake" onClick={() => this.toggleNotificationCenter(!this.state.active)}></div>

						<div className={`notification-center${this.state.notifications.center ? ` notification-center--active`: ``}`}>
							{this.state?.notifications?.notifs?.map((n, i) => {
								return (
									<div key={i} className={`notify notify--active`}>
										<div className="notify__icon">
											<FontAwesomeIcon size={"3x"} icon={n.icon} />
										</div>
										<div className="notify__body">
											<div className="notify__header">{n.title}</div>
											<div className="notify__content">{n.body}</div>
										</div>
										<div className="notify__close">
											<button className="notify__close-btn" onClick={() => this.removeNotification(n.key, true)}>
												<FontAwesomeIcon size={"2x"} icon={faTimes} />
											</button>
										</div>
									</div>
								)
							})}
						</div>

						<div className={`notify notify--simple${this.state.notification ? ` notify--active` : ``}`}>
							<div className="notify__icon">
								{this.state.notification ? <FontAwesomeIcon size={"3x"} icon={LifeLineNotifications.find(notif => notif.key === this.state.notification)?.icon} /> : ``}
							</div>
							<div className="notify__body">
								<div className="notify__header">{LifeLineNotifications.find(notif => notif.key === this.state.notification)?.title}</div>
								<div className="notify__content">{LifeLineNotifications.find(notif => notif.key === this.state.notification)?.body}</div>
							</div>
							<div className="notify__close">
								<button className="notify__close-btn" onClick={() => this.removeNotification(LifeLineNotifications.find(notif => notif.key === this.state.notification)?.key, false)}>
									<FontAwesomeIcon size={"2x"} icon={faTimes} />
								</button>
							</div>
						</div>

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
																		<button className="menu__link"
																			onClick={() => this.toggleModal(sub.modal)}>
																			<span className="menu__link-icon"></span>
																			<span className="menu__link-name">{sub.name}</span>
																		</button>
																	</li>
																)
															})}
														</ul>
													</li>
												)
											})}
											{menu.menu.key === KEY_EMERGENCY ?
												<li key={i} className="menu__item">
													<button className={`add__btn`} onClick={() => this.toggleModal("add")}>
														<span className="add__btn-icon">
															<FontAwesomeIcon size="lg" icon={faPlus} />
														</span>
														<span className="add__btn-label">Add</span>
													</button>
												</li>
											: ``}
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
									{LifeLineModals.find(modal => modal.key === this.state.modal)?.form ? 
										<div className="form">
											{LifeLineForms.find(form => form?.key === this.state.form)?.fields.map((field, i) => {
												return (
													<div key={i} className="field">
														{field.type === "text" || 
														field.type === "ddl" || 
														field.type === "radio" ||
														field.type === "label" ||
														field.type === "button" ? 
															<label htmlFor={i} className="field__label">{field.label}</label>
														: ``}
														{field.type === "text" ? <input id={i} type="text" className="field__text" /> : ``}
														{field.type === "label" ? <div className="field__value">{field.value}</div> : ``}
														{field.type === "button" ? <button className="field__button">{field.value}</button> : ``}
														{field.type === "radio" ? 
															<div className="field__radio-opt">
																{field.options.map((o, i) => {
																	return (
																		<Fragment>
																			<input id={field.label+i} type="radio" name={field.label} className="field__radio" /> 
																			<label htmlFor={field.label+i} key={i} className="field__radio-lbl">{o}</label>
																		</Fragment>
																	)
																})}
															</div>
														: ``}
														{field.type === "check" ? 
															<Fragment>
																<input id={i} checked={field.checked} type="checkbox" className="field__check" /> 
																<label htmlFor={i} className="field__label">{field.label}</label>
															</Fragment>
														: ``}
													</div>
												)
											})}
										</div>
									: ``}
							</div>
							<div className="modal__footer">
								{LifeLineModals.find(modal => modal.key === this.state.modal)?.cancel ? 
									<button className="modal__btn modal__cancel" onClick={() => this.toggleOverlay()}>
										<span className="modal__btn-icon"><FontAwesomeIcon icon={faTimes} /></span>
										<span className="modal__btn-label">{LifeLineModals.find(modal => modal.key === this.state.modal)?.cancel}</span>
									</button>
									: ``}
								<button className="modal__btn modal__confirm" onClick={() => this.toggleOverlay()}>
									<span className="modal__btn-icon"><FontAwesomeIcon icon={faCheck} /></span>
									<span className="modal__btn-label">{LifeLineModals.find(modal => modal.key === this.state.modal)?.confirm}</span>
								</button>
							</div>
						</div>
					</div>

					<div className={`main__overlay${this.state.menu || this.state.modal || this.state.notifications.center ? ` main__overlay--active` : ``}`}
							onClick={() => this.toggleOverlay()}></div>

					<button className="test__btn" id="modalTest" onClick={() => this.getRandomModal()}></button>
					<button className="test__btn" id="notifyTest" onClick={() => this.getRandomNotification()}></button>
				
				</div>

			</div>

		);
	}
}

export default LifeLineMain;