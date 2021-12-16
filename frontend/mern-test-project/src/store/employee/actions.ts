import {
  FETCH_EMPLOYEE_REQUEST,
  FETCH_EMPLOYEE_FAILURE,
  FETCH_EMPLOYEE_SUCCESS,
  SINGLE_EMPLOYEE_REQUEST,
  SINGLE_EMPLOYEE_FAILURE,
  SINGLE_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_REQUEST,
  ADD_EMPLOYEE_FAILURE,
  ADD_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_REQUEST,
  UPDATE_EMPLOYEE_FAILURE,
  UPDATE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_REQUEST,
  DELETE_EMPLOYEE_FAILURE,
  DELETE_EMPLOYEE_SUCCESS,
} from "./actionTypes";
import {
  FetchEmployeeRequest,
  FetchEmployeeSuccess,
  FetchEmployeeSuccessPayload,
  FetchEmployeeFailure,
  FetchEmployeeFailurePayload,
  SingleEmployeeRequest,
  SingleEmployeeRequestPayload,
  SingleEmployeeSuccess,
  SingleEmployeeSuccessPayload,
  SingleEmployeeFailure,
  SingleEmployeeFailurePayload,
  AddEmployeeRequest,
  AddEmployeeRequestPayload,
  AddEmployeeSuccess,
  AddEmployeeSuccessPayload,
  AddEmployeeFailure,
  AddEmployeeFailurePayload,
  UpdateEmployeeRequest,
  UpdateEmployeeRequestPayload,
  UpdateEmployeeSuccess,
  UpdateEmployeeSuccessPayload,
  UpdateEmployeeFailure,
  UpdateEmployeeFailurePayload,
  DeleteEmployeeRequest,
  DeleteEmployeeSuccess,
  DeleteEmployeeSuccessPayload,
  DeleteEmployeeFailure,
  DeleteEmployeeFailurePayload,
} from "./types";

export const fetchEmployeeRequest = (): FetchEmployeeRequest => ({
  type: FETCH_EMPLOYEE_REQUEST,
});

export const fetchEmployeeSuccess = (
  payload: FetchEmployeeSuccessPayload
): FetchEmployeeSuccess => ({
  type: FETCH_EMPLOYEE_SUCCESS,
  payload,
});

export const fetchEmployeeFailure = (
  payload: FetchEmployeeFailurePayload
): FetchEmployeeFailure => ({
  type: FETCH_EMPLOYEE_FAILURE,
  payload,
});

export const singleEmployeeRequest = (
  payload: SingleEmployeeRequestPayload
): SingleEmployeeRequest => ({
  type: SINGLE_EMPLOYEE_REQUEST,
  payload,
});

export const singleEmployeeSuccess = (
  payload: SingleEmployeeSuccessPayload
): SingleEmployeeSuccess => ({
  type: SINGLE_EMPLOYEE_SUCCESS,
  payload,
});

export const singleEmployeeFailure = (
  payload: SingleEmployeeFailurePayload
): SingleEmployeeFailure => ({
  type: SINGLE_EMPLOYEE_FAILURE,
  payload,
});

export const addEmployeeRequest = (
  payload: AddEmployeeRequestPayload
): AddEmployeeRequest => ({
  type: ADD_EMPLOYEE_REQUEST,
  payload,
});

export const addEmployeeSuccess = (
  payload: AddEmployeeSuccessPayload
): AddEmployeeSuccess => ({
  type: ADD_EMPLOYEE_SUCCESS,
  payload,
});

export const addEmployeeFailure = (
  payload: AddEmployeeFailurePayload
): AddEmployeeFailure => ({
  type: ADD_EMPLOYEE_FAILURE,
  payload,
});

export const updateEmployeeRequest = (
  payload: UpdateEmployeeRequestPayload
): UpdateEmployeeRequest => ({
  type: UPDATE_EMPLOYEE_REQUEST,
  payload,
});

export const updateEmployeeSuccess = (
  payload: UpdateEmployeeSuccessPayload
): UpdateEmployeeSuccess => ({
  type: UPDATE_EMPLOYEE_SUCCESS,
  payload,
});

export const updateEmployeeFailure = (
  payload: UpdateEmployeeFailurePayload
): UpdateEmployeeFailure => ({
  type: UPDATE_EMPLOYEE_FAILURE,
  payload,
});

export const deleteEmployeeRequest = (): DeleteEmployeeRequest => ({
  type: DELETE_EMPLOYEE_REQUEST,
});

export const deleteEmployeeSuccess = (
  payload: DeleteEmployeeSuccessPayload
): DeleteEmployeeSuccess => ({
  type: DELETE_EMPLOYEE_SUCCESS,
  payload,
});

export const deleteEmployeeFailure = (
  payload: DeleteEmployeeFailurePayload
): DeleteEmployeeFailure => ({
  type: DELETE_EMPLOYEE_FAILURE,
  payload,
});
