const GET_ALL_TESTS_START = 'ADMIN/GET_ALL_TESTS_START';
const GET_ALL_TESTS_SUCCESS = 'ADMIN/GET_ALL_TESTS_SUCCESS';
const GET_ALL_TESTS_FAIL = 'ADMIN/GET_ALL_TESTS_FAIL';

const PUT_ALL_TESTS_START = 'ADMIN/PUT_ALL_TESTS_START';
const PUT_ALL_TESTS_SUCCESS = 'ADMIN/PUT_ALL_TESTS_SUCCESS';
const PUT_ALL_TESTS_FAIL = 'ADMIN/PUT_ALL_TESTS_FAIL';

const DELETE_TESTS_START = 'ADMIN/DELETE_TESTS_START';
const DELETE_TESTS_SUCCESS = 'ADMIN/DELETE_TESTS_SUCCESS';
const DELETE_TESTS_FAIL = 'ADMIN/DELETE_TESTS_FAIL';

export const fetchMedicineTestList = async (dispatch) => {
  dispatch({ type: GET_ALL_TESTS_START });
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
    dispatch({ type: GET_ALL_TESTS_SUCCESS, payload });
    console.log(payload, 'jkjkjk');
  } catch (error) {
    dispatch({ type: GET_ALL_TESTS_FAIL });
  }
};

export const editTESTS = (editedTESTS, id) => async (dispatch) => {
  dispatch({ type: PUT_ALL_TESTS_START });
  try {
    // let url = `http://localhost:5000/api/TESTSs/${id}`;
    // const response = await fetch(url, {
    //   method: 'PUT',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(editedTESTS),
    // });
    // const payload = await response.json();
    // dispatch({ type: PUT_ALL_TESTS_SUCCESS, payload });
  } catch (error) {
    dispatch({ type: PUT_ALL_TESTS_FAIL });
  }
};

export const deleteTests = (id) => async (dispatch) => {
  dispatch({ type: DELETE_TESTS_START });
  try {
    let url = `http://localhost:5000/api/tests/${id}`;

    await fetch(url, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    dispatch({ type: DELETE_TESTS_SUCCESS });
  } catch (error) {
    dispatch({ type: DELETE_TESTS_FAIL });
  }
};

const initialState = {
  TESTSList: [],
  editTESTSList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_TESTS_START:
      return { ...state, error: false, areFetching: true };
    case GET_ALL_TESTS_SUCCESS:
      return { ...state, medicalTestList: action.payload, areFetching: false };
    case GET_ALL_TESTS_FAIL:
      return { ...state, error: true, areFetching: false };

    case PUT_ALL_TESTS_START:
      return { ...state, error: false, areFetching: true };
    case PUT_ALL_TESTS_SUCCESS:
      return { ...state, editTESTSList: action.payload, areFetching: false };
    case PUT_ALL_TESTS_FAIL:
      return { ...state, error: true, areFetching: false };

    case DELETE_TESTS_START:
      return { ...state, error: false, areFetching: true };
    case DELETE_TESTS_SUCCESS:
      return { ...state, editTESTSListss: action.payload, areFetching: false };
    case DELETE_TESTS_FAIL:
      return { ...state, error: true, areFetching: false };

    default:
      return state;
  }
};
