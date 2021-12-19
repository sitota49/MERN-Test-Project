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

import { Heading, StyledButton } from './styles/Header.styles';
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
           <div className="row">
      <div className="col-2">
    <Button href="/" variant='success' className='my-3'>Go Back</Button>
      </div>
      <div className="col-10">
       
      </div>
    </div>
    <div className="row">
<Heading>Remove Employee</Heading>
    </div>
    
      <section className="section">

 
      <form onSubmit={submitForm}>
            <h5>Are you sure you want to remove this employee?</h5>

              <p>
                Name: {singleEmployee?.name}<br/>
                Date of Birth : {singleEmployee?.date_of_birth.slice(0, 10)}<br/>
                Gender: {singleEmployee?.gender}<br/>
                Salary: {singleEmployee?.salary}
              </p>
          <div className="control mt-4 ">
           <Button className="submit-button mr-4" variant="success" value="submit" type="submit">Yes</Button>
           <Button className="mx-3"  variant="success" href="/">No</Button>
          </div>
        
      </form>
    </section>
    </>
  );
}

export default DeleteEmployee;