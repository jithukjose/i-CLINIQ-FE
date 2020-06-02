const GET_ALL_APPOINTMENTCOUNT_START = 'ADMIN/GET_ALL_APPOINTMENTCOUNT_START';
const GET_ALL_APPOINTMENTCOUNT_SUCCESS =
  'ADMIN/GET_ALL_APPOINTMENTCOUNT_SUCCESS';
const GET_ALL_APPOINTMENTCOUNT_FAIL = 'ADMIN/GET_ALL_APPOINTMENTCOUNT_FAIL';

const GET_ALL_MEDICINECOUNT_START = 'ADMIN/GET_ALL_MEDICINECOUNT_START';
const GET_ALL_MEDICINECOUNT_SUCCESS = 'ADMIN/GET_ALL_MEDICINECOUNT_SUCCESS';
const GET_ALL_MEDICINECOUNT_FAIL = 'ADMIN/GET_ALL_MEDICINECOUNT_FAIL';

const GET_ALL_TESTSCOUNT_START = 'ADMIN/GET_ALL_TESTSCOUNT_START';
const GET_ALL_TESTSCOUNT_SUCCESS = 'ADMIN/GET_ALL_TESTSCOUNT_SUCCESS';
const GET_ALL_TESTSCOUNT_FAIL = 'ADMIN/GET_ALL_TESTSCOUNT_FAIL';

const GET_ALL_DOCTOR_COUNT_START = 'ADMIN/GET_ALL_DOCTOR_COUNT_START';
const GET_ALL_DOCTOR_COUNT_SUCCESS = 'ADMIN/GET_ALL_DOCTOR_COUNT_SUCCESS';
const GET_ALL_DOCTOR_COUNT_FAIL = 'ADMIN/GET_ALL_DOCTOR_COUNT_FAIL';

const GET_ALL_LABTECHNICIAN_COUNT_START =
  'ADMIN/GET_ALL_LABTECHNICIAN_COUNT_START';
const GET_ALL_LABTECHNICIAN_COUNT_SUCCESS =
  'ADMIN/GET_ALL_LABTECHNICIAN_COUNT_SUCCESS';
const GET_ALL_LABTECHNICIAN_COUNT_FAIL =
  'ADMIN/GET_ALL_LABTECHNICIAN_COUNT_FAIL';

export const fetchAppointmentCount = async (dispatch) => {
  dispatch({ type: GET_ALL_APPOINTMENTCOUNT_START });
  try {
    let url = 'http://localhost:5000/api/appointments';

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const payload = await response.json();
    dispatch({ type: GET_ALL_APPOINTMENTCOUNT_SUCCESS, payload });
  } catch (error) {
    dispatch({ type: GET_ALL_APPOINTMENTCOUNT_FAIL });
  }
};
export const fetchMedicineCount = async (dispatch) => {
  dispatch({ type: GET_ALL_MEDICINECOUNT_START });
  try {
    let url = 'http://localhost:5000/api/medicines';

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const payload = await response.json();
    dispatch({ type: GET_ALL_MEDICINECOUNT_SUCCESS, payload });
  } catch (error) {
    dispatch({ type: GET_ALL_MEDICINECOUNT_FAIL });
  }
};

export const fetchTestCount = async (dispatch) => {
  dispatch({ type: GET_ALL_TESTSCOUNT_START });
  try {
    let url = 'http://localhost:5000/api/tests';

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const payload = await response.json();
    dispatch({ type: GET_ALL_TESTSCOUNT_SUCCESS, payload });
  } catch (error) {
    dispatch({ type: GET_ALL_TESTSCOUNT_FAIL });
  }
};

export const fetchDoctorCount = async (dispatch) => {
  dispatch({ type: GET_ALL_DOCTOR_COUNT_START });
  try {
    let url = 'http://localhost:5000/api/users/doctors';

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const payload = await response.json();
    dispatch({ type: GET_ALL_DOCTOR_COUNT_SUCCESS, payload });
  } catch (error) {
    dispatch({ type: GET_ALL_DOCTOR_COUNT_FAIL });
  }
};

export const fetchLabtechnicianCount = async (dispatch) => {
  dispatch({ type: GET_ALL_LABTECHNICIAN_COUNT_START });
  try {
    let url = 'http://localhost:5000/api/users/labTechnician';

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const payload = await response.json();
    dispatch({ type: GET_ALL_LABTECHNICIAN_COUNT_SUCCESS, payload });
  } catch (error) {
    dispatch({ type: GET_ALL_LABTECHNICIAN_COUNT_FAIL });
  }
};
const initialState = {
  appointmentCount: [],
  medicineCount: [],
  testCount: [],
  medicineTest: [],
  doctorCount: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_APPOINTMENTCOUNT_START:
      return { ...state, error: false, areFetching: true };
    case GET_ALL_APPOINTMENTCOUNT_SUCCESS:
      return {
        ...state,
        appointmentCount: action.payload,
        areFetching: false,
      };
    case GET_ALL_APPOINTMENTCOUNT_FAIL:
      return { ...state, error: true, areFetching: false };

    case GET_ALL_MEDICINECOUNT_START:
      return { ...state, error: false, areFetching: true };
    case GET_ALL_MEDICINECOUNT_SUCCESS:
      return {
        ...state,
        medicineCount: action.payload,
        areFetching: false,
      };
    case GET_ALL_MEDICINECOUNT_FAIL:
      return { ...state, error: true, areFetching: false };

    case GET_ALL_TESTSCOUNT_START:
      return { ...state, error: false, areFetching: true };
    case GET_ALL_TESTSCOUNT_SUCCESS:
      return {
        ...state,
        testCount: action.payload,
        areFetching: false,
      };
    case GET_ALL_TESTSCOUNT_FAIL:
      return { ...state, error: true, areFetching: false };

    case GET_ALL_DOCTOR_COUNT_START:
      return { ...state, error: false, areFetching: true };
    case GET_ALL_DOCTOR_COUNT_SUCCESS:
      return {
        ...state,
        doctorCount: action.payload,
        areFetching: false,
      };
    case GET_ALL_DOCTOR_COUNT_FAIL:
      return { ...state, error: true, areFetching: false };

    case GET_ALL_LABTECHNICIAN_COUNT_START:
      return { ...state, error: false, areFetching: true };
    case GET_ALL_LABTECHNICIAN_COUNT_SUCCESS:
      return {
        ...state,
        labtechnicianCount: action.payload,
        areFetching: false,
      };
    case GET_ALL_LABTECHNICIAN_COUNT_FAIL:
      return { ...state, error: true, areFetching: false };

    default:
      return state;
  }
};
