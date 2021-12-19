import {FC, useEffect,  FormEvent} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import 'react-accordion-ts/src/panel.css';
import { useParams } from "react-router-dom";
import {Button } from 'react-bootstrap'
import {  useNavigate } from "react-router-dom";


import {
  getSingleEmployeeSelector
} from "../store/employee/selectors";
import { singleEmployeeRequest, deleteEmployeeRequest, fetchEmployeeRequest } from "../store/employee/actions";
import { DeleteEmployeeRequestPayload, SingleEmployeeRequestPayload } from '../store/employee/types';


const DeleteEmployee: FC = () => {
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

    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(singleEmployee!){
        const deleteEmployee: DeleteEmployeeRequestPayload = {
            _id: singleEmployee._id,
            
            }

            dispatch(deleteEmployeeRequest(deleteEmployee));
            dispatch(fetchEmployeeRequest());
            navigate('/');
        }
    }
 
 

 

    return(
    <>
       <h1>Delete Employee</h1>
    
      <section className="section">

 
      <form onSubmit={submitForm}>
            <h2>Are you sure you want to remove this employee?</h2>

              <p>
                Name: {singleEmployee?.name}<br/>
                Date of Birth : {singleEmployee?.date_of_birth.slice(0, 10)}<br/>
                Gender: {singleEmployee?.gender}<br/>
                Salary: {singleEmployee?.salary}
     </p>
          <div className="control mt-4">
           <Button className="submit-button" value="submit" type="submit">Yes</Button>
           <Button href="/">No</Button>
          </div>
        
      </form>
    </section>
    </>
  );
}

export default DeleteEmployee;