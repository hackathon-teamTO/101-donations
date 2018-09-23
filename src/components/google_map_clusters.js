/*global google*/
/*global MarkerClusterer*/
import React, { Component } from "react";

class GoogleMapClusters extends Component {
  componentDidMount() {
    
    var map = new google.maps.Map(this.refs.map, {
      zoom: 10,
      center: {
        lat: this.props.mainLat,
        lng: this.props.mainLon,
      }
    });
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var markers = this.props.locations.map(function(location, i) {
        return new google.maps.Marker({
          position: location,
          label: labels[i % labels.length]
        });
      });

      // Add a marker clusterer to manage the markers.
      var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
  }
  

  render() {
    return <div ref="map" style={{ width: '100%', height: '300px'}}/>;
  }
}

export default GoogleMapClusters;