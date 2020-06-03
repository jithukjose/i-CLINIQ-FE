import { combineReducers } from 'redux';
import medicineReducer from '../Container/Medicine/dux';
import testsReducer from '../Container/MedicalTests/dux';
import appointmentReducer from '../Container/Appointments/dux';
import doctorReducer from '../Container/Doctor/dux';
import dashboardReducer from '../Container/Dashboard/dux';
import labtechnicianReducer from '../Container/LabTechnician/dux';

const rootReducer = combineReducers({
  medicineReducer,
  testsReducer,
  appointmentReducer,
  doctorReducer,
  dashboardReducer,
  labtechnicianReducer,
});
export default rootReducer;
