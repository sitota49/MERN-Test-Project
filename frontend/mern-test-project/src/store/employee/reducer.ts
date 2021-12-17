import {
  FETCH_EMPLOYEE_REQUEST,
  FETCH_EMPLOYEE_SUCCESS,
  FETCH_EMPLOYEE_FAILURE,
  SINGLE_EMPLOYEE_REQUEST,
  SINGLE_EMPLOYEE_SUCCESS,
  SINGLE_EMPLOYEE_FAILURE,
  ADD_EMPLOYEE_REQUEST,
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_FAILURE,
  UPDATE_EMPLOYEE_REQUEST,
  UPDATE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_FAILURE,
  DELETE_EMPLOYEE_REQUEST,
  DELETE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_FAILURE,
} from "./actionTypes";

import { EmployeeActions, EmployeeState } from "./types";

const initialState: EmployeeState = {
  pending: false,
  employees: [],
  singleEmployee:null,
  error: null,
  sucess:null
};

export default (state = initialState, action: EmployeeActions) => {
  switch (action.type) {
    case FETCH_EMPLOYEE_REQUEST:
    case SINGLE_EMPLOYEE_REQUEST:
    case ADD_EMPLOYEE_REQUEST:
    case UPDATE_EMPLOYEE_REQUEST:
    case DELETE_EMPLOYEE_REQUEST:
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
    case SINGLE_EMPLOYEE_FAILURE:
    case ADD_EMPLOYEE_FAILURE:
    case UPDATE_EMPLOYEE_FAILURE:
    case DELETE_EMPLOYEE_FAILURE:
      return {
        ...state,
        pending: false,
        employees: [],
        error: action.payload.error,
      };
  
    case SINGLE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        pending: false,
        singleEmployee: action.payload.employee,
        error: null,
      };
   
   
    case ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
      };
    
    case UPDATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
      };
    
    case DELETE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
        sucess: action.payload.success,
      };
    
    default:
      return {
        ...state,
      };
  }
};