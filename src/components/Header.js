import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Link } from 'react-router-dom';

class Header extends Component {
    state = { loggedIn: false };

    componentDidMount() {
        // Check if user is logged in
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              this.setState({ loggedIn: true });
            } else {
              this.setState({ loggedIn: false });
            }
          });
    }

    renderHeaderContent() {
        // Show different header options based on whether the user is logged in or not
        if (this.state.loggedIn) {
            return (
            <Link to={'/post/new'}>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">New Post</button>
            </Link>);
        } else {
            return (
            <Link to={'/login'}>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
            </Link>);
        }
    }

    renderMenuButtons() {
        if (this.state.loggedIn) {
            return (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <a className="nav-link" onClick={() => firebase.auth().signOut()}>Logout</a>
                </li>
            </ul>);
        } else {
            return (
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                    <a className="nav-link" href="#">Home</a>
                </li>
            </ul>);
        }
    }

    
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>                

                <Link to={'/'} className="navbar-brand">Donator</Link>
              
                {this.renderHeaderContent()}

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                {this.renderMenuButtons()}
            </div>

                
            </nav>

        );
    }
}

export default Header;