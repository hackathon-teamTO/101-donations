import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import * as firebase from 'firebase';
import './App.css';

import Header from './components/Header';
import CharityPostFeed from './components/CharityPostFeed';
import Login from './components/Login';
import Donator from './components/Donator';
import NewPost from './components/NewPost';
import Landing from './components/Landing';
import UserDashboard from "./components/UserDashboard";
import CharityStats from './components/CharityStats';
import CharityPostPickup from './components/CharityPostPickup';

const config = {
  apiKey: "AIzaSyB4pcLbkq9H1psYfWY0kF9W9F1raOSErH0",
  authDomain: "donator-af656.firebaseapp.com",
  databaseURL: "https://donator-af656.firebaseio.com",
  projectId: "donator-af656",
  storageBucket: "donator-af656.appspot.com",
  messagingSenderId: "94557942012"
};
firebase.initializeApp(config);

class App extends Component {
 
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/charitypostfeed" component={CharityPostFeed} />
            <Route exact path="/charitypostpickup" component={CharityPostPickup} />
            <Route exact path="/charitystats" component={CharityStats} />
            <Route exact path="/post/new" component={NewPost} />
            <Route path="/login" component={Login} />
            <Route path="/userdash" component={UserDashboard}/>
          </div>
				</BrowserRouter>
      </div>
    );
  }
}

export default App;
