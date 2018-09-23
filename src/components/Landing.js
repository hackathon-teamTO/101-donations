import React, { Component } from 'react';


const styles = {
    className: "img-fluid float-left align-self-center",
    
};


const padding = {margin: 10};


class Landing extends Component {
    render(){
        return (
 
            <div className="landing" style={{ marginTop: '70px', display:"flex" , justifyContent:"center", flexFlow:"row-wrap", background:"whitesmoke"}}>
               
              
                <div className="Container-fluid">
                
                <div className="col-md-2 col-8" style={{padding:'4px', height:"300px", width: "300px", margin:"2px auto"}}>
                    <img src="https://developers.google.com/donation/images/logo_donation_api.png" className= {styles.className} style={{height: "100%",width:"100%", margin:"0 auto"}} alt="Responsive image"/>
                </div>
                  
              
                <br/>
                <br/>
                <br/>

                <div className="row" style={{margin:"0px auto"}}>
                    <div className="col-md-12 col-xs-8">

                <form className="text-center" style={{margin:"0px auto "}}>
                    <div style={{marginBottom: '15px'}}>
                        <button type="button" className="btn btn-outline-success btn-block btn-lg text-center" style={{width:"80%", margin:"auto"}}>Donate</button>
                    </div>
                    <div>
                        <button type="button" className="btn btn-outline-primary btn-block btn-lg text-center"  style={{width:"80%", margin:"auto"}}>Register Organization</button>
                    </div>
                </form>
                <br />
                </div>
                </div>
            <div className="row">
                <div className ="col-12" style={{margin:"0 auto"}}>
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                <div className="carousel-item active" style={{margin:"0 auto", height:"300px", width:"80%"}}>
                    <img className="d-block w-100" style={{height: "100%",width:"100%", margin:"0 auto"}} src="https://www.canadahelps.org/media/Goodwill-Campaign.jpg" alt="First slide"/>
                </div>
                <div className="carousel-item" style={{margin:"0 auto", height:"300px", width:"80%"}}>
                    <img className="d-block w-100" style={{height: "100%",width:"100%", margin:"0 auto"}} src="http://www.hrmagazine.co.uk/article-images/152329/BHF_and_Macmillan_for_web_popup.jpg" alt="Second slide"/>
                </div>
                <div className="carousel-item" style={{margin:"0 auto", height:"300px", width:"80%"}}>
                    <img className="d-block w-100" style={{height: "100%",width:"100%", margin:"0 auto"}} src="http://heightspress.com/wp-content/uploads/2015/03/amnesty-international-march.jpg" alt="Third slide"/>
                </div>
                <div className="carousel-item" style={{margin:"0 auto", height:"300px", width:"80%"}}>
                    <img className="d-block w-100" style={{height: "100%",width:"100%", margin:"0 auto"}} src="https://www.goodwillvalleys.com/wp-content/uploads/2018/02/people-with-donation-boxes_iStock_000020408077_-1-768x404.jpg" alt="Fourth slide"/>
                </div>
                </div>
                </div>
                </div>
                </div>
                <br/>
                <br/>


                    <div className="row">



                    <div className="col-md-2 col-6" style={{padding:'4px', height:"150px",margin:"0 auto" }}>
                <img src="http://www.hopevolleyball.com/wp-content/uploads/2018/03/2018-Charity-Logos-1024x358.jpg" className= {styles.className} style={{height: "100%",width:"100%", margin:"0 auto"}} alt="Responsive image"/>
                    </div>
                  
                    <div className="col-md-2 col-6" style={{padding:'4px', height:"150px" }}>
                <img src="https://pbs.twimg.com/profile_images/935332981434208256/TsGFOtzR_400x400.jpg" className={styles.className} style={{height: "100%",width:"100%", margin:"0 auto"}} alt="Responsive image"/>
                </div>
            
                <div className="col-md-2 col-6" style={{padding:'4px' , height:"150px" }}>
                <img src="http://www.toronto-charities.ca/wp-content/uploads/2017/09/smaller_Delisle_Logo_2colour_lores3957.jpg" className={styles.className} style={{height: "100%",width:"100%", margin:"0 auto"}} alt="Responsive image"/>
                </div>
         
                <div className="col-md-2  col-6" style={{padding:'4px' , height:"150px"}}>
                <img src="http://www.catholiccharitiestor.org/CC/media/catholic-charities/History%20Timeline/catholic-charities.jpg?width=751&height=326&ext=.jpg" className={styles.className} style={{height: "100%", width:"100%",margin:"0 auto"}} alt="Responsive image"/>
                </div>
                <div className="col-md-2  col-6" style={{padding:'4px' , height:"150px" }}>
                <img src="https://dynamicmedia.zuza.com/zz/m/original_/f/a/faaa04bb-a031-4a3c-a932-75aadab99092/CB_SPT_Z_jumpstart(logo)_Gallery.jpg" className={styles.className} style={{height: "100%", width:"100%", margin:"0 auto"}} alt="Responsive image"/>
                </div>
                <div className="col-md-2  col-6" style={{padding:'4px' , height:"150px"}}>
                <img src="https://www.volunteerattract.com/vmbc/getdocument.php?Img=350&F=1490210556_574db09c684414.20548134&"  className={styles.className } style={{height: "100%", width:"100%", margin:"0 auto"}} alt="Responsive image"/>
                </div>
               
            </div>
            </div>
            
            </div>

            

        )
    }
}



export default Landing