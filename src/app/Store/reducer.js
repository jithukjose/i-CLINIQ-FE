import { combineReducers } from 'redux';
import medicineReducer from '../Container/Medicine/dux';
import testsReducer from '../Container/MedicalTests/dux';
import appointmentReducer from '../Container/Appointments/dux';

const rootReducer = combineReducers({
  medicineReducer,
  testsReducer,
  appointmentReducer,
});
export default rootReducer;
