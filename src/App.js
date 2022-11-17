import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect } from 'react';
import MainPage from './Views/MainPage';
import Login from './Views/Login';


function App({nearConfig, walletConnection, currentUser}) {
  return (
    <div className="App" >
        {
          currentUser
          ? <MainPage
          nearConfig = {nearConfig}
          walletConnection = {walletConnection}
          currentUser = {currentUser}
          />
          : <Login
          nearConfig = {nearConfig}
          walletConnection = {walletConnection}
          currentUser = {currentUser}/>
        }
    </div> 
  );
}

export default App;
