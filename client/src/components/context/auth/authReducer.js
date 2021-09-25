import {
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  LOGOUT,
  LOGIN_FAILURE,
  USER_LOADED,
  LOGIN_SUCCESS,
  CLEAR_ERRORS,
  AUTH_ERROR,
} from '../types.js'

const authReducer = (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuth: true,
        loading: false,
        user: action.payload,
      }
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        ...action.payload,
        isAuth: true,
        loading: false,
      }
    case REGISTER_FAILURE:
    case AUTH_ERROR:
    case LOGIN_FAILURE:
    case LOGOUT:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        isAuth: false,
        loading: false,
        user: null,
        error: action.payload,
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}

export default authReducer
