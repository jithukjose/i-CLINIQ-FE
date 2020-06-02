const GET_ALL_LABTECHNICIAN_START = 'ADMIN/GET_ALL_LABTECHNICIAN_START';
const GET_ALL_LABTECHNICIAN_SUCCESS = 'ADMIN/GET_ALL_LABTECHNICIAN_SUCCESS';
const GET_ALL_LABTECHNICIAN_FAIL = 'ADMIN/GET_ALL_LABTECHNICIAN_FAIL';

// const PUT_ALL_LABTECHNICIAN_START = 'ADMIN/PUT_ALL_LABTECHNICIAN_START';
// const PUT_ALL_LABTECHNICIAN_SUCCESS = 'ADMIN/PUT_ALL_LABTECHNICIAN_SUCCESS';
// const PUT_ALL_LABTECHNICIAN_FAIL = 'ADMIN/PUT_ALL_LABTECHNICIAN_FAIL';

// const DELETE_LABTECHNICIAN_START = 'ADMIN/DELETE_LABTECHNICIAN_START';
// const DELETE_LABTECHNICIAN_SUCCESS = 'ADMIN/DELETE_LABTECHNICIAN_SUCCESS';
// const DELETE_LABTECHNICIAN_FAIL = 'ADMIN/DELETE_LABTECHNICIAN_FAIL';

export const fetchDoctorAppointment = async (dispatch) => {
  dispatch({ type: GET_ALL_LABTECHNICIAN_START });
  try {
    let url =
      'http://localhost:5000/api/appointments/lab-Technician-Appointments';

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const payload = await response.json();
    dispatch({ type: GET_ALL_LABTECHNICIAN_SUCCESS, payload });
  } catch (error) {
    dispatch({ type: GET_ALL_LABTECHNICIAN_FAIL });
  }
};

// export const editLABTECHNICIAN = (editedLABTECHNICIAN, id) => async (dispatch) => {
//   dispatch({ type: PUT_ALL_LABTECHNICIAN_START });
//   try {
//     // let url = `http://localhost:5000/api/LABTECHNICIANs/${id}`;
//     // const response = await fetch(url, {
//     //   method: 'PUT',
//     //   headers: {
//     //     Accept: 'application/json',
//     //     'Content-Type': 'application/json',
//     //   },
//     //   body: JSON.stringify(editedLABTECHNICIAN),
//     // });
//     // const payload = await response.json();
//     // dispatch({ type: PUT_ALL_LABTECHNICIAN_SUCCESS, payload });
//   } catch (error) {
//     dispatch({ type: PUT_ALL_LABTECHNICIAN_FAIL });
//   }
// };

// export const deleteLABTECHNICIAN = (id) => async (dispatch) => {
//   dispatch({ type: DELETE_LABTECHNICIAN_START });
//   try {
//     let url = `http://localhost:5000/api/doctors/${id}`;

//     await fetch(url, {
//       method: 'DELETE',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//     });

//     dispatch({ type: DELETE_LABTECHNICIAN_SUCCESS });
//   } catch (error) {
//     dispatch({ type: DELETE_LABTECHNICIAN_FAIL });
//   }
// };

const initialState = {
  doctorAppointment: [],
  //   editdoctorAppointment: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_LABTECHNICIAN_START:
      return { ...state, error: false, areFetching: true };
    case GET_ALL_LABTECHNICIAN_SUCCESS:
      return {
        ...state,
        doctorAppointment: action.payload,
        areFetching: false,
      };
    case GET_ALL_LABTECHNICIAN_FAIL:
      return { ...state, error: true, areFetching: false };

    // case PUT_ALL_LABTECHNICIAN_START:
    //   return { ...state, error: false, areFetching: true };
    // case PUT_ALL_LABTECHNICIAN_SUCCESS:
    //   return {
    //     ...state,
    //     editLABTECHNICIANList: action.payload,
    //     areFetching: false,
    //   };
    // case PUT_ALL_LABTECHNICIAN_FAIL:
    //   return { ...state, error: true, areFetching: false };

    // case DELETE_LABTECHNICIAN_START:
    //   return { ...state, error: false, areFetching: true };
    // case DELETE_LABTECHNICIAN_SUCCESS:
    //   return {
    //     ...state,
    //     editLABTECHNICIANList: action.payload,
    //     areFetching: false,
    //   };
    // case DELETE_LABTECHNICIAN_FAIL:
    //   return { ...state, error: true, areFetching: false };

    default:
      return state;
  }
};
