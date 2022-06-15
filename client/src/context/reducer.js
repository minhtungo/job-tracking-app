import { ACTION_TYPES } from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
        alertType: 'danger',
        alertText: 'All fields are required',
      };
    case ACTION_TYPES.CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertType: '',
        alertText: '',
      };
    case ACTION_TYPES.REGISTER_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION_TYPES.REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
        userLocation: action.payload.location,
        jobLocation: action.payload.location,
        showAlert: true,
        alertType: 'success',
        alertText: 'Success! Redirecting...',
      };
    case ACTION_TYPES.REGISTER_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      };
    case ACTION_TYPES.LOGIN_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION_TYPES.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
        userLocation: action.payload.location,
        jobLocation: action.payload.location,
        showAlert: true,
        alertType: 'success',
        alertText: 'Success! Redirecting...',
      };
    case ACTION_TYPES.LOGIN_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      };
    case ACTION_TYPES.AUTHENTICATE_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION_TYPES.AUTHENTICATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
        userLocation: action.payload.location,
        jobLocation: action.payload.location,
        showAlert: true,
        alertType: 'success',
        alertText: action.payload.alertText,
      };
    case ACTION_TYPES.AUTHENTICATE_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      };
    default:
      throw new Error(`No such action: ${action.type}`);
  }
};

export default reducer;
