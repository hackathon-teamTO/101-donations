import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CharityPostFeed extends Component {
    //this is a comment

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