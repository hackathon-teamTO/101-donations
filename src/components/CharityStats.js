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
          misc: false,
          locationsList: [
            {lat:43.709050, lng: -79.392110},
            {lat:43.649150, lng: -79.371610},
            {lat:43.666560, lng: -79.379200},
            {lat:43.648599, lng: -79.366490},
            {lat:43.653144, lng: -79.423474},
            {lat:43.668295, lng: -79.420944},
            {lat:43.673013, lng: -79.335990},
            {lat:43.694117, lng: -79.303218},
            {lat:43.676117, lng: -79.425929},
            {lat:43.645070, lng: -79.476745},
            {lat:43.658484, lng: -79.474000},
            {lat:43.668915, lng: -79.434878},
            {lat:43.689276, lng: -79.264620},
            {lat:43.699081, lng: -79.270061},
            {lat:43.688655, lng: -79.266286},
            {lat:43.707892, lng: -79.275037},
            {lat:43.698336, lng: -79.326694},
            {lat:43.729082, lng: -79.289078},
            {lat:43.737207, lng: -79.282300},
            {lat: 43.635431, lng: -79.526475},
            {lat: 43.642885, lng: -79.543290},
            {lat: 43.613809, lng: -79.501766},
            {lat: 43.672443, lng: -79.542604},
            {lat: 43.712658, lng: -79.560792},
            {lat: 43.695284, lng: -79.499364},
            {lat: 43.744910, lng: -79.283092},
            {lat: 43.804158, lng: -79.319125}
        ] 
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

        if (this.state.clothes == true) {
            this.setState({
                locationsList: [
                    {lat:43.709050, lng: -79.392110},
                    {lat:43.649150, lng: -79.371610},
                    {lat:43.666560, lng: -79.379200}
                ]
            });
            console.log(this.state.locationsList);
        }
    }



    render() {
        return (
            <div className="container">
                <div className="row" style={{ marginTop: '70px' }}>
                    <div class="btn-group" role="group" aria-label="Basic example" style={{margin: 'auto'}}>
                        <Link to={'/charitypostfeed'}>
                            <button type="button" class="btn btn-secondary" style={{borderRadius: '0', width: '130px'}}>Posts</button>
                        </Link>     
                        <Link to={'/charitypostpickup'}>
                            <button type="button" class="btn btn-secondary" style={{borderRadius: '0', width: '130px'}}>Items Pickup</button>
                        </Link>                   
                        <button type="button" class="btn btn-secondary active" style={{borderRadius: '0', width: '130px'}}>Statistics</button>
                            
                    </div>
                </div>
                <div className="row" style={{ marginTop: '30px', padding: '0 20px 20px 20px' }}>
                    <h4>Donator Heat Map</h4>
                    <div style={{ width: '100%', height: '300px', alignItems: 'center'}}>
                        <GoogleMapClusters mainLon={-79.384293} mainLat={43.653908} locations={this.state.locationsList}/>
                    </div>
                    <div style={{margin: 'auto', borderStyle: 'solid', width: '100%', borderColor: '#28a745', paddingTop: '20px', paddingBottom: '20px', paddingLeft: '50px', background: '#28a745', color: 'white'}}>
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
                    <div style={{marginTop: '30px'}}>
                        <h4>Demographic Statistics</h4>
                        <img style={{width: '400px', height: '320px', margin: 'auto'}} src="https://www.statcrunch.com/grabimage.php?image_id=551934" />
                    </div>
                </div>
            </div>
        );
    }
}

export default CharityStats;