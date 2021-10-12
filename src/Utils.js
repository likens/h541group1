import { faThLarge, faPrescription, faRunning, faCommentMedical, faInfo, faBell, faHeartbeat, faDotCircle, faStethoscope, faLaptopMedical, faAmbulance, faHospital, faUserMd, faUserNurse, faUser, faExclamationTriangle, faListUl, faCog } from '@fortawesome/free-solid-svg-icons';
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
		{ name: "Dashboard", key: "dashboard", icon: faThLarge, component: <LifeLineDashboard id={"dashboard"} /> },
		{ name: "Blood Pressure", key: "bp", icon: faStethoscope, component: <LifeLineBloodPressure id={"bp"} /> },
		{ name: "Oxygen", key: "oxy", icon: faDotCircle, component: <LifeLineOxygen id={"oxy"} /> },
		{ name: "Electrocardiogram", key: "ekg", icon: faLaptopMedical, component: <LifeLineElectrocardiogram id={"ekg"} /> },
		{ name: "Heart Rate", key: "hr", icon: faHeartbeat, component: <LifeLineHeartRate id={"hr"} /> },
		{ name: "Medications", key: "meds", icon: faPrescription, component: <LifeLineMedications id={"meds"} /> },
		{ name: "Physical Therapy", key: "pt", icon: faRunning, component: <LifeLinePhysicalTherapy id={"pt"} /> },
		{ name: "Alarms", key: "alarms", icon: faBell, component: <LifeLineAlarms id={"alarms"} /> },
		{ name: "Messages", key: "messages", icon: faCommentMedical, component: <LifeLineMessages id={"messages"} /> },
		{ name: "Your Information", key: "info", icon: faInfo, component: <LifeLineInformation id={"info"} /> }
	]
}

export const LifeLineEmergency = {
	key: KEY_EMERGENCY,
	structure: [	
		{ name: "911", key: "911", icon: faAmbulance, extra: true, edit: false, delete: false },
		{ name: "hospital", key: "hospital", icon: faHospital, extra: true, edit: false, delete: false },
		{ name: "doctor", key: "doctor", icon: faUserMd, extra: true, edit: false, delete: false },
		{ name: "nurse", key: "nurse", icon: faUserNurse, extra: true, edit: false, delete: false },
		{ name: "user1", key: "user1", icon: faUser, extra: true, edit: true, delete: true },
		{ name: "user2", key: "user2", icon: faUser, extra: true, edit: true, delete: true },
		{ name: "user3", key: "user3", icon: faUser, extra: true, edit: true, delete: true }
	]
}


export const LifeLineSettings = {
	key: KEY_SETTINGS,
	structure:  [
		{ name: "General", key: "general", extra: true, sub: [
			{ name: "Information" },
			{ name: "Storage" },
			{ name: "Linked Accounts" },
		] },
		{ name: "Accessibility", key: "accessibility", extra: true, sub: [
			{ name: "Subsettings 1" },
			{ name: "Subsettings 2" },
			{ name: "Subsettings 3" },
			{ name: "Subsettings 4" },
			{ name: "Subsettings 5" },
			{ name: "Subsettings 6" },
		] },
		{ name: "Connections" },
	]
}

export const LifeLineMenusStructure = [
	{ name: "Emergency", key: "emergency", icon: faExclamationTriangle, menu: LifeLineEmergency },
	{ name: "Apps", key: "apps", icon: faListUl, menu: LifeLineApps },
	{ name: "Settings", key: "settings", icon: faCog, menu: LifeLineSettings }
]

export const LifeLineModals = [
	{
		key: "contact",
		heading: "Test Modal",
		body: "This is just a test modal. Please click Yes, No, or Close to verify functionality. This is just a test modal. Please click Yes, No, or Close to verify functionality. This is just a test modal. Please click Yes, No, or Close to verify functionality.",
		confirm: "Yes",
		cancel: "No"
	}
]

export const BloodPressureHistoryData = [
	{ date: '9/1', sys: 120, dia: 80, hr: 65 },
	{ date: '9/2', sys: 110, dia: 90, hr: 70 },
	{ date: '9/3', sys: 115, dia: 75, hr: 68 },
	{ date: '9/4', sys: 125, dia: 85, hr: 75 },
	{ date: '9/5', sys: 140, dia: 95, hr: 76 },
	{ date: '9/6', sys: 130, dia: 80, hr: 74 },
	{ date: '9/7', sys: 120, dia: 90, hr: 67 },
	{ date: '9/8', sys: 120, dia: 80, hr: 65 },
	{ date: '9/9', sys: 110, dia: 90, hr: 70 },
	{ date: '9/10', sys: 115, dia: 75, hr: 68 },
	{ date: '9/11', sys: 125, dia: 85, hr: 75 },
	{ date: '9/12', sys: 140, dia: 95, hr: 76 },
	{ date: '9/13', sys: 130, dia: 80, hr: 74 },
	{ date: '9/14', sys: 120, dia: 90, hr: 67 },
	{ date: '9/15', sys: 120, dia: 80, hr: 65 },
	{ date: '9/16', sys: 110, dia: 90, hr: 70 },
	{ date: '9/17', sys: 115, dia: 75, hr: 68 },
	{ date: '9/18', sys: 125, dia: 85, hr: 75 },
	{ date: '9/19', sys: 140, dia: 95, hr: 76 },
	{ date: '9/20', sys: 130, dia: 80, hr: 74 },
	{ date: '9/21', sys: 120, dia: 90, hr: 67 },
];

  export const OxygenHistoryData = [
	{ date: '9/1', spo2: 99, hr: 70 },
	{ date: '9/2', spo2: 100, hr: 70 },
	{ date: '9/3', spo2: 99, hr: 70 },
	{ date: '9/4', spo2: 98, hr: 70 },
	{ date: '9/5', spo2: 95, hr: 70 },
	{ date: '9/6', spo2: 97, hr: 70 },
	{ date: '9/7', spo2: 99, hr: 70 }
];