import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Mail from './components/mail/Mail';
import EmailList from './components/emaillist/EmailList';
import SendMail from './components/sendmail/SendMail';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from './features/userSlice';
import Login from './components/login/Login';
import { auth } from './firebase';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((user)=>{
      if (user){
        // user is logged in
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))
      }else{

      }
    })
  }, [])

  return (
    <Router>

      {
        !user ? (<Login />) :
          (
            <div className="app">
              <Header />

              <div className="app__body">
                <Sidebar />

                <Switch>
                  <Route path="/mail">
                    <Mail />
                  </Route>
                  <Route path="/">
                    <EmailList />
                  </Route>
                </Switch>
              </div>
              {
                sendMessageIsOpen && <SendMail />
              }
            </div>
          )
      }

    </Router>
  );
}

export default App;
