import React, { Component } from 'react';


const styles = {
    className: "img-fluid float-left align-self-center",
    
};

const padding = {margin: 10};


class Landing extends Component {
    render(){
        return (
            <div className="landing" style={{ marginTop: '120px', display:"flex" , justifyContent:"center", flexFlow:"row-wrap" }}>

                <div className="Container-fluid">
                    <div className="row">
                  
                    <div className="col-md-2 col-6" style={{padding:'4px' }}>
                <img src="https://via.placeholder.com/300x150" className= {styles.className} style={styles.padding} alt="Responsive image"/>
                    </div>
                  
                    <div className="col-md-2 col-6" style={{padding:'4px'}}>
                <img src="https://via.placeholder.com/300x150" className={styles.className} alt="Responsive image"/>
                </div>
            
                <div className="col-md-2 col-6" style={{padding:'4px'}}>
                <img src="https://via.placeholder.com/300x150" className={styles.className} alt="Responsive image"/>
                </div>
         
                <div className="col-md-2  col-6" style={{padding:'4px'}}>
                <img src="https://via.placeholder.com/300x150" className={styles.className} alt="Responsive image"/>
                </div>
                <div className="col-md-2  col-6" style={{padding:'4px'}}>
                <img src="https://via.placeholder.com/300x150" className={styles.className} alt="Responsive image"/>
                </div>
                <div className="col-md-2  col-6" style={{padding:'4px'}}>
                <img src="https://via.placeholder.com/300x150" className={styles.className} alt="Responsive image"/>
                </div>
               
            </div>
            </div>
            
            </div>

            

        )
    }
}



export default Landing