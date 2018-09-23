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
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/ >
          
          <label className="form-check-label">I accept the privacy policy outlined <a data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Here</a></label>
          <div class="collapse" id="collapseExample">
          <div class="card card-body">
            <p>
            <h5>Donor Privacy Policy for 101 Donations</h5>
Date: September 23rd, 2018
This document details 101 Donations’ policy regarding the collection, use, and secure storage of users’ personal information. This policy was developed in accordance with the Access to Information and Privacy Acts.
1.	Collection and Use of Personal Information
Disclosure of the following information is mandatory during account registration:
-	Username
-	Phone number
-	Email address
-	Residential address
This data will be stored as contact information and will primarily be used by charities to help them navigate their donation pickup route. 
Additionally, the user is prompted, albeit not required, to provide the following information:
-	Gender
-	Age
-	Ethnicity
-	Primary language
-	Religious affiliations 
This set of information will be used to gather demographic data, which will allow charities to gain insight into their major contributing group and tailor their fundraising efforts accordingly
Users are able to create donation postings that can be viewed by charities registered with 101 Donations. The posting will require information about the donation, including its associated category and an image of the donation. Charities interested in acquiring the item will be able to access the user’s contact information to coordinate its pickup.
2.	Third-Party Access
Users’ geographic location is disclosed to registered charities interested in picking up a donation item. Contact information is disclosed when a pickup has been arranged between the charity and user. Any other third-party will be barred from accessing stored data, unless they have acquired a court order or a formal government request.  
3.	Privacy Rights
Users have the right to access any personal information that has been gathered by 101 Donations. If the user wishes to retract or amend any personal information, we are obligated to comply. 101 Donation will be held accountable for any breach of information or unauthorized access to stored data.
Terms and Conditions
Date: September 22nd, 2018
You may be required to create an account to access 101 Donations’ services. Account registration will require the disclosure of account username, email address, residential address, and phone number. If you use our services to donate an item to a charity, your contact information may be disclosed to registered charities that are interested in picking up your donation item. You are not allowed to disclose falsified information in your donation posting – postings must be honest about the nature of the item you are putting up for donation.

            </p>
          </div>
        </div>
        </div>
        <button type="button" className="btn btn-outline-success" onClick={this.handleSubmit}>Submit</button>
      </form>
      </div>
    );
  }
}

export default Login;