import 'bootstrap/dist/css/bootstrap.css';
import ListEmployee from './components/ListEmployee';
import { BrowserRouter, Route, Routes, useRoutes  } from "react-router-dom";
import AddEmployee from './components/AddEmployee';


const App = () => {

   let routes = useRoutes([
    { path: "/", element: <ListEmployee /> },
      { path: "/add", element: <AddEmployee /> },
 
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