import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';


import GoogleMap from "./google_map";


class CharityPostPickup extends Component {
    constructor() {
        super();

        this.state = {
            postQueueList: null
        }
    
      }

      componentDidMount() {
          // request list data
          this.getPostData();
      }

    handleAccept(event) {
        // console.log("post id: " + postID);
        // Move item to acceptedQueue
        // Item will now not be displayed to other charities (change state to confirmed)
        /*
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

        dbRef.child('acceptedQueue').push({
            id: 1,
            cName: 'parham',
            exitTime: datetime
        }).then(
            console.log("Success")
        );
        */
       

        firebase.database().ref(`charities/123/postQueue/${event.target.value}`).update({
            status: 'picked-up'
        });
        
    }

    handleReject(event) {
        // Remove Item from postQueue all together
        firebase.database().ref(`charities/123/postQueue/${event.target.value}`).remove();
    }

    getPostData() {
        // Get posts where id matches charity and state is available
        const dbRef = firebase.database().ref('charities');
        dbRef.on('value', snapshot => {
            let postQueue = {
                data: null
            };
            postQueue.data = snapshot.child('123').child('postQueue').val();
            this.setState(
                {postQueueList: postQueue.data}
            )
        });

    }

    renderPosts() {
        var i = 0;
        return _.map(this.state.postQueueList, post => {
            if (post.status == 'reserved') {
                console.log(post.id);
                i += 1;
                return (
                    <div className="col-sm-6">
                        <div className="card" style={{ marginTop: '30px', boxShadow: '7px 7px 16px 0 rgba(0, 0, 0, .3)' }}>
                            <img style={{ height: '200px' }} className="card-img-top" src="https://via.placeholder.com/450x200" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{'By: ' + post.firstn + ' ' + post.lastn}</h5>
                                <h5 className="card-title">{'Item Category: ' + post.category}</h5>
                                <h5 className="card-title">Location</h5>
                                <div style={{ width: '100%', height: '200px', alignItems: 'center', marginBottom: '20px'}}>
                                    <GoogleMap lon={-79.384293} lat={43.653908} />
                                </div>
                                <button type="button" className="btn btn-outline-success btn-lg btn-block" value={post.id} onClick={this.handleAccept}>Confirm Pickup</button>
                                <button type="button" className="btn btn-outline-danger btn-lg btn-block" value={post.id} onClick={this.handleReject}>Remove</button>
                            </div>
                        </div>
                    </div>
                );
            }
        });
    }


    render() {
        return (
            <div className="container">
                <div className="row" style={{ marginTop: '70px' }}>
                    <div class="btn-group" role="group" aria-label="Basic example" style={{margin: 'auto'}}>
                        <Link to={'/charitypostfeed'}>
                            <button type="button" class="btn btn-secondary" style={{borderRadius: '0', width: '130px'}}>Posts</button>
                        </Link>
                            <button type="button" class="btn btn-secondary active" style={{borderRadius: '0', width: '130px'}}>Items Pickup</button>
                        <Link to={'/charitystats'}>
                            <button type="button" class="btn btn-secondary" style={{borderRadius: '0', width: '130px'}}>Statistics</button>
                        </Link>
                    </div>
                    {this.renderPosts()}
                </div>
            </div>
        );
    }
}

export default CharityPostPickup;