import React, { FC, useEffect, useState, FormEvent} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'react-accordion-ts/src/panel.css';
import {Form, Button } from 'react-bootstrap'



import {
  getPendingSelector,
  getEmployeesSelector,
  getErrorSelector,
} from "../store/employee/selectors";
import { addEmployeeRequest } from "../store/employee/actions";
import { AddEmployeeRequestPayload, IEmployee } from '../store/employee/types';


const AddEmployee: FC = () => {
    const dispatch = useDispatch();
    
    const [employeeName, setEmployeeName] = useState('');
    const [employeeGender, setEmployeeGender] = useState('');
    const [employeeSalary, setEmployeeSalary] = useState('0');
    const [employeeDOB, setEmployeeDOB] = useState('');


    const changeNameHandler = (e: FormEvent<HTMLInputElement>) => {
        setEmployeeName(e.currentTarget.value);
    }

    const changeGenderHandler = (e: FormEvent<HTMLSelectElement>) => {
        setEmployeeGender(e.currentTarget.value);
    }
    
    const changeSalaryHandler = (e: FormEvent<HTMLInputElement>) => {
        setEmployeeSalary(e.currentTarget.value);
    }

    const changeDOBHandler = (e: FormEvent<HTMLInputElement>) => {
        setEmployeeDOB(e.currentTarget.value);
    }

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(employeeName.trim() === '') {
        return alert('Employee name is required!');
        }

        if(employeeGender.trim() === '') {
        return alert('Employee gender is required!');
        }

        if(employeeSalary.trim() === '0') {
        return alert('Employee salary is required!');
        }
        
        if(employeeDOB.trim() === '0') {
        return alert('Employee date of birth is required!');
        }

        const newEmployee: AddEmployeeRequestPayload = {
          name: employeeName,
          gender:employeeGender,
          date_of_birth:employeeDOB,
          salary: +employeeSalary
        }

        dispatch(addEmployeeRequest(newEmployee));
       
        
        console.log(employeeDOB);
        setEmployeeName('');
        setEmployeeGender('');
        setEmployeeSalary('0');
        setEmployeeDOB('');
    }
 
 

 

    return(
    <>
       <h1>Add New Employee</h1>
    
      <section className="section">

      <form onSubmit={submitForm}>
          
          <label className="label">Employee Name</label>
          <div className="control">
            <input type="text" className="input" placeholder="Add Employee" value={employeeName} onChange={changeNameHandler} />
          </div>
            <label className="label">Gender</label>
          <div className="control">
            <select className="input" placeholder="Select Gender" value={employeeGender} onChange={changeGenderHandler}>
                <option selected>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                </select>
          </div>
        <label className="label">Salary</label>
          <div className="control">
            <input type="number" min={0} className="input" placeholder="Salary" value={employeeSalary} onChange={changeSalaryHandler} />
          </div> 
           <label className="label">Date of Birth</label>
          <div className="control">
            <input type="date" className="input" placeholder="Date of Birth" value={employeeDOB} onChange={changeDOBHandler} />
          </div>          
          <div className="control mt-4">
           <Button className="submit-button" value="submit" type="submit">submit</Button>
          </div>
        
      </form>
    </section>
    </>
  );
}

export default AddEmployee;