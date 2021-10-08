import { faThLarge, faPrescription, faRunning, faCommentMedical, faInfo, faBell, faHeartbeat, faDotCircle, faStethoscope, faLaptopMedical, faAmbulance, faHospital, faUserMd, faUserNurse, faUser, faExclamation, faListUl, faCog, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

export const LifeLineAppsStructure = [
	{ name: "Dashboard", path: "", icon: faThLarge, component: undefined },
	{ name: "Blood Pressure", path: "bp", icon: faStethoscope, component: undefined },
	{ name: "Oxygen", path: "oxy", icon: faDotCircle, component: undefined },
	{ name: "Electrocardiogram", path: "ekg", icon: faLaptopMedical, component: undefined },
	{ name: "Heart Rate", path: "hr", icon: faHeartbeat, component: undefined },
	{ name: "Medications", path: "meds", icon: faPrescription, component: undefined },
	{ name: "Physical Therapy", path: "pt", icon: faRunning, component: undefined },
	{ name: "Alarms", path: "alarms", icon: faBell, component: undefined },
	{ name: "Messages", path: "messages", icon: faCommentMedical, component: undefined },
	{ name: "Your Information", path: "info", icon: faInfo, component: undefined }
]

export const LifeLineEmergencyStructure = [
	{ name: "911", icon: faAmbulance, extra: faCaretRight, edit: false, delete: false },
	{ name: "{HOSPITAL_NAME}", icon: faHospital, extra: faCaretRight, edit: false, delete: false },
	{ name: "{DOCTORS_NAME}", icon: faUserMd, extra: faCaretRight, edit: false, delete: false },
	{ name: "{NURSES_OFFICE}", icon: faUserNurse, extra: faCaretRight, edit: false, delete: false },
	{ name: "{SPOUSE_NAME}", icon: faUser, extra: faCaretRight, edit: true, delete: true },
	{ name: "{PARENT_NAME}", icon: faUser, extra: faCaretRight, edit: true, delete: true },
	{ name: "{CHILD_NAME}", icon: faUser, extra: faCaretRight, edit: true, delete: true },
	{ name: "Another User", icon: faUser, extra: faCaretRight, edit: true, delete: true },
	{ name: "And Another User", icon: faUser, extra: faCaretRight, edit: true, delete: true },
	{ name: "One More User Couldn't Hurt", icon: faUser, extra: faCaretRight, edit: true, delete: true }
]

export const LifeLineSettingsStructure = [
	{ name: "General", extra: faCaretLeft },
	{ name: "Connections", extra: faCaretLeft },
	{ name: "Accessibility", extra: faCaretLeft },
	{ name: "Another Setting", extra: faCaretLeft },
	{ name: "And Another Setting", extra: faCaretLeft },
	{ name: "Sure, Give Me Another Setting", extra: faCaretLeft },
]

export const LifeLineMenusStructure = [
	{ name: "Emergency", icon: faExclamation, structure: LifeLineEmergencyStructure },
	{ name: "Apps", icon: faListUl, structure: LifeLineAppsStructure },
	{ name: "Settings", icon: faCog, structure: LifeLineSettingsStructure }
]