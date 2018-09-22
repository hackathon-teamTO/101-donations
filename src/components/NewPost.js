import React, { Component } from 'react';
import "bootstrap-input-spinner";

const styles = {
  iconsBox: {
    height: '150px',
    display: 'flex',
    'flex-wrap': "wrap",
    'overflow': "scroll",
    'justify-content': 'center'
  },
  iconsLayout: {
    padding: '10px',
    display: 'flex',
    'flex-direction': 'column',
  }

}

class NewPost extends Component {
  render() {
    return (
      <div style={{ marginTop: '80px',  marginLeft: '50px', marginRight: '50px' }}>
        <form className='col-md-10'>
        <div className="form-group row">
          <div className="form-group col-md-8">
            <label htmlFor="donation-selector">Donation Categories.</label>
            <select className="form-control" id="donation-selector">
              <option>Apparel</option>
              <option>Electronics</option>
              <option>Non Perishable</option>
              <option>Money</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <div className="form-group col-md-8">
          <label htmlFor="dQuantity">Quantity</label>
          <input  className='form-control col-md-8' id='dQuantity' type="number" placeholder="Enter a Quantity"/>
          </div>
        </div>

        <div className="form-group row">
          <div className="form-group col-md-8">
          <h6>Select a charity</h6>
            <div  className="form-control"style={styles.iconsBox}>
              <div className="form-group" style={styles.iconsLayout}>
                <img id='fb' src="https://via.placeholder.com/100x100"></img>
                <label htmlFor='fb'>Furniture Bank</label>
              </div>
              <div className="form-group " style={styles.iconsLayout}>
                <img id='cbd' src="https://via.placeholder.com/100x100"></img>
                <label htmlFor='cbd'>Book bank</label>
              </div>
              <div className="form-group " style={styles.iconsLayout}>
                <img id='lc' src="https://via.placeholder.com/100x100"></img>
                <label htmlFor='lc'>Local Charity</label>
              </div>
              <div className="form-group " style={styles.iconsLayout}>
                <img id='tyd' src="https://via.placeholder.com/100x100"></img>
                <label htmlFor='tyd'>Toronto Youth</label>
              </div>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="all"></input>
              <label className="form-check-label" htmlFor="inlineCheckbox2">Select All</label>
            </div>

          </div>
        </div>


        <div className="form-group row">
          <div className="form-group col-md-8">
            <div className="form-group">
              <label htmlFor="exampleFormControlFile1">Picture Image</label>
              <input type="file" className="form-control-file" id="exampleFormControlFile1"></input>
            </div>
          </div>
        </div>

        <div className="form-group row">
        <hr/>
          <div className="form-group col-md-8">
          <h6>Dornator inforamtion:</h6>

              <div className="form-group col">
                <input type="text" className="form-control" placeholder="First name"></input>
              </div>
              <div className="form-group col">
                <input type="text" className="form-control" placeholder="Last name"></input>
              </div>
              <div class="form-group col">
                <input type="text" className="form-control" id="inputAddress" placeholder="Address"></input>
              </div>
              <div className="form-group col">
                <input type="text" className="form-control" id="inputZip" placeholder="Zip Code"></input>
              </div>

          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default NewPost;