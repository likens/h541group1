import { faThLarge, faHeartbeat, faDotCircle, faStethoscope, faLaptopMedical, faAmbulance, faHospital, faUserMd, faUser, faExclamationTriangle, faListUl, faCog, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import LifeLineDashboard from './components/applications/LifeLineDashboard';
import LifeLineBloodPressure from './components/applications/LifeLineBloodPressure';
import LifeLineOxygen from './components/applications/LifeLineOxygen';
import LifeLineElectrocardiogram from './components/applications/LifeLineElectrocardiogram';
import LifeLineHeartRate from './components/applications/LifeLineHeartRate';
import LifeLineCalendar from './components/applications/LifeLineCalendar';

export const KEY_APPS = 'apps';
export const KEY_EMERGENCY = 'emergency';
export const KEY_SETTINGS = 'settings';

export const LifeLineApps = {
	key: KEY_APPS,
	structure: [
		{ name: "Dashboard", key: "dashboard", icon: faThLarge, component: <LifeLineDashboard /> },
		{ name: "Blood Pressure", key: "bp", icon: faStethoscope, component: <LifeLineBloodPressure /> },
		{ name: "Oxygen Saturation", key: "oxy", icon: faDotCircle, component: <LifeLineOxygen /> },
		{ name: "Heart Rate", key: "hr", icon: faHeartbeat, component: <LifeLineHeartRate /> },
		{ name: "Electrocardiogram", key: "ekg", icon: faLaptopMedical, component: <LifeLineElectrocardiogram /> },
		{ name: "Calendar", key: "calendar", icon: faCalendarAlt, component: <LifeLineCalendar /> }
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
			{ name: "Light mode" },
			{ name: "Dark mode" },
			{ name: "Easy mode" },
			{ name: "Mode Suggestions" },
			{ name: "Enhancements" },
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
		body: "Would you like to contact '{CONTACT_DISPLAY_NAME}'?",
		confirm: "Yes",
		cancel: "No"
	},
	{
		key: "delete",
		heading: "Delete Contact",
		body: "You are about to delete '{CONTACT_DISPLAY_NAME}'. Proceed?",
		confirm: "Delete",
		cancel: "Cancel"
	},
	{
		key: "edit",
		heading: "Edit Contact",
		confirm: "Save",
		cancel: "Cancel",
		form: "edit"
	},
	{
		key: "add",
		heading: "Add Contact",
		confirm: "Add",
		cancel: "Cancel",
		form: "add"
	},
	{
		key: "snap",
		heading: "Send Snapshot",
		body: "Send a snapshot of your current heart health to your doctor, hospital, and other contacts that have been approved to receive it?",
		confirm: "Send",
		cancel: "Cancel"
	}
]

export const LifeLineForms = [
	{
		key: "edit",
		fields: [
			{ type: "text", label: "Display As" },
			{ type: "text", label: "Phone Number" },
			{ type: "check", label: "Receive Heart Health Snapshot"}
		]
	},
	{
		key: "add",
		fields: [
			{ type: "text", label: "Display As" },
			{ type: "text", label: "Phone Number" },
			{ type: "check", label: "Receive Heart Health Snapshot"}
		]
	}
]

export const BloodPressureSys = [110, 150];
export const BloodPressureDia = [70, 100];
export const BloodPressureHr = [45, 100];
export const BloodPressureHistoryData = generateTestData(14, "sys", BloodPressureSys, "dia", BloodPressureDia, "hr", BloodPressureHr);

export const OxygenSpo2 = [90, 100];
export const OxygenHr = [45, 100];
export const OxygenHistoryData = generateTestData(14, "spo2", OxygenSpo2, "hr", OxygenHr);

export const HeartRateHr = [50, 150];
export const HeartRateHistoryData = generateTestData(14, "hr", HeartRateHr);

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

export const CalendarData = {
	hours: [1, 12],
	doses: [5, 50],
	lengths: [10, 120],
	meds: ["Aspirin", "Clopidogrel", "Warfarin", "Lisinopril", "Benazepril", "Losartan"],
	exercises: ["walking", "running", "cycling", "swimming", "stretching", "cardio"],
	appointments: ["Dr. Stanielson", "Cardiologist", "Nurse LaGuardia", "Hospital Admin", "Dietician", "Personal Trainer"]
}