import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";

import {
  getPendingSelector,
  getEmployeesSelector,
  getErrorSelector,
} from "./store/employee/selectors";
import { fetchEmployeeRequest } from "./store/employee/actions";
import { IEmployee } from './store/employee/types';

const App = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const employees = useSelector(getEmployeesSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchEmployeeRequest());
  }, []);

  return (
    <>
    {/* <div style={{ padding: "15px" }}>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        employees.map((employee:IEmployee, index:number) => (
          <div style={{ marginBottom: "10px" }} key={employee._id}>
            {++index}. {employee.name}
          </div>
        ))
      )}
    </div> */}

       <Container>
      <Row>
        <Col lg="2" xl="3" />
        <Col className="bg-info">
          <Container className="m-2">
            <h1 className="text-center">Our Employees</h1>
            {/* <ToDoAdd />
            <ToDoFilter />
            <ToDoList /> */}
          </Container>
        </Col>
        <Col lg="2" xl="3" />
      </Row>
    </Container>
    </>
  );
};

export default App;