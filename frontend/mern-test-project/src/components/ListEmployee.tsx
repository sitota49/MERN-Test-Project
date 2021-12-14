import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'react-accordion-ts/src/panel.css';
import { Accordion, Card, Button } from 'react-bootstrap'



import {
  getPendingSelector,
  getEmployeesSelector,
  getErrorSelector,
} from "../store/employee/selectors";
import { fetchEmployeeRequest } from "../store/employee/actions";
import { IEmployee } from '../store/employee/types';


const ListEmployee: FC = () => {
   const dispatch = useDispatch();
        const pending = useSelector(getPendingSelector);
        const employees = useSelector(getEmployeesSelector);
        const error = useSelector(getErrorSelector);

       
    useEffect(() => {
   
        dispatch(fetchEmployeeRequest());
    
}, []);

    const setListEmployeeToEditHandler = (id: string) => {
        console.log("edit clicked", id)
       // dispatch(setListToEdit(id));
    } 

    const setListEmployeeIdToDeleteHandler = (id: string) => {
        console.log("delete clicked", id)
       // dispatch(setListIdToDelete(id));
    }

   return(
      <> 
       <Button variant="primary" href="/add">Add New Employee</Button>
        
        <Accordion>

        { Object.keys(employees).length === 0
          ?
            <p className="py-4 has-text-centered">No Employees Found</p>
          :
            <div>
              {Object.values(employees).map((employee: IEmployee) => {
                return <Accordion.Item eventKey={employee._id}>
    <Accordion.Header>{employee.name}</Accordion.Header>
    <Accordion.Body>
     <p>
        Date of Birth : {employee.date_of_birth.slice(0, 10)}<br/>
        Gender: {employee.gender}<br/>
        Salary: {employee.salary}
     </p>
      <Button variant="outline-success" onClick={() => setListEmployeeToEditHandler(employee._id)}>Edit</Button>
      <Button variant="outline-danger" onClick={() => setListEmployeeIdToDeleteHandler(employee._id)
      }>Delete</Button>
    </Accordion.Body>
  </Accordion.Item>
                
              })}
            </div>
        }
        </Accordion>

    
     
  
        </>

            
  );
}

export default ListEmployee;