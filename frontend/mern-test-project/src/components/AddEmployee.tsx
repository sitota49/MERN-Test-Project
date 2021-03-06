import { FC, useState, FormEvent} from 'react';
import { useDispatch } from 'react-redux';

import 'react-accordion-ts/src/panel.css';
import {Button, Form, FloatingLabel} from 'react-bootstrap'
import {  useNavigate } from "react-router-dom";


import { addEmployeeRequest, fetchEmployeeRequest } from "../store/employee/actions";
import { AddEmployeeRequestPayload } from '../store/employee/types';
import { Heading, StyledButton } from './styles/Header.styles';


const AddEmployee: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [employeeName, setEmployeeName] = useState('');
    const [employeeGender, setEmployeeGender] = useState('');
    const [employeeSalary, setEmployeeSalary] = useState('0');
    const [employeeDOB, setEmployeeDOB] = useState('');

    const changeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmployeeName(e.currentTarget.value);
    }

    const changeGenderHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setEmployeeGender(e.currentTarget.value);
    }
    
    const changeSalaryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmployeeSalary(e.currentTarget.value);
    }

    const changeDOBHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        dispatch(fetchEmployeeRequest());
        navigate('/');
            
    }
 
 

 

    return(
    <>
    <div className="row">
      <div className="col-2">
    <Button href="/" variant='success' className='my-3'>Go Back</Button>
      </div>
      <div className="col-10">
       
      </div>
    </div>
    <div className="row">
<Heading>Add New Employee</Heading>
    </div>
 <Form onSubmit={submitForm}>
  
 <Form.Group className="mb-3" controlId="employeeNameInput">
    <FloatingLabel
    controlId="floatingNameInput"
    label="Employee Name"
    className="mb-3"
  >
    <Form.Control type="text" placeholder="John Doe"  value={employeeName} 
    onChange={changeNameHandler} required />
  </FloatingLabel>
  </Form.Group>

  <Form.Group className="mb-3" controlId="employeeGenderInput">
  <FloatingLabel controlId="floatingGenderSelect" label="Gender">
  <Form.Select aria-label="Floating label select example"
  value={employeeGender} onChange={changeGenderHandler} required>
    <option  >Select gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
  </Form.Select>
</FloatingLabel>
  </Form.Group>

 <Form.Group className="mb-3" controlId="employeeSalaryInput">
    <FloatingLabel
    controlId="floatingSalaryInput"
    label="Employee Salary"
    className="mb-3"
  >
    <Form.Control type="number"  min={0} value={employeeSalary} 
    onChange={changeSalaryHandler} required />
  </FloatingLabel>
  </Form.Group>

 <Form.Group className="mb-3" controlId="employeeDOBInput">
    <FloatingLabel
    controlId="floatingDOBInput"
    label="Date of Birth"
    className="mb-3"
  >
    <Form.Control type="date"  value={employeeDOB} 
    onChange={changeDOBHandler} required placeholder="Date of Birth" />
  </FloatingLabel>
  </Form.Group>
<StyledButton className="submit-button" variant="success" value="submit" type="submit">Save Employee</StyledButton>
</Form>

    </>
  );
}

export default AddEmployee;