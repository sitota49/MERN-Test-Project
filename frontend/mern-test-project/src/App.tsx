import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getPendingSelector,
  getEmployeesSelector,
  getErrorSelector,
} from "./store/employee/selectors";
import { fetchEmployeeRequest } from "./store/employee/actions";

const App = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const employees = useSelector(getEmployeesSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchEmployeeRequest());
  }, []);

  return (
    <div style={{ padding: "15px" }}>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        employees.map((employee, index) => (
          <div style={{ marginBottom: "10px" }} key={employee._id}>
            {++index}. {employee.name}
          </div>
        ))
      )}
    </div>
  );
};

export default App;