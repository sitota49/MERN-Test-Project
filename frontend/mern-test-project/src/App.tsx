import 'bootstrap/dist/css/bootstrap.css';
import EmployeeList from './components/EmployeeList';
import {  Button } from 'react-bootstrap'
const App = () => {
 

  return (
    <>
     <Button variant="primary">Add New Employee</Button>
      <EmployeeList />
    </>
  );
};

export default App;