import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Redirect } from 'react-router'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isLoggedIn: false
    };
  }

handleChange = (event) => {
  console.log(event.target.value);
  this.setState({
    [event.target.id]: event.target.value
  });
}

handleSubmit = (event) => {
  event.preventDefault();
  console.log(this.state.email + ' ' + this.state.password);
  this.setState({
    isLoggedIn: true
  })

  firebase
  .auth()
  .signInWithEmailAndPassword(this.state.email, this.state.password)
  .then(response => {
        console.log("Successfuly Logged In: " + response);
    }).catch(() => {
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(console.log("Successfuly Sign Up!"))
        .catch((error) => {
          console.log("Error: " + error);
        });
    });
}

  render() {
    if (this.state.isLoggedIn) {
      return <Redirect to='/userdash'/>;
    }

    return(
      <div style={{ marginTop: '70px', marginLeft: '50px', marginRight: '50px' }}>
      <form>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/ >
          <label className="form-check-label">Remember Me</label>
        </div>
        <button type="button" className="btn btn-outline-success" onClick={this.handleSubmit}>Submit</button>
      </form>
      </div>
    );
  }
}

export default Login;