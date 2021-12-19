import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-accordion-ts/src/panel.css';
import { Accordion, Button } from 'react-bootstrap'
import { 
  StyledAccordion , 
  StyledAccordionBody, 
  StyledAccordionHeader, 
  StyledAddButton,
  StyledAccordionItem
} from './styles/ListEmployee.styles';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab} from '@fortawesome/free-brands-svg-icons'
import { faEdit, faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  getEmployeesSelector,
} from "../store/employee/selectors";
import { fetchEmployeeRequest } from "../store/employee/actions";
import { IEmployee } from '../store/employee/types';
import { Heading } from './styles/Header.styles';

library.add(fab, faEdit, faPlusCircle, faTrash)

const ListEmployee: FC = (props) => {

  const dispatch = useDispatch();     
  const employees = useSelector(getEmployeesSelector);
     
  useEffect(() => {
        dispatch(fetchEmployeeRequest());
  }, []);



   return(
      <> 
      <Heading>Our Employees</Heading>
      <div className="row ">
<div className="col-9"> </div>
<div className="col-3">

       <StyledAddButton variant="success" href="/add" >  <FontAwesomeIcon icon="plus-circle" />  &nbsp; Add New Employee</StyledAddButton>
</div>
      </div>
       
        <StyledAccordion >

        { Object.keys(employees).length === 0
          ?
            <p className="py-4 has-text-centered">No Employees Found</p>
          :
            <div>
              {Object.values(employees).map((employee: IEmployee) => {
                return <StyledAccordionItem  eventKey={employee._id}>
    <StyledAccordionHeader>{employee.name}</StyledAccordionHeader>
    <StyledAccordionBody>
      <div className="row">
        <div className="col-7"> <p>
       <b>Date of Birth :</b>  {employee.date_of_birth.slice(0, 10)}<br/>
       <b>Gender:</b>  {employee.gender}<br/>
       <b>Salary:</b>  {employee.salary}
     </p></div>
        <div className="col-5 mt-3">
          <Button className="mr-4" variant="success" href={`update/${employee._id}`}> <FontAwesomeIcon icon="edit" /> &nbsp;  Edit</Button>
      <Button  className="mx-3" variant="danger" href={`delete/${employee._id}`}>   <FontAwesomeIcon icon="trash" /> &nbsp; Delete</Button>

        </div>
      </div>
    

      
    </StyledAccordionBody>
  </StyledAccordionItem >
                
              })}
            </div>
        }
        </StyledAccordion>

    
     
  
        </>

            
  );
}

export default ListEmployee;