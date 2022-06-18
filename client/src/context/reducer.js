import { ACTION_TYPES } from './actions';
import { initialState } from './appContext';

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
    case ACTION_TYPES.UPDATE_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION_TYPES.UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
        userLocation: action.payload.location,
        jobLocation: action.payload.location,
        showAlert: true,
        alertType: 'success',
        alertText: 'User Profile Updated',
      };
    case ACTION_TYPES.UPDATE_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      };
    case ACTION_TYPES.TOGGLE_SIDEBAR:
      return {
        ...state,
        showSidebar: !state.showSidebar,
      };
    case ACTION_TYPES.LOG_OUT_USER:
      return {
        ...initialState,
        user: null,
        token: null,
        jobLocation: '',
        userLocation: '',
      };
    case ACTION_TYPES.HANDLE_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case ACTION_TYPES.CLEAR_VALUES:
      const initialState = {
        isEditing: false,
        editJobId: '',
        position: '',
        company: '',

        jobLocation: state.userLocation || '',
        jobType: 'Full-time',
        status: 'pending',
      };
      return {
        ...state,
        ...initialState,
      };
    case ACTION_TYPES.CREATE_JOB_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION_TYPES.CREATE_JOB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: 'New Job Created',
      };
    case ACTION_TYPES.CREATE_JOB_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      };
    case ACTION_TYPES.GET_JOBS_BEGIN:
      return {
        ...state,
        isLoading: true,
        showAlert: false,
      };
    case ACTION_TYPES.GET_JOBS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        jobs: action.payload.jobs,
        totalJobs: action.payload.totalJobs,
        numOfPages: action.payload.numOfPages,
      };
    case ACTION_TYPES.SET_EDIT_JOB:
      const job = state.jobs.find((job) => job.id === action.payload.id);
      const { _id, position, company, jobLocation, jobType, status } = job;

      return {
        ...state,
        isEditing: true,
        editJobId: _id,
        position,
        company,
        jobLocation,
        jobType,
        status,
      };
    case ACTION_TYPES.DELETE_JOB_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION_TYPES.EDIT_JOB_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION_TYPES.EDIT_JOB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: 'Job Updated',
      };
    case ACTION_TYPES.EDIT_JOB_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      };
    case ACTION_TYPES.SHOW_STATS_BEGIN:
      return {
        ...state,
        isLoading: true,
        showAlert: false,
      };
    case ACTION_TYPES.SHOW_STATS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        stats: action.payload.stats,
        monthlyApplications: action.payload.monthlyApplications,
      };
    case ACTION_TYPES.CLEAR_FILTERS:
      return {
        ...state,
        search: '',
        searchStatus: 'all',
        searchType: 'all',
        sort: 'latest',
      };
    default:
      throw new Error(`No such action: ${action.type}`);
  }
};

export default reducer;
