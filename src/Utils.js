import { faThLarge, faPrescription, faRunning, faCommentMedical, faInfo, faBell, faHeartbeat, faDotCircle, faStethoscope, faLaptopMedical, faAmbulance, faHospital, faUserMd, faUserNurse, faUser, faExclamationTriangle, faListUl, faCog, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import LifeLineDashboard from './components/applications/LifeLineDashboard';
import LifeLineBloodPressure from './components/applications/LifeLineBloodPressure';
import LifeLineOxygen from './components/applications/LifeLineOxygen';
import LifeLineElectrocardiogram from './components/applications/LifeLineElectrocardiogram';
import LifeLineHeartRate from './components/applications/LifeLineHeartRate';
import LifeLineMedications from './components/applications/LifeLineMedications';
import LifeLinePhysicalTherapy from './components/applications/LifeLinePhysicalTherapy';
import LifeLineAlarms from './components/applications/LifeLineAlarms';
import LifeLineMessages from './components/applications/LifeLineMessages';
import LifeLineInformation from './components/applications/LifeLineInformation';

export const KEY_APPS = 'apps';
export const KEY_EMERGENCY = 'emergency';
export const KEY_SETTINGS = 'settings';

export const LifeLineApps = {
	key: KEY_APPS,
	structure: [
		{ name: "Dashboard", key: "dashboard", icon: faThLarge, component: <LifeLineDashboard id={"dashboard"} />, close: true },
		{ name: "Blood Pressure", key: "bp", icon: faStethoscope, component: <LifeLineBloodPressure id={"bp"} />, close: true },
		{ name: "Oxygen", key: "oxy", icon: faDotCircle, component: <LifeLineOxygen id={"oxy"} />, close: true },
		{ name: "Electrocardiogram", key: "ekg", icon: faLaptopMedical, component: <LifeLineElectrocardiogram id={"ekg"} />, close: true },
		{ name: "Heart Rate", key: "hr", icon: faHeartbeat, component: <LifeLineHeartRate id={"hr"} />, close: true },
		{ name: "Medications", key: "meds", icon: faPrescription, component: <LifeLineMedications id={"meds"} />, close: true },
		{ name: "Physical Therapy", key: "pt", icon: faRunning, component: <LifeLinePhysicalTherapy id={"pt"} />, close: true },
		{ name: "Alarms", key: "alarms", icon: faBell, component: <LifeLineAlarms id={"alarms"} />, close: true },
		{ name: "Messages", key: "messages", icon: faCommentMedical, component: <LifeLineMessages id={"messages"} />, close: true },
		{ name: "Your Information", key: "info", icon: faInfo, component: <LifeLineInformation id={"info"} />, close: true }
	]
}

export const LifeLineEmergency = {
	key: KEY_EMERGENCY,
	structure: [	
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
}


export const LifeLineSettings = {
	key: KEY_SETTINGS,
	structure:  [
		{ name: "General", extra: faCaretLeft, sub: [
			{ name: "Subsettings 1" },
			{ name: "Subsettings 2" },
			{ name: "Subsettings 3" },
		] },
		{ name: "Connections", extra: faCaretLeft, sub: [
			{ name: "Subsettings 1" },
			{ name: "Subsettings 2" },
		] },
		{ name: "Accessibility", extra: faCaretLeft, sub: [
			{ name: "Subsettings 1" },
			{ name: "Subsettings 2" },
			{ name: "Subsettings 3" },
			{ name: "Subsettings 4" },
			{ name: "Subsettings 5" },
			{ name: "Subsettings 6" },
		] },
		{ name: "Another Setting", extra: faCaretLeft },
		{ name: "And Another Setting", extra: faCaretLeft },
		{ name: "Sure, Give Me Another Setting", extra: faCaretLeft },
	]
}

export const LifeLineMenusStructure = [
	{ name: "Emergency", key: "emergency", icon: faExclamationTriangle, menu: LifeLineEmergency },
	{ name: "Apps", key: "apps", icon: faListUl, menu: LifeLineApps },
	{ name: "Settings", key: "settings", icon: faCog, menu: LifeLineSettings }
]