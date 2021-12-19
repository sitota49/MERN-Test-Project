import  { FC, useEffect, FormEvent} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-accordion-ts/src/panel.css';
import { useParams } from "react-router-dom";
import { Button , Form, FloatingLabel} from 'react-bootstrap'
import {  useNavigate } from "react-router-dom";
import {
  getSingleEmployeeSelector
} from "../store/employee/selectors";
import { fetchEmployeeRequest, singleEmployeeRequest, updateEmployeeRequest } from "../store/employee/actions";
import { UpdateEmployeeRequestPayload, SingleEmployeeRequestPayload } from '../store/employee/types';
import { Heading, StyledButton } from './styles/Header.styles';

const UpdateEmployee: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const singleEmployee = useSelector(getSingleEmployeeSelector);
    const { id } = useParams();

     const employeeId: SingleEmployeeRequestPayload = {
          _id: id!,
        }

     useEffect(() => {
        dispatch(singleEmployeeRequest(employeeId));
    
    }, []);

    
    const changeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      if(singleEmployee != null){
        singleEmployee.name = e.currentTarget.value;
      }
    }

    const changeGenderHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if(singleEmployee != null){
        singleEmployee.gender = e.currentTarget.value;
      }
    }
    
    const changeSalaryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      if(singleEmployee != null){
        singleEmployee.salary = +e.currentTarget.value;
      }
    }

    const changeDOBHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      if(singleEmployee != null){
        singleEmployee.date_of_birth = e.currentTarget.value;
      }      
    }

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(singleEmployee!){
          const updated: UpdateEmployeeRequestPayload = {
              _id: singleEmployee._id,
              name:  singleEmployee.name,
              gender:singleEmployee.gender,
              date_of_birth:singleEmployee.date_of_birth,
              salary: +singleEmployee.salary
            }

            dispatch(updateEmployeeRequest(updated));
            dispatch(fetchEmployeeRequest());
            navigate('/');
        }
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
<Heading>Update Employee</Heading>
    </div>
       <Form onSubmit={submitForm}>
  
 <Form.Group className="mb-3" controlId="employeeNameInput">
    <FloatingLabel
    controlId="floatingNameInput"
    label="Employee Name"
    className="mb-3"
  >
    <Form.Control type="text" placeholder="John Doe" defaultValue={singleEmployee?.name} onChange={changeNameHandler} required />
  </FloatingLabel>
  </Form.Group>

  <Form.Group className="mb-3" controlId="employeeGenderInput">
  <FloatingLabel controlId="floatingGenderSelect" label="Gender">
  <Form.Select aria-label="Floating label select example"
  onChange={changeGenderHandler} required>
         {singleEmployee?.gender === "Male" ? 
               <>
                <option value="Male" selected>Male</option>
                <option value="Female">Female</option> 
                </>: 
                <>
                <option value="Male">Male</option>
                <option value="Female"selected>Female</option>
                </>}
  </Form.Select>
</FloatingLabel>
  </Form.Group>

 <Form.Group className="mb-3" controlId="employeeSalaryInput">
    <FloatingLabel
    controlId="floatingSalaryInput"
    label="Employee Salary"
    className="mb-3"
  >
    <Form.Control type="number"  min={0} defaultValue={singleEmployee?.salary} onChange={changeSalaryHandler} required />
  </FloatingLabel>
  </Form.Group>

 <Form.Group className="mb-3" controlId="employeeDOBInput">
    <FloatingLabel
    controlId="floatingDOBInput"
    label="Date of Birth"
    className="mb-3"
  >
    <Form.Control type="date" defaultValue={singleEmployee?.date_of_birth.slice(0, 10)} onChange={changeDOBHandler} required placeholder="Date of Birth" />
  </FloatingLabel>
  </Form.Group>
<StyledButton className="submit-button" variant="success" value="submit" type="submit">Update Employee</StyledButton>
</Form>
  
    </>
  );
}

export default UpdateEmployee;