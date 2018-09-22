import React, { Component } from 'react';
import "bootstrap-input-spinner";
import * as firebase from 'firebase';

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

  state = {
    status: 'available',
    category:'',
    dQuantity:'',
    charity: 'Furniture Bank',
    pictureUpload:'',
    firstn:'',
    lastn:'',
    inputAddress: '',
    inputZip: ''
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.id]: event.target.value.toUpperCase()
    });
  }

  getData = event =>{
    event.preventDefault();
    console.log('submitting')
    const data = {
      id: '',
      status: this.state.status,
      category: this.state.category,
      dQuantity: this.state.dQuantity,
      charity: 'Furniture Bank',
      pictureUpload: this.state.pictureUpload,
      firstn: this.state.firstn,
      lastn: this.state.lastn,
      inputAddress: this.state.inputAddress,
      inputZip: this.state.inputZip
    }


    firebase.database().ref('charities').child("123").child("postQueue").push(data).then((response) => {
      const key = response.key;
      firebase.database().ref(`charities/123/postQueue/${key}`).update({
        id: key
      });
    });

    // const dbRef = firebase.database().ref('charities');


  }


  render() {
    return (
      <div style={{ marginTop: '80px',  marginLeft: '50px', marginRight: '50px' }}>
        <form className='col-md-10'>
        <div className="form-group row">
          <div className="form-group col-md-8">
            <label htmlFor="donation-selector">Donation Categories.</label>
            <select className="form-control" id="category"  onChange={this.handleChange}>
              <option>Apparel</option>
              <option>Electronics</option>
              <option>Furniture</option>
              <option>Non Perishable</option>
              <option>Money</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <div className="form-group col-md-8">
          <label htmlFor="dQuantity">Quantity</label>
          <input  className='form-control col-md-8' id='dQuantity' type="number" placeholder="Enter a Quantity" onChange={this.handleChange}/>
          </div>
        </div>

        <div className="form-group row">
          <div className="form-group col-md-8">
          <h6>Select a charity</h6>
            <div  className="form-control"style={styles.iconsBox}>
              <div className="form-group border border-primary" selected style={styles.iconsLayout}  >
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
              <label htmlFor="pictureUpload">Picture Image</label>
              <input type="file" className="form-control-file" id="pictureUpload" onChange={this.handleChange}></input>
            </div>
          </div>
        </div>

        <div className="form-group row">
        <hr/>
          <div className="form-group col-md-8">
          <h6>Dornator inforamtion:</h6>

              <div className="form-group col">
                <input type="text" className="form-control" placeholder="First name"  onChange={this.handleChange} id='firstn'></input>
              </div>
              <div className="form-group col">
                <input type="text" className="form-control" placeholder="Last name" onChange={this.handleChange} id='lastn'></input>
              </div>
              <div class="form-group col">
                <input type="text" className="form-control" id="inputAddress" placeholder="Address" onChange={this.handleChange} ></input>
              </div>
              <div className="form-group col">
                <input type="text" className="form-control" id="inputZip" placeholder="Zip Code" onChange={this.handleChange} ></input>
              </div>

          </div>
        </div>

        <button type="submit" className="btn btn-primary" onClick={this.getData}>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewPost;