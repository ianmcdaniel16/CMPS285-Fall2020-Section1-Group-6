import React,{useState, useContext} from 'react';
import './index.css';
import Heading from "./heading";
import Home from "./Home";
import Appointment from "./Appointment";
import Contacts from "./Contacts";
import Login from "./Loginn";
import Admin from "./Admin";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {LoginInfo} from "./LoginContext";
import Signup from './signup';


function App() {
  var redux = require('redux');
  var {Provider} = require('react-redux'); 

  var username = (state = null, action) => {
      switch (action.type){
        case 'Log_in':
          return action.username;
        case 'Log_out':
          return null;
        default:
      
  return state;
   }
  }
  var reducer = redux.combineReducers ({username});
  var store = redux.createStore(reducer);
 

  var requireLogin = (nextState, replace, next) => {
    if(store.getState().username === null){
      replace('/')
    }
  }

   
   
  


  return (
     <Provider store={store}>
       <Router>
         <div className="App">
           <LoginInfo>
            <Heading/>
                <Switch>
                     <Route path="/" exact component={Home}/>
                     <Route path="/appointment"component={Appointment}/>
                     <Route path="/login"component={Login}/>
                     <Route path="/admin"component={Admin} onEnter={requireLogin}/>
                     <Route path = "/signup" component = {Signup}/>
                  </Switch>
             <Contacts />
            </LoginInfo>
         </div>
        </Router>
      </Provider>
  );
}

export default App;
