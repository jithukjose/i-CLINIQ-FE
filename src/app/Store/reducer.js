import { combineReducers } from 'redux';
import medicineReducer from '../Container/Medicine/dux';
import testsReducer from '../Container/MedicalTests/dux';
import appointmentReducer from '../Container/Appointments/dux';
import doctorReducer from '../Container/Doctor/dux';
import dashboardReducer from '../Container/Dashboard/dux';

const rootReducer = combineReducers({
  medicineReducer,
  testsReducer,
  appointmentReducer,
  doctorReducer,
  dashboardReducer,
});
export default rootReducer;
