import React, { Component } from 'react';
import "bootstrap-input-spinner";

const styles = {
  iconsBox: {
    height: '150px',
    display: 'flex',
    'flex-wrap': "wrap",
    overflow: "scroll",
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
          <input  className='form-control col-md-8' id='dQuantity' type="number" placeholder="Enter a Quantity"
          />
          </div>
        </div>

        <div className="form-group row">
          <div className="form-group col-md-8">
          <h6>Select a charity</h6>
            <div  multiple className="form-control"style={styles.iconsBox}>

              <div class="form-group" style={styles.iconsLayout}>
                <a href="https://www.furniturebank.org/" target="_blank">
                <img id='fb' src="https://via.placeholder.com/100x100"></img></a>
                <label htmlFor='fb'>Furniture Bank</label>
              </div>

              <div class="form-group" style={styles.iconsLayout}>
                <a href="www.childrensbookbank.com" target="_blank">
                <img id='fb' src="https://via.placeholder.com/100x100"></img></a>
                <label htmlFor='fb'>Book bank</label>
              </div>

              <div class="form-group" style={styles.iconsLayout}>
                <a href="https://thelocalcharity.com" target="_blank">
                <img id='fb' src="https://via.placeholder.com/100x100"></img></a>
                <label htmlFor='fb'>Local Charity</label>
              </div>

              <div class="form-group" style={styles.iconsLayout}>
                <a href="www.torontoyouth.org/" target="_blank">
                <img id='fb' src="https://via.placeholder.com/100x100"></img></a>
                <label htmlFor='fb'>Toronto Youth</label>
              </div>

            </div>
          </div>
        </div>

        <div className="form-group row">
          <div className="form-group col-md-8">
          </div>
        </div>

        <div className="form-group row">
          <div className="form-group col-md-8">
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default NewPost;