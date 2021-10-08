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

export const LifeLineAppsStructure = [
	{ name: "Dashboard", path: "dashboard", icon: faThLarge, component: <LifeLineDashboard id={"dashboard"} />, close: true },
	{ name: "Blood Pressure", path: "bp", icon: faStethoscope, component: <LifeLineBloodPressure id={"bp"} />, close: true },
	{ name: "Oxygen", path: "oxy", icon: faDotCircle, component: <LifeLineOxygen id={"oxy"} />, close: true },
	{ name: "Electrocardiogram", path: "ekg", icon: faLaptopMedical, component: <LifeLineElectrocardiogram id={"ekg"} />, close: true },
	{ name: "Heart Rate", path: "hr", icon: faHeartbeat, component: <LifeLineHeartRate id={"hr"} />, close: true },
	{ name: "Medications", path: "meds", icon: faPrescription, component: <LifeLineMedications id={"meds"} />, close: true },
	{ name: "Physical Therapy", path: "pt", icon: faRunning, component: <LifeLinePhysicalTherapy id={"pt"} />, close: true },
	{ name: "Alarms", path: "alarms", icon: faBell, component: <LifeLineAlarms id={"alarms"} />, close: true },
	{ name: "Messages", path: "messages", icon: faCommentMedical, component: <LifeLineMessages id={"messages"} />, close: true },
	{ name: "Your Information", path: "info", icon: faInfo, component: <LifeLineInformation id={"info"} />, close: true }
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
	{ name: "Emergency", key: "emergency", icon: faExclamationTriangle, structure: LifeLineEmergencyStructure },
	{ name: "Apps", key: "apps", icon: faListUl, structure: LifeLineAppsStructure },
	{ name: "Settings", key: "settings", icon: faCog, structure: LifeLineSettingsStructure }
]