import React, { Component } from 'react';
import "bootstrap-input-spinner";

const styles = {
  iconsBox: {
    height: '150px',
    overflow: "scroll"
  }

}

class NewPost extends Component {
  render() {
    return (
      <div style={{ marginTop: '80px',  marginLeft: '50px', marginRight: '50px' }}>
        <form className='col-md-10'>
        <div class="form-group row">
          <div class="form-group col-md-8">
            <label htmlFor="donation-selector">Donation Categories.</label>
            <select class="form-control" id="donation-selector">
              <option>Apparel</option>
              <option>Electronics</option>
              <option>Non Perishable</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <div class="form-group col-md-8">
          <label htmlFor="dQuantity">Quantity</label>
          <input  className='form-control col-md-8' id='dQuantity' type="number" placeholder="Enter a Quantity"
          />
          </div>
        </div>

        <div class="form-group row">
          <div class="form-group col-md-8">
            <div className="" style={styles.iconsBox}>

              <div style={{padding: '10px', display: 'flex', 'flex-direction': 'column' }}>
                <a href="https://placeholder.com">
                <img id='fb' src="https://via.placeholder.com/100x100"></img></a>
                <label htmlFor='fb'>Furniture Bank</label>
              </div>

              <div style={{padding: '10px', display: 'flex', 'flex-direction': 'column' }}>
                <a href="https://placeholder.com">
                <img id='fb' src="https://via.placeholder.com/100x100"></img></a>
                <label htmlFor='fb'>The Children's Book bank</label>
              </div>

              <div style={{padding: '10px', display: 'flex', 'flex-direction': 'column' }}>
                <a href="https://placeholder.com">
                <img id='fb' src="https://via.placeholder.com/100x100"></img></a>
                <label htmlFor='fb'>The Local Charity</label>
              </div>

              <div style={{padding: '10px', display: 'flex', 'flex-direction': 'column' }}>
                <a href="https://placeholder.com">
                <img id='fb' src="https://via.placeholder.com/100x100"></img></a>
                <label htmlFor='fb'>Toronto Youth Development</label>
              </div>

            </div>
          </div>
        </div>

        <div class="form-group row">
          <div class="form-group col-md-8">
          </div>
        </div>

        <div class="form-group row">
          <div class="form-group col-md-8">
          </div>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default NewPost;