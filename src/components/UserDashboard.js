import React, { Component } from 'react';
import badge from "../images/badge_1.png"
import "./toggle.css"
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
        ],
        data: [12, 5, 6, 6, 9, 10],
        width: 700,
        height: 500,
        id: root
    }
    render() {

        return (
            <div style={{ marginTop: "70px", marginBottom: "30px" }}>
                {/* <BarChart data={this.state.data} width={this.state.width} height={this.state.height} />  */}
                <div className="jumbotron jumbotron-fluid" style={{height: "10%", backgroundColor: "white"}}>
                    <div classNmae="container">
                        <h3 className="display-5" style={{textAlign: "center"}}>Dashboard</h3>
                        <p className="lead" style={{paddingLeft:"15px"}}>Achievements:</p> 
                        <div className="achievements" style={{display: "flex", justifyContent: "center", marginBottom: "10px"}}>
                            <img src={badge} style={{width: "50px", height: "50px"}}/>
                            <img src={badge} style={{width: "50px", height: "50px"}}/>
                            <img src={badge} style={{width: "50px", height: "50px"}}/>
                            <img src={badge} style={{width: "50px", height: "50px"}}/>
                        </div>
                        <p className="lead" style={{paddingLeft:"15px"}}>Items donated: 75</p>
                        <p className="lead" style={{paddingLeft:"15px"}}>Next achievement: Serial Donator</p>
                        <p className="lead" style={{textAlign: "center"}}>Current progress</p>
                    </div>
                    <div className="progress" style={{width: "80%", backgroundColor: "gray", margin: "auto"}}>
                        {/* <h3>Next achievement progression: donate 100 items</h3> <br/> */}
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}>75%</div>
                    </div>
                </div>
                <hr style={{width: "80%", margin: "auto", paddingBottom: "70px"}}></hr>
                <div className="posts">
                    <div className="panel-group" id="accordion">
                        <div className="panel panel-default">
                            <div className="panel-heading" style={{display: "flex", justifyContent: "center"}}>
                                <h4 className="panel-title" style={{width: "50%"}}>
                                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" style={{textDecoration: "none", color: "black"}}>
                                        Your Donations <i class="fas fa-angle-double-down"></i>
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseOne" className="panel-collapse collapse in">
                                <div class="panel-body">
                                    <div class="card" style={{width: "18rem", margin: "auto",marginBottom: "30px"}}>
                                        <div class="card-header">
                                            Pending Posts
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            {this.state.randomArr.map(item => 
                                                item.accepted === false  && item.rejected === false ? <li class="list-group-item">{item.name}</li> : <div></div>
                                            )}
                                        </ul>
                                    </div>
                                    {/* just spacing shing for readability */}
                                    <div class="card" style={{width: "18rem", margin: "auto"}}>
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
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDashboard;

