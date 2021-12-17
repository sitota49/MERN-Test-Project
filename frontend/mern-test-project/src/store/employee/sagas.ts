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
  singleEmployeeRequest,
  singleEmployeeSuccess,
  singleEmployeeFailure,
  deleteEmployeeRequest,
  deleteEmployeeSuccess,
  deleteEmployeeFailure,
} from "./actions";
import {
  FETCH_EMPLOYEE_REQUEST,
  ADD_EMPLOYEE_REQUEST,
  UPDATE_EMPLOYEE_REQUEST,
  SINGLE_EMPLOYEE_REQUEST,
  DELETE_EMPLOYEE_REQUEST,
} from "./actionTypes";
import {
  AddEmployeeRequest,
  SingleEmployeeRequest,
  IEmployee,
  AddEmployeeRequestPayload,
  SingleEmployeeRequestPayload,
  UpdateEmployeeRequest,
  UpdateEmployeeRequestPayload,
  SingleEmployeeSuccessPayload,
  DeleteEmployeeRequestPayload,
  DeleteEmployeeRequest,
} from "./types";

const getEmployees = () => {
  return axios.get<IEmployee[]>("http://localhost:4000/employees");
};

const getSingleEmployee = (req: SingleEmployeeRequestPayload) => {
  return axios.get<IEmployee>(`http://localhost:4000/employees/${req._id}`);
};
const addEmployee = (employee: AddEmployeeRequestPayload) => {
  return axios.post<IEmployee>("http://localhost:4000/employees", employee);
};

const updateEmployee = (employee: UpdateEmployeeRequestPayload) => {
  if (employee != null) {
    return axios.put<IEmployee>(
      `http://localhost:4000/employees/${employee._id}`,
      employee
    );
  }
  return;
};

const deleteEmployee = (req: DeleteEmployeeRequestPayload) => {
  return axios.delete<string>(`http://localhost:4000/employees/${req._id}`);
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

function* singleEmployeeSaga(action: SingleEmployeeRequest) {
  try {
    const response: AxiosResponse<IEmployee> = yield call(
      getSingleEmployee,
      action.payload
    );

    yield put(
      singleEmployeeSuccess({
        employee: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      singleEmployeeFailure({
        error: e.message,
      })
    );
  }
}

function* addEmployeeSaga(action: AddEmployeeRequest) {
  try {
    const response: AxiosResponse<IEmployee> = yield call(
      addEmployee,
      action.payload
    );
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

function* updateEmployeeSaga(action: UpdateEmployeeRequest) {
  try {
    const response: AxiosResponse<IEmployee> = yield call(
      updateEmployee,
      action.payload
    );
    yield put(
      updateEmployeeSuccess({
        employee: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      updateEmployeeFailure({
        error: e.message,
      })
    );
  }
}

function* deleteEmployeeSaga(action: DeleteEmployeeRequest) {
  try {
    const response: AxiosResponse<string> = yield call(
      deleteEmployee,
      action.payload
    );

    yield put(
      deleteEmployeeSuccess({
        success: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      deleteEmployeeFailure({
        error: e.message,
      })
    );
  }
}

function* employeeSaga() {
  yield all([takeLatest(FETCH_EMPLOYEE_REQUEST, fetchEmployeeSaga)]);
  yield all([takeLatest(SINGLE_EMPLOYEE_REQUEST, singleEmployeeSaga)]);
  yield all([takeLatest(ADD_EMPLOYEE_REQUEST, addEmployeeSaga)]);
  yield all([takeLatest(UPDATE_EMPLOYEE_REQUEST, updateEmployeeSaga)]);
  yield all([takeLatest(DELETE_EMPLOYEE_REQUEST, deleteEmployeeSaga)]);
}

export default employeeSaga;
