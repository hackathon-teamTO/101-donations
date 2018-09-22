/*global google*/
import React, { Component } from "react";

class GoogleMap extends Component {
  componentDidMount() {
    
    var map = new google.maps.Map(this.refs.map, {
      zoom: 15,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
    var marker = new google.maps.Marker({position: {lat: this.props.lat, lng: this.props.lon}, map: map});
  }

  render() {
    return <div ref="map" style={{ width: '100%', height: '200px'}}/>;
  }
}

export default GoogleMap;