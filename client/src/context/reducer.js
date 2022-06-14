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
    default:
      throw new Error(`No such action: ${action.type}`);
  }
};

export default reducer;
