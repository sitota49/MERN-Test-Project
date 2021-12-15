import { ifError } from "assert";
import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  fetchEmployeeFailure,
  fetchEmployeeSuccess,
  updateEmployeeSuccess,
  updateEmployeeFailure,
  addEmployeeRequest,
  addEmployeeSuccess,
  addEmployeeFailure,
  singleEmployeeSuccess,
  singleEmployeeFailure,
  deleteEmployeeSuccess,
  deleteEmployeeFailure
} from "./actions";
import { FETCH_EMPLOYEE_REQUEST, ADD_EMPLOYEE_REQUEST ,UPDATE_EMPLOYEE_REQUEST, SINGLE_EMPLOYEE_REQUEST, DELETE_EMPLOYEE_REQUEST} from "./actionTypes";
import { AddEmployeeRequest, IEmployee } from "./types";

const getEmployees = () => {
  return axios.get<IEmployee[]>("http://localhost:4000/employees");
};

const addEmployee = (employee:Object) => {
  return axios.post<IEmployee>("http://localhost:4000/employees", employee);
 
};

function* fetchEmployeeSaga() {
  try {
    const response: AxiosResponse<IEmployee[]> = yield call(getEmployees);
    
    yield put(
      fetchEmployeeSuccess({
        employees: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchEmployeeFailure({
        error: e.message,
      })
    );
  }
}

function* addEmployeeSaga(action:AddEmployeeRequest) {
  try {
    const response: AxiosResponse<IEmployee> = yield call(addEmployee,action.payload);
    console.log(response);
    yield put(
      addEmployeeSuccess({
        employee: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      addEmployeeFailure({
        error: e.message,
      })
    );
  }
}



function* employeeSaga() {
  yield all([takeLatest(FETCH_EMPLOYEE_REQUEST, fetchEmployeeSaga)]);
   yield all([takeLatest(ADD_EMPLOYEE_REQUEST, addEmployeeSaga)]);
}

export default employeeSaga;
