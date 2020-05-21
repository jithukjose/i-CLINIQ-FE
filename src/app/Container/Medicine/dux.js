const GET_ALL_MEDICINE_START = 'ADMIN/GET_ALL_MEDICINE_START';
const GET_ALL_MEDICINE_SUCCESS = 'ADMIN/GET_ALL_MEDICINE_SUCCESS';
const GET_ALL_MEDICINE_FAIL = 'ADMIN/GET_ALL_MEDICINE_FAIL';

const PUT_ALL_MEDICINE_START = 'ADMIN/PUT_ALL_MEDICINE_START';
const PUT_ALL_MEDICINE_SUCCESS = 'ADMIN/PUT_ALL_MEDICINE_SUCCESS';
const PUT_ALL_MEDICINE_FAIL = 'ADMIN/PUT_ALL_MEDICINE_FAIL';

export const fetchMedicineList = async (dispatch) => {
  dispatch({ type: GET_ALL_MEDICINE_START });
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
    dispatch({ type: GET_ALL_MEDICINE_SUCCESS, payload });
  } catch (error) {
    dispatch({ type: GET_ALL_MEDICINE_FAIL });
  }
};

export const editMedicine = async (dispatch) => {
  dispatch({ type: PUT_ALL_MEDICINE_START });
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
    dispatch({ type: PUT_ALL_MEDICINE_SUCCESS, payload });
  } catch (error) {
    dispatch({ type: PUT_ALL_MEDICINE_FAIL });
  }
};

const initialState = {
  MedicineList: [],
  editMedicineList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MEDICINE_START:
      return { ...state, error: false, areFetching: true };
    case GET_ALL_MEDICINE_SUCCESS:
      return { ...state, MedicineList: action.payload, areFetching: false };
    case GET_ALL_MEDICINE_FAIL:
      return { ...state, error: true, areFetching: false };

    case PUT_ALL_MEDICINE_START:
      return { ...state, error: false, areFetching: true };
    case PUT_ALL_MEDICINE_SUCCESS:
      return { ...state, editMedicineList: action.payload, areFetching: false };
    case PUT_ALL_MEDICINE_FAIL:
      return { ...state, error: true, areFetching: false };

    default:
      return state;
  }
};
