import React, { Component } from 'react';

class UserDashboard extends Component {
    state = {
        randomArr: [
            {
                name: "item1",
                accepted: false,
                rejected: false
            },
            {
                name: "item2",
                accepted: false,
                rejected: false
            },
            {
                name: "item3",
                accepted: true,
                rejected: false
            },
            {
                name: "item4",
                accepted: false,
                rejected: true
            }
        ]
    }
    render() {
        
        return (
            <div style={{ marginTop: "70px" }}>
                this is the dashboard
                <div className="stats">
                    stats go here
                </div>
                <div className="posts">
                    user posts are just under here
                    <div class="card" style={{width: "18rem", marginBottom: "20px"}}>
                        <div class="card-header">
                            Pending Posts
                        </div>
                        <ul class="list-group list-group-flush">
                            {this.state.randomArr.map(item => 
                                item.accepted === false  && item.rejected === false ? <li class="list-group-item">{item.name}</li> : <div></div>
                            )}
                        </ul>
                    </div>
                    <div class="card" style={{width: "18rem"}}>
                        <div class="card-header">
                            Accepted Donations
                        </div>
                        <ul class="list-group list-group-flush">
                            {this.state.randomArr.map(item =>
                                item.accepted === true  && item.rejected === false ? <li class="list-group-item">{item.name}</li> : <div></div>           
                            )}
                        </ul>
                        <div class="card-header">
                            Rejected Donations
                        </div>
                        <ul class="list-group list-group-flush">
                            {this.state.randomArr.map(item =>
                                item.accepted === false  && item.rejected === true ? <li class="list-group-item">{item.name}</li> : <div></div>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDashboard;