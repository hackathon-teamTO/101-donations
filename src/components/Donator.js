import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Donator extends Component {

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
            <div className="container" style={{ marginTop: '70px' }}>
                
            </div>
        );
    }
}

export default Donator;