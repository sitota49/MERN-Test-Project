import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchEmployeeFailure, fetchEmployeeSuccess } from "./actions";
import { FETCH_EMPLOYEE_REQUEST } from "./actionTypes";
import { IEmployee } from "./types";

const getEmployees = () =>{
   return axios.get<IEmployee[]>("http://localhost:4000/employees");
}


function* fetchEmployeeSaga() {
  try {
    const response:AxiosResponse<IEmployee[]> = yield call(getEmployees);
    console.log(response);
    yield put(
      fetchEmployeeSuccess({
        employees: response.data,
      })
    );
  } catch (e:any) {
    yield put(
      fetchEmployeeFailure({
        error: e.message,
      })
    );
  }
}

function* employeeSaga() {
  yield all([takeLatest(FETCH_EMPLOYEE_REQUEST, fetchEmployeeSaga)]);
}

export default employeeSaga;