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

export interface IEmployee {
  _id: string;
  name: string;
  date_of_birth: string;
  gender: string;
  salary: number;
  __v: number;
}

export interface EmployeeState {
  pending: boolean;
  employees: IEmployee[];
  error: string | null;
}

export interface FetchEmployeeSuccessPayload {
  employees: IEmployee[];
}

export interface FetchEmployeeFailurePayload {
  error: string;
}

export interface SingleEmployeeSuccessPayload {
  employees: IEmployee[];
}

export interface SingleEmployeeFailurePayload {
  error: string;
}

export interface AddEmployeeSuccessPayload {
  employees: IEmployee[];
}

export interface AddEmployeeFailurePayload {
  error: string;
}

export interface UpdateEmployeeSuccessPayload {
  employees: IEmployee[];
}

export interface UpdateEmployeeFailurePayload {
  error: string;
}

export interface DeleteEmployeeSuccessPayload {
  employees: IEmployee[];
}

export interface DeleteEmployeeFailurePayload {
  error: string;
}

export interface FetchEmployeeRequest {
  type: typeof FETCH_EMPLOYEE_REQUEST;
}

export type FetchEmployeeSuccess = {
  type: typeof FETCH_EMPLOYEE_SUCCESS;
  payload: FetchEmployeeSuccessPayload;
};

export type FetchEmployeeFailure = {
  type: typeof FETCH_EMPLOYEE_FAILURE;
  payload: FetchEmployeeFailurePayload;
};

export interface SingleEmployeeRequest {
  type: typeof SINGLE_EMPLOYEE_REQUEST;
}

export type SingleEmployeeSuccess = {
  type: typeof SINGLE_EMPLOYEE_SUCCESS;
  payload: SingleEmployeeSuccessPayload;
};

export type SingleEmployeeFailure = {
  type: typeof SINGLE_EMPLOYEE_FAILURE;
  payload: SingleEmployeeFailurePayload;
};

export interface AddEmployeeRequest {
  type: typeof ADD_EMPLOYEE_REQUEST;
}

export type AddEmployeeSuccess = {
  type: typeof ADD_EMPLOYEE_SUCCESS;
  payload: AddEmployeeSuccessPayload;
};

export type AddEmployeeFailure = {
  type: typeof ADD_EMPLOYEE_FAILURE;
  payload: AddEmployeeFailurePayload;
};

export interface UpdateEmployeeRequest {
  type: typeof UPDATE_EMPLOYEE_REQUEST;
}

export type UpdateEmployeeSuccess = {
  type: typeof UPDATE_EMPLOYEE_SUCCESS;
  payload: UpdateEmployeeSuccessPayload;
};

export type UpdateEmployeeFailure = {
  type: typeof UPDATE_EMPLOYEE_FAILURE;
  payload: UpdateEmployeeFailurePayload;
};

export interface DeleteEmployeeRequest {
  type: typeof DELETE_EMPLOYEE_REQUEST;
}

export type DeleteEmployeeSuccess = {
  type: typeof DELETE_EMPLOYEE_SUCCESS;
  payload: DeleteEmployeeSuccessPayload;
};

export type DeleteEmployeeFailure = {
  type: typeof DELETE_EMPLOYEE_FAILURE;
  payload: DeleteEmployeeFailurePayload;
};

export type EmployeeActions =
  | FetchEmployeeRequest
  | FetchEmployeeSuccess
  | FetchEmployeeFailure
  | SingleEmployeeRequest
  | SingleEmployeeSuccess
  | SingleEmployeeFailure
  | AddEmployeeRequest
  | AddEmployeeSuccess
  | AddEmployeeFailure
  | UpdateEmployeeRequest
  | UpdateEmployeeSuccess
  | UpdateEmployeeFailure
  | DeleteEmployeeRequest
  | DeleteEmployeeSuccess
  | DeleteEmployeeFailure;
