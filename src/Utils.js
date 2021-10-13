import { faThLarge, faPrescription, faRunning, faBell, faHeartbeat, faDotCircle, faStethoscope, faLaptopMedical, faAmbulance, faHospital, faUserMd, faUser, faExclamationTriangle, faListUl, faCog } from '@fortawesome/free-solid-svg-icons';
import LifeLineDashboard from './components/applications/LifeLineDashboard';
import LifeLineBloodPressure from './components/applications/LifeLineBloodPressure';
import LifeLineOxygen from './components/applications/LifeLineOxygen';
import LifeLineElectrocardiogram from './components/applications/LifeLineElectrocardiogram';
import LifeLineHeartRate from './components/applications/LifeLineHeartRate';
import LifeLineMedications from './components/applications/LifeLineMedications';
import LifeLinePhysicalTherapy from './components/applications/LifeLinePhysicalTherapy';
import LifeLineAlarms from './components/applications/LifeLineAlarms';

export const KEY_APPS = 'apps';
export const KEY_EMERGENCY = 'emergency';
export const KEY_SETTINGS = 'settings';

export const LifeLineApps = {
	key: KEY_APPS,
	structure: [
		{ name: "Dashboard", key: "dashboard", icon: faThLarge, component: <LifeLineDashboard id={"dashboard"} /> },
		{ name: "Blood Pressure", key: "bp", icon: faStethoscope, component: <LifeLineBloodPressure id={"bp"} /> },
		{ name: "Oxygen Saturation", key: "oxy", icon: faDotCircle, component: <LifeLineOxygen id={"oxy"} /> },
		{ name: "Heart Rate", key: "hr", icon: faHeartbeat, component: <LifeLineHeartRate id={"hr"} /> },
		{ name: "Electrocardiogram", key: "ekg", icon: faLaptopMedical, component: <LifeLineElectrocardiogram id={"ekg"} /> },
		{ name: "Medications", key: "meds", icon: faPrescription, component: <LifeLineMedications id={"meds"} /> },
		{ name: "Physical Therapy", key: "pt", icon: faRunning, component: <LifeLinePhysicalTherapy id={"pt"} /> },
		{ name: "Alarms", key: "alarms", icon: faBell, component: <LifeLineAlarms id={"alarms"} /> }
	]
}

export const LifeLineEmergency = {
	key: KEY_EMERGENCY,
	structure: [	
		{ name: "911", key: "911", icon: faAmbulance, extra: true, edit: false, delete: false },
		{ name: "hospital", key: "hospital", icon: faHospital, extra: true, edit: false, delete: false },
		{ name: "doctor", key: "doctor", icon: faUserMd, extra: true, edit: false, delete: false },
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
		heading: "Contact User",
		body: "Would you like to contact '{USER_DISPLAY_NAME}'?",
		confirm: "Yes",
		cancel: "No"
	},
	{
		key: "delete",
		heading: "Delete User",
		body: "You are about to delete '{USER_DISPLAY_NAME}'. Proceed?",
		confirm: "Delete",
		cancel: "Cancel"
	},
	{
		key: "edit",
		heading: "Edit User",
		confirm: "Save",
		cancel: "Cancel",
		form: "edit"
	},
	{
		key: "add",
		heading: "Add User",
		confirm: "Add",
		cancel: "Cancel",
		form: "add"
	}
]

export const LifeLineForms = [
	{
		key: "edit",
		fields: [
			{ type: "text", label: "Display As" },
			{ type: "text", label: "Phone Number" }
		]
	},
	{
		key: "add",
		fields: [
			{ type: "text", label: "Display As" },
			{ type: "text", label: "Phone Number" }
		]
	}
]

export const BloodPressureHistoryData = generateTestData(14, "sys", [110, 150], "dia", [70, 100], "hr", [45, 100]);
export const OxygenHistoryData = generateTestData(14, "spo2", [90, 100], "hr", [45, 100]);
export const HeartRateHistoryData = generateTestData(14, "hr", [50, 150]);

function generateTestData(days, key1, data1, key2, data2, key3, data3) {
	const data = [];
	for(let i = 0; i <= days; i++) {
		let obj = {
			date: `Sep ${i}`,
		}
		if (key1) {
			obj[key1] = Math.floor(Math.random() * (data1[1] - data1[0] + 1)) + data1[0];
		}
		if (key2) {
			obj[key2] = Math.floor(Math.random() * (data2[1] - data2[0] + 1)) + data2[0];
		}
		if (key3) {
			obj[key3] = Math.floor(Math.random() * (data3[1] - data3[0] + 1)) + data3[0];
		}
		data.push(obj);
	}
	return data;
}