import './App.css';
import routes from './Routes/routes';
import { useRoutes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const routing = useRoutes(routes);
  return (
    <div className="App" >
        {routing}
    </div> 
  );
}

export default App;
