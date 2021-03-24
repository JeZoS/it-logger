import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  SET_CURRENT,
  DELETE_LOG,
  CLEAR_CURRENT,
  UPDATE_LOG,
} from "../actions/types";

const red = (
  state = {
    logs: null,
    current: null,
    loading: false,
    error: null,
  },
  action
) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter(
          (log) => log.id !== action.payload
        ),
        loading: false,
      };
    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map((log) =>
          log.id === action.payload.id
            ? action.payload
            : log
        ),
        loading: false,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    default:
      return state;
  }
};

export default red;
