import  { FC, useEffect, FormEvent} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-accordion-ts/src/panel.css';
import { useParams } from "react-router-dom";
import { Button } from 'react-bootstrap'
import {  useNavigate } from "react-router-dom";
import {
  getSingleEmployeeSelector
} from "../store/employee/selectors";
import { fetchEmployeeRequest, singleEmployeeRequest, updateEmployeeRequest } from "../store/employee/actions";
import { UpdateEmployeeRequestPayload, SingleEmployeeRequestPayload } from '../store/employee/types';


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

    
    const changeNameHandler = (e: FormEvent<HTMLInputElement>) => {
      if(singleEmployee != null){
        singleEmployee.name = e.currentTarget.value;
      }
    }

    const changeGenderHandler = (e: FormEvent<HTMLSelectElement>) => {
      if(singleEmployee != null){
        singleEmployee.gender = e.currentTarget.value;
      }
    }
    
    const changeSalaryHandler = (e: FormEvent<HTMLInputElement>) => {
      if(singleEmployee != null){
        singleEmployee.salary = +e.currentTarget.value;
      }
    }

    const changeDOBHandler = (e: FormEvent<HTMLInputElement>) => {
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
       <h1>Update Employee</h1>
    
      <section className="section">

 
      <form onSubmit={submitForm}>
          
          <label className="label">Employee Name</label>
          <div className="control">
            <input type="text" className="input" placeholder="Add Employee" defaultValue={singleEmployee?.name} onChange={changeNameHandler} />
          </div>
            <label className="label">Gender</label>
          <div className="control">
            <select className="input" placeholder="Select Gender" onChange={changeGenderHandler}>
               {singleEmployee?.gender === "Male" ? 
               <>
                <option value="Male" selected>Male</option>
                <option value="Female">Female</option> 
                </>: 
                <>
                <option value="Male">Male</option>
                <option value="Female"selected>Female</option>
                </>}
                
            </select>
          </div>
        <label className="label">Salary</label>
          <div className="control">
            <input type="number" min={0} className="input" placeholder="Salary" defaultValue={singleEmployee?.salary} onChange={changeSalaryHandler} />
          </div> 
           <label className="label">Date of Birth</label>
          <div className="control">
            <input type="date" className="input" placeholder="Date of Birth" defaultValue={singleEmployee?.date_of_birth.slice(0, 10)} onChange={changeDOBHandler} />
          </div>          
          <div className="control mt-4">
           <Button className="submit-button" value="submit" type="submit">Update</Button>
          </div>
        
      </form>
    </section>
    </>
  );
}

export default UpdateEmployee;