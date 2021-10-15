import { faThLarge, faHeartbeat, faDotCircle, faStethoscope, faLaptopMedical, faAmbulance, faHospital, faUserMd, faUser, faExclamationTriangle, faListUl, faCog, faCalendarAlt, faPrescription, faRunning, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
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
		{ 
			name: "Dashboard", 
			key: "dashboard", 
			icon: faThLarge,
			component: <LifeLineDashboard />, 
			description: "The default view for the device once fully booted. Contains live or most recent reading of Electrocardiogram (specifically heart rate), Blood Pressure (Systolic & Diastolic), Blood Oxygen saturation (SP02), and a list of upcoming events/reminder.", 
			interactions: "<ul><li>Snapshot- located in the center of the app, is a feature to send current or most recent health info to your doctor,hospital, or other authorized contact. When clicked, displays pop up prompt. </li><li>Notification Tray – located in top left corner of screen. When clicked, displays  current notifications, reminders, and events.</li><li>Navigation arrows – Located on the left and right sides of the screen. When clicked, cycles either forward or backward through apps.</li><li>Navigation Menus – Located at the bottom of the screen. When clicked opens up menus (and submenus) of the respective features (emergency contacts, apps list, and settings).</li></ul>" 
		},
		{ 
			name: "Blood Pressure",
			key: "bp", 
			icon: faStethoscope, 
			component: <LifeLineBloodPressure />,
			description: "Application for measuring current systolic and diastolic blood pressure, as well as bpm.", 
			interactions: "<ul><li>Start Measurement – initializes device measurement, after 5 seconds displays the	reading to the user. </li><li>Show/Hide History – Expands or closes a line graph that represents the last 2 weeks of readings for the respective measurement.</li></ul>" 
		},
		{ 
			name: "Oxygen Saturation",
			key: "oxy",
			icon: faDotCircle,
			component: <LifeLineOxygen />,
			description: "Application for measuring current Oxygen saturation (SP02), as well as bpm.", 
			interactions: "<ul><li>Start Measurement – initializes device measurement, after 5 seconds displays the	reading to the user. </li><li>Show/Hide History – Expands or closes a line graph that represents the last 2 weeks of readings for the respective measurement.</li></ul>"
		},
		{ 
			name: "Heart Rate", 
			key: "hr", 
			icon: faHeartbeat, 
			component: <LifeLineHeartRate />,
			description: "Application for measuring heart rate (bpm).", 
			interactions: "<ul><li>Start Measurement – initializes device measurement, after 5 seconds displays the	reading to the user. </li><li>Show/Hide History – Expands or closes a line graph that represents the last 2 weeks of readings for the respective measurement.</li></ul>"

		},
		{ 
			name: "Electrocardiogram", 
			key: "ekg", 
			icon: faLaptopMedical, 
			component: <LifeLineElectrocardiogram />,
			description: "Application that displays what we consider to be a traditional ECG display (also displays BPM, SP02, and Respiratory count by minute."
		},
		{
			name: "Calendar",
			key: "calendar",
			icon: faCalendarAlt,
			component: <LifeLineCalendar />,
			description: "An application that displays a calendar and list view of events regarding	medications, physical therapy, and any other upcoming events (such as doctor appointments)."
		}
	]
}

export const LifeLineEmergency = {
	key: KEY_EMERGENCY,
	structure: [	
		{ name: "911", key: "911", icon: faAmbulance, extra: true, edit: false, delete: false },
		{ name: "hospital", key: "hospital", icon: faHospital, extra: true, edit: false, delete: false },
		{ name: "doctor", key: "doctor", icon: faUserMd, extra: true, edit: false, delete: false },
		{ name: "Hospital Admin", key: "user1", icon: faUser, extra: true, edit: true, delete: true },
		{ name: "Cardiologist Office", key: "user2", icon: faUser, extra: true, edit: true, delete: true },
		{ name: "CVS Pharmacy", key: "user3", icon: faUser, extra: true, edit: true, delete: true },
		{ name: "Spouse", key: "user4", icon: faUser, extra: true, edit: true, delete: true }
	]
}

export const LifeLineSettings = {
	key: KEY_SETTINGS,
	structure:  [
		{ name: "General", key: "general", extra: true, sub: [
			{ name: "Information", modal: "settingsInfo", form: "settingsInfo" },
			{ name: "Storage", modal: "settingsStorage", form: "settingsStorage" },
			{ name: "Connections", modal: "settingsConnections", form: "settingsConnections" },
			{ name: "Languages", modal: "settingsLanguage", form: "settingsLanguage" }
		] },
		{ name: "Accessibility", key: "accessibility", extra: true, sub: [
			{ name: "Visual Modes", modal: "settingsVisualModes", form: "settingsVisualModes" },
			{ name: "Visibility Enhancements", modal: "settingsVisibilityEnhancements", form: "settingsVisibilityEnhancements" },
			{ name: "Hearing Enhancements", modal: "settingsHearingEnhancements", form: "settingsHearingEnhancements" },
			{ name: "Interaction Controls", modal: "settingsInteractionControls", form: "settingsInteractionControls" },
		] },
		{ name: "Applications", key: "applications", extra: true, sub: [
			{ name: "Blood Pressure", modal: "settingsBloodPressure", form: "settingsBloodPressure" },
			{ name: "Oxygen Saturation", modal: "settingsOxygenSaturation", form: "settingsOxygenSaturation" },
			{ name: "Heart Rate", modal: "settingsHeartRate", form: "settingsHeartRate" },
			{ name: "Calendar", modal: "settingsCalendar", form: "settingsCalendar" },
		] },
	]
}

export const LifeLineMenusStructure = [
	{ name: "Emergency", key: "emergency", icon: faExclamationTriangle, menu: LifeLineEmergency },
	{ name: "Apps", key: "apps", icon: faListUl, menu: LifeLineApps },
	{ name: "Settings", key: "settings", icon: faCog, menu: LifeLineSettings }
]

const settingsObj = {
	heading: "Edit Settings",
	confirm: "Save",
	cancel: "Cancel"
}

export const LifeLineModals = [
	{
		key: "contact",
		heading: "Contact User",
		body: `Would you like to contact 'name_goes_here'?`,
		confirm: "Yes",
		cancel: "No"
	},
	{
		key: "delete",
		heading: "Delete Contact",
		body: `You are about to delete 'name_goes_here'. Proceed?`,
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
		body: "Send a snapshot of your current heart health to your doctor, hospital, and other contacts that have been authorized to receive the report?",
		confirm: "Send",
		cancel: "Cancel"
	},
	{
		key: "med",
		heading: "Medication Reminder",
		body: "Please take 25mg Lisinopril now.",
		confirm: "Ok"
	},
	{
		key: "pt",
		heading: "Physical Therapy Reminder",
		body: "Please start your recommended 2 mile walk now.",
		confirm: "Ok"
	},
	{
		key: "appt",
		heading: "Appointment Reminder",
		body: "Your appointment with Dr. Stanielson will start soon.",
		confirm: "Ok"
	},
	{
		...settingsObj,
		heading: "Edit Information",
		key: "settingsInfo",
		form: "settingsInfo",
		confirm: "Ok",
		cancel: undefined
	},
	{
		...settingsObj,
		heading: "Edit Storage",
		key: "settingsStorage",
		form: "settingsStorage",
		confirm: "Ok",
		cancel: undefined
	},
	{
		...settingsObj,
		heading: "Edit Connections",
		key: "settingsConnections",
		form: "settingsConnections"
	},
	{
		...settingsObj,
		heading: "Edit Languages",
		key: "settingsLanguage",
		form: "settingsLanguage"
	},
	{
		...settingsObj,
		heading: "Edit Blood Pressure",
		key: "settingsBloodPressure",
		form: "settingsBloodPressure"
	},
	{
		...settingsObj,
		heading: "Edit Oxygen Saturation",
		key: "settingsOxygenSaturation",
		form: "settingsOxygenSaturation"
	},
	{
		...settingsObj,
		heading: "Edit Heart Rate",
		key: "settingsHeartRate",
		form: "settingsHeartRate"
	},
	{
		...settingsObj,
		heading: "Edit Calendar",
		key: "settingsCalendar",
		form: "settingsCalendar"
	},
	{
		...settingsObj,
		heading: "Edit Visual Modes",
		key: "settingsVisualModes",
		form: "settingsVisualModes"
	},
	{
		...settingsObj,
		heading: "Edit Visibility Enhancements",
		key: "settingsVisibilityEnhancements",
		form: "settingsVisibilityEnhancements"
	},
	{
		...settingsObj,
		heading: "Edit Hearing Enhancements",
		key: "settingsHearingEnhancements",
		form: "settingsHearingEnhancements"
	},
	{
		...settingsObj,
		heading: "Edit Interaction Controls",
		key: "settingsInteractionControls",
		form: "settingsInteractionControls"
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
	},
	{
		key: "settingsInfo",
		fields: [
			{ type: "label", label: "Name", value: "Jimmothy Jimmothy" },
			{ type: "label", label: "Email", value: "jimmothy@jimmothy.com" },
			{ type: "label", label: "Phone", value: "(123) 456 - 7890"},
			{ type: "label", label: "Address", value: "123 Smiley Lane, Happiness, HN, 12345-6789"}
		]
	},
	{
		key: "settingsStorage",
		fields: [
			{ type: "label", label: "Last Data Transfer", value: "7 days ago" },
			{ type: "label", label: "Next Data Transfer", value: "7 days" },
			{ type: "label", label: "Space Available", value: "20 GB / 120 GB"}
		]
	},
	{
		key: "settingsConnections",
		fields: [
			{ type: "text", label: "WiFi Name" },
			{ type: "text", label: "WiFi Password" },
			{ type: "button", label: "Bluetooth", value: "Pair Bluetooth" },
			{ type: "check", label: "Enable GPS"}
		]
	},
	{
		key: "settingsLanguage",
		fields: [
			{ type: "radio", label: "Language", options: ["English", "Spanish", "Chinese", "Arabic", "French"] }
		]
	},
	{
		key: "settingsBloodPressure",
		fields: [
			{ type: "radio", label: "Historical Timeline", options: ["Last 2 Weeks", "Last 24 Hours", "Last Week", "Last 30 Days"] }
		]
	},
	{
		key: "settingsOxygenSaturation",
		fields: [
			{ type: "radio", label: "Historical Timeline", options: ["Last 2 Weeks", "Last 24 Hours", "Last Week", "Last 30 Days"] }
		]
	},
	{
		key: "settingsHeartRate",
		fields: [
			{ type: "radio", label: "Historical Timeline", options: ["Last 2 Weeks", "Last 24 Hours", "Last Week", "Last 30 Days"] }
		]
	},
	{
		key: "settingsCalendar",
		fields: [
			{ type: "radio", label: "Military Time", options: ["Yes", "No"] },
			{ type: "radio", label: "Start Day of Week", options: ["Sunday", "Monday"]},
			{ type: "check", label: "Enable Medications", checked: true},
			{ type: "check", label: "Enable Physical Therapy", checked: true},
			{ type: "check", label: "Appointments", checked: true }
		]
	},
	{
		key: "settingsVisualModes",
		fields: [
			{ type: "radio", label: "Color Mode", options: ["Dark", "Light", "Easy"] },
			{ type: "button", label: "Mode Suggestion", value: "Take Quiz" },
		]
	},
	{
		key: "settingsVisibilityEnhancements",
		fields: [
			{ type: "radio", label: "Contrast", options: ["Standard", "High", "Low"] },
			{ type: "radio", label: "Color Lens", options: ["Deuteranomaly", "Protanopia", "Deuteranopia", "Tritanopia"] },
			{ type: "radio", label: "Font Size", options: ["Normal", "Larger", "Largest"] },
		]
	},
	{
		key: "settingsHearingEnhancements",
		fields: [
			{ type: "radio", label: "Hearing Aid Support", options: ["No", "Yes"] },
			{ type: "radio", label: "Amplify Sounds", options: ["No", "Yes"] },
			{ type: "radio", label: "Narration", options: ["No", "Yes"] }
		]
	},
	{
		key: "settingsInteractionControls",
		fields: [
			{ type: "radio", label: "Enable Swiping", options: ["No", "Yes"] },
			{ type: "radio", label: "Touch Delay", options: ["No", "Yes"] }
		]
	}
]

export const LifeLineNotificationCenter = [
	{
		key: "center1",
		icon: faPrescription,
		title: "Medication Reminder",
		body: "25mg Lisinopril is due to be taken in 60 minutes (7:00am)"
	}, 
	{
		key: "center2",
		icon: faPrescription,
		title: "Medication Reminder",
		body: "5mg Aspirin is due to be taken in 60 minutes (7:00am)"
	}, 
	{
		key: "center3",
		icon: faRunning,
		title: "Physical Therapy Reminder",
		body: "Start 2 mile walk in 120 minutes (9:00am)"
	}, 
	{
		key: "center4",
		icon: faCalendarDay,
		title: "Appointment Reminder",
		body: "Appointment with Dr. Stanielson today (2:00pm)"
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
	for(let i = 1; i <= days; i++) {
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
	meridiem: ["am", "pm"],
	doses: [5, 50],
	lengths: [10, 120],
	meds: ["Aspirin", "Clopidogrel", "Warfarin", "Lisinopril", "Benazepril", "Losartan"],
	exercises: ["walking", "running", "cycling", "swimming", "stretching", "cardio"],
	appointments: ["Dr. Stanielson", "Cardiologist", "Nurse LaGuardia", "Hospital Admin", "Dietician", "Personal Trainer"]
}