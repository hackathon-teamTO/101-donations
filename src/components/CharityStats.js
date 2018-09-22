import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';


import GoogleMapClusters from "./google_map_clusters";


class CharityStats extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          clothes: false,
          food: false,
          nonPerishables: false,
          misc: false
        }
      }
    

      componentDidMount() {
          // request list data
      }

      handleCheck = (event) => {
        const name = [event.target.id];
        this.setState({
            [event.target.id]: !this.state[name]
        });
        console.log(this.state.clothes);
        /*
        this.setState({
          [event.target.id]: event.target.value
        });
        */
      }


    render() {
        return (
            <div className="container">
                <div className="row" style={{ marginTop: '70px' }}>
                    <div class="btn-group" role="group" aria-label="Basic example" style={{margin: 'auto'}}>
                        <Link to={'/charitypostfeed'}>
                            <button type="button" class="btn btn-secondary">Posts</button>
                        </Link>     
                        <Link to={'/charitypostpickup'}>
                            <button type="button" class="btn btn-secondary">Items Pickup</button>
                        </Link>                   
                        <button type="button" class="btn btn-secondary active">Statistics</button>
                            
                    </div>
                </div>
                <div className="row" style={{ marginTop: '70px', padding: '0 20px 20px 20px' }}>
                    <p>charityStats</p>
                    <div style={{ width: '100%', height: '300px', alignItems: 'center'}}>
                        <GoogleMapClusters mainLon={-79.384293} mainLat={43.653908} />
                    </div>
                    <div style={{margin: 'auto'}}>
                        <form>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="clothes" value="clothes" onChange={this.handleCheck}></input>
                                <label className="form-check-label" htmlFor="inlineCheckbox2">Clothes</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="food" value="food" onChange={this.handleCheck}></input>
                                <label className="form-check-label" htmlFor="inlineCheckbox2">Food</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="nonPerishables" value="nonPerishables" onChange={this.handleCheck}></input>
                                <label className="form-check-label" htmlFor="inlineCheckbox2">Non-Perishables</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="misc" value="misc" onChange={this.handleCheck}></input>
                                <label className="form-check-label" htmlFor="inlineCheckbox2">Misc</label>
                            </div>                              
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CharityStats;