import 'bootstrap/dist/css/bootstrap.css';
import ListEmployee from './components/ListEmployee';
import { BrowserRouter, Route, Routes, useRoutes  } from "react-router-dom";
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';


const App = () => {

   let routes = useRoutes([
    { path: "/", element: <ListEmployee /> },
      { path: "/add", element: <AddEmployee /> },
       { path: "/update/:id", element: <UpdateEmployee /> },
 
  ]);
  return routes;
 
};

const AppWrapper = () => {
  return (
    <BrowserRouter>
    <div className="container">

      <App />
    </div>
    </BrowserRouter>
  );
};

export default AppWrapper;