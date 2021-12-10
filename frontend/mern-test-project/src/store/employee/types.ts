import {
  FETCH_EMPLOYEE_REQUEST,
  FETCH_EMPLOYEE_SUCCESS,
  FETCH_EMPLOYEE_FAILURE,
} from "./actionTypes";



export interface IEmployee {
  _id:string,
  name: string;
  date_of_birth: string;
  gender: string;
  salary: number;
  __v:number;
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

export type EmployeeActions =
  | FetchEmployeeRequest
  | FetchEmployeeSuccess
  | FetchEmployeeFailure;