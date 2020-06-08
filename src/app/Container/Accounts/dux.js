const POST_LOGIN_DETAILS_START = 'ADMIN/POST_LOGIN_DETAILS_START';
const POST_LOGIN_DETAILS_SUCCESS = 'ADMIN/POST_LOGIN_DETAILS_SUCCESS';
const POST_LOGIN_DETAILS_FAIL = 'ADMIN/POST_LOGIN_DETAILS_FAIL';

export const userLogin = async (dispatch) => {
  const { history } = this.props;

  const TOKEN_KEY = 'jwt';

  dispatch({ type: POST_LOGIN_DETAILS_START });

  try {
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    });
    const payload = await response.json();
    dispatch({ type: POST_LOGIN_DETAILS_SUCCESS, payload });

    if (payload.id) {
      localStorage.setItem(TOKEN_KEY, payload.token);
      localStorage.setItem('userId', payload.id);
      // history.push('/home');
      // NotifyError()
    }
  } catch (error) {
    dispatch({ type: POST_LOGIN_DETAILS_FAIL });
  }
};

const initialState = {
  loginDetails: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_LOGIN_DETAILS_START:
      return { ...state, error: false, areFetching: true };
    case POST_LOGIN_DETAILS_SUCCESS:
      return { ...state, loginDetails: action.payload, areFetching: false };
    case POST_LOGIN_DETAILS_FAIL:
      return { ...state, error: true, areFetching: false };

    default:
      return state;
  }
};
