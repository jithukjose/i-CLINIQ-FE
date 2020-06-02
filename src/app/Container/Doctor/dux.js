const GET_ALL_DOCTORDETAIL_START = 'ADMIN/GET_ALL_DOCTORDETAIL_START';
const GET_ALL_DOCTORDETAIL_SUCCESS = 'ADMIN/GET_ALL_DOCTORDETAIL_SUCCESS';
const GET_ALL_DOCTORDETAIL_FAIL = 'ADMIN/GET_ALL_DOCTORDETAIL_FAIL';

// const PUT_ALL_DOCTORDETAIL_START = 'ADMIN/PUT_ALL_DOCTORDETAIL_START';
// const PUT_ALL_DOCTORDETAIL_SUCCESS = 'ADMIN/PUT_ALL_DOCTORDETAIL_SUCCESS';
// const PUT_ALL_DOCTORDETAIL_FAIL = 'ADMIN/PUT_ALL_DOCTORDETAIL_FAIL';

const DELETE_DOCTORDETAIL_START = 'ADMIN/DELETE_DOCTORDETAIL_START';
const DELETE_DOCTORDETAIL_SUCCESS = 'ADMIN/DELETE_DOCTORDETAIL_SUCCESS';
const DELETE_DOCTORDETAIL_FAIL = 'ADMIN/DELETE_DOCTORDETAIL_FAIL';

export const fetchDoctorAppointment = async (dispatch) => {
  dispatch({ type: GET_ALL_DOCTORDETAIL_START });
  try {
    let url = 'http://localhost:5000/api/appointments/AllAppointment';

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const payload = await response.json();
    dispatch({ type: GET_ALL_DOCTORDETAIL_SUCCESS, payload });
  } catch (error) {
    dispatch({ type: GET_ALL_DOCTORDETAIL_FAIL });
  }
};

// export const editDOCTORDETAIL = (editedDOCTORDETAIL, id) => async (dispatch) => {
//   dispatch({ type: PUT_ALL_DOCTORDETAIL_START });
//   try {
//     // let url = `http://localhost:5000/api/DOCTORDETAILs/${id}`;
//     // const response = await fetch(url, {
//     //   method: 'PUT',
//     //   headers: {
//     //     Accept: 'application/json',
//     //     'Content-Type': 'application/json',
//     //   },
//     //   body: JSON.stringify(editedDOCTORDETAIL),
//     // });
//     // const payload = await response.json();
//     // dispatch({ type: PUT_ALL_DOCTORDETAIL_SUCCESS, payload });
//   } catch (error) {
//     dispatch({ type: PUT_ALL_DOCTORDETAIL_FAIL });
//   }
// };

export const deleteDoctorDetail = (id) => async (dispatch) => {
  dispatch({ type: DELETE_DOCTORDETAIL_START });
  try {
    let url = `http://localhost:5000/api/doctors/${id}`;

    await fetch(url, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    dispatch({ type: DELETE_DOCTORDETAIL_SUCCESS });
  } catch (error) {
    dispatch({ type: DELETE_DOCTORDETAIL_FAIL });
  }
};

const initialState = {
  doctorAppointment: [],
  //   editdoctorAppointment: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DOCTORDETAIL_START:
      return { ...state, error: false, areFetching: true };
    case GET_ALL_DOCTORDETAIL_SUCCESS:
      return {
        ...state,
        doctorAppointment: action.payload,
        areFetching: false,
      };
    case GET_ALL_DOCTORDETAIL_FAIL:
      return { ...state, error: true, areFetching: false };

    // case PUT_ALL_DOCTORDETAIL_START:
    //   return { ...state, error: false, areFetching: true };
    // case PUT_ALL_DOCTORDETAIL_SUCCESS:
    //   return {
    //     ...state,
    //     editDOCTORDETAILList: action.payload,
    //     areFetching: false,
    //   };
    // case PUT_ALL_DOCTORDETAIL_FAIL:
    //   return { ...state, error: true, areFetching: false };

    case DELETE_DOCTORDETAIL_START:
      return { ...state, error: false, areFetching: true };
    case DELETE_DOCTORDETAIL_SUCCESS:
      return {
        ...state,
        editDOCTORDETAILList: action.payload,
        areFetching: false,
      };
    case DELETE_DOCTORDETAIL_FAIL:
      return { ...state, error: true, areFetching: false };

    default:
      return state;
  }
};
