import React from 'react';
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
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function App() {
  const sendMessageIsOpen  = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser)

  return (
    <Router>
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
    </Router>
  );
}

export default App;
