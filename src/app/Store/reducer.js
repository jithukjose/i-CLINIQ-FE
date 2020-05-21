import { combineReducers } from 'redux';
import medicineReducer from '../Container/Medicine/dux';

const rootReducer = combineReducers({
  medicineReducer,
});
export default rootReducer;
