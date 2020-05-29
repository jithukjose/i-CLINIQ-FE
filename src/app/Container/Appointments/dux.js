const GET_ALL_APPOINTMENT_START = 'ADMIN/GET_ALL_APPOINTMENT_START';
const GET_ALL_APPOINTMENT_SUCCESS = 'ADMIN/GET_ALL_APPOINTMENT_SUCCESS';
const GET_ALL_APPOINTMENT_FAIL = 'ADMIN/GET_ALL_APPOINTMENT_FAIL';

const PUT_ALL_APPOINTMENT_START = 'ADMIN/PUT_ALL_APPOINTMENT_START';
const PUT_ALL_APPOINTMENT_SUCCESS = 'ADMIN/PUT_ALL_APPOINTMENT_SUCCESS';
const PUT_ALL_APPOINTMENT_FAIL = 'ADMIN/PUT_ALL_APPOINTMENT_FAIL';

const DELETE_APPOINTMENT_START = 'ADMIN/DELETE_APPOINTMENT_START';
const DELETE_APPOINTMENT_SUCCESS = 'ADMIN/DELETE_APPOINTMENT_SUCCESS';
const DELETE_APPOINTMENT_FAIL = 'ADMIN/DELETE_APPOINTMENT_FAIL';

export const fetchAppointmentList = async (dispatch) => {
  dispatch({ type: GET_ALL_APPOINTMENT_START });
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
    dispatch({ type: GET_ALL_APPOINTMENT_SUCCESS, payload });
  } catch (error) {
    dispatch({ type: GET_ALL_APPOINTMENT_FAIL });
  }
};

export const editAPPOINTMENT = (editedAPPOINTMENT, id) => async (dispatch) => {
  dispatch({ type: PUT_ALL_APPOINTMENT_START });
  try {
    // let url = `http://localhost:5000/api/APPOINTMENTs/${id}`;
    // const response = await fetch(url, {
    //   method: 'PUT',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(editedAPPOINTMENT),
    // });
    // const payload = await response.json();
    // dispatch({ type: PUT_ALL_APPOINTMENT_SUCCESS, payload });
  } catch (error) {
    dispatch({ type: PUT_ALL_APPOINTMENT_FAIL });
  }
};

export const deleteAppointment = (id) => async (dispatch) => {
  dispatch({ type: DELETE_APPOINTMENT_START });
  try {
    let url = `http://localhost:5000/api/APPOINTMENTs/${id}`;

    await fetch(url, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    dispatch({ type: DELETE_APPOINTMENT_SUCCESS });
  } catch (error) {
    dispatch({ type: DELETE_APPOINTMENT_FAIL });
  }
};

const initialState = {
  APPOINTMENTList: [],
  editAPPOINTMENTList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_APPOINTMENT_START:
      return { ...state, error: false, areFetching: true };
    case GET_ALL_APPOINTMENT_SUCCESS:
      return { ...state, appointmentList: action.payload, areFetching: false };
    case GET_ALL_APPOINTMENT_FAIL:
      return { ...state, error: true, areFetching: false };

    case PUT_ALL_APPOINTMENT_START:
      return { ...state, error: false, areFetching: true };
    case PUT_ALL_APPOINTMENT_SUCCESS:
      return {
        ...state,
        editAPPOINTMENTList: action.payload,
        areFetching: false,
      };
    case PUT_ALL_APPOINTMENT_FAIL:
      return { ...state, error: true, areFetching: false };

    case DELETE_APPOINTMENT_START:
      return { ...state, error: false, areFetching: true };
    case DELETE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        editAPPOINTMENTList: action.payload,
        areFetching: false,
      };
    case DELETE_APPOINTMENT_FAIL:
      return { ...state, error: true, areFetching: false };

    default:
      return state;
  }
};
