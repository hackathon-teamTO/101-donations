import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';

import GoogleMap from "./google_map";


class CharityPostFeed extends Component {
    handleAccept() {
        // Change item state to accepted
        const dbRef = firebase.database().ref('charities');
        var d = new Date();
        var datetime =
            d.getDate() +
            '/' +
            (d.getMonth() + 1) +
            '/' +
            d.getFullYear() +
            ' ' +
            d.getHours() +
            ':' +
            d.getMinutes() +
            ':' +
            d.getSeconds();

        dbRef.child('donationQueue').push({
            id: 1,
            cName: 'parham',
            exitTime: datetime
        })
    }

    handleReject() {
        // Remove Item from queue all together
    }

    renderList() {
        return (
            <div className="col-sm-6">
                <div className="card" style={{width: '18rem'}}>
                    <img className="card-img-top" src=".../100px180/" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>            
        );
    }

    render() {
        return (
            <div className="container">
                <div className="row" style={{ marginTop: '70px' }}>
                    <div className="col-sm-6">
                        <div className="card" style={{ marginTop: '20px' }}>
                            <img style={{ height: '100px' }} className="card-img-top" src="https://via.placeholder.com/500x100" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">By: John Doe</h5>
                                <h5 className="card-title">Item Category: insert cat</h5>
                                <h5 className="card-title">Location</h5>
                                <div style={{ width: '200px', height: '200px' }}>
                                    <GoogleMap lon={100} lat={100} />
                                </div>
                                <button type="button" className="btn btn-outline-success btn-lg btn-block" onClick={this.handleAccept()}>Accept</button>
                                <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.handleReject()}>Reject</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card" style={{ marginTop: '20px' }}>
                            <img className="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-outline-success">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card" style={{ marginTop: '20px' }}>
                            <img className="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-outline-success">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card" style={{ marginTop: '20px' }}>
                            <img className="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-outline-success">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CharityPostFeed;