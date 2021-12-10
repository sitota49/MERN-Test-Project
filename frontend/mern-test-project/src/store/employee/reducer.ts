import {
  FETCH_EMPLOYEE_REQUEST,
  FETCH_EMPLOYEE_SUCCESS,
  FETCH_EMPLOYEE_FAILURE,
} from "./actionTypes";

import { EmployeeActions, EmployeeState } from "./types";

const initialState: EmployeeState = {
  pending: false,
  employees: [],
  error: null,
};

export default (state = initialState, action: EmployeeActions) => {
  switch (action.type) {
    case FETCH_EMPLOYEE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_EMPLOYEE_SUCCESS:
      return {
        ...state,
        pending: false,
        employees: action.payload.employees,
        error: null,
      };
    case FETCH_EMPLOYEE_FAILURE:
      return {
        ...state,
        pending: false,
        employees: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};