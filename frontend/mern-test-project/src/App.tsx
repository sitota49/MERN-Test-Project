import 'bootstrap/dist/css/bootstrap.css';
import ListEmployee from './components/ListEmployee';
import { BrowserRouter, useRoutes  } from "react-router-dom";
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import DeleteEmployee from './components/DeleteEmployee';
import GlobalStyles, { AppContainer } from "./components/styles/Globalstyles";
import { Heading } from './components/styles/Header.styles';


const App = () => {

   let routes = useRoutes([
    { path: "/", element: <ListEmployee /> },
    { path: "/add", element: <AddEmployee /> },
     { path: "/update/:id", element: <UpdateEmployee /> },
    { path: "/delete/:id", element: <DeleteEmployee /> },
 
  ]);
  return routes;
 
};

const AppWrapper = () => {
  return (
    <BrowserRouter>
    
   <AppContainer>
      <App />
   </AppContainer>

    </BrowserRouter>
  );
};

export default AppWrapper;