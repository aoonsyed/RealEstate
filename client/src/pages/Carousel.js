import React from 'react';
import '../static/Carousle.css'; // Corrected the import filename
<meta name="viewport" content="width=device-width, initial-scale=1" />
const Carousel = () => {
  return (

    <div className='row' id='bg'>
      <div className='col'>
        <h2 className="badge rounded-pill text-dark">A Vision For Your Life</h2>
        <p className='find'>Find Your Best</p>
        <p className='estate'>Real Estate</p>
        <div>
          <button type="button" className="btn btn-outline-primary mb-2" id='new'>Buy</button>
          <button type="button" className="btn btn-outline-info ms-1 mb-2" id='new'>Sell</button>
          <button type="button" className="btn btn-outline-info ms-1 mb-2" id='new'>Rent</button>
        </div>
        <div className="row ms-3 mt-2" >
          <div className='col-lg-6 col-md-6 d-flex p-3' id='divi'>
            <div className="col-3 m-2">
              <div>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Property" />
              </div>
            </div>
            <div className="col-3 m-2">
              <div>
                <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Location" />
              </div>
            </div>
            <div className="col-3 m-2">
              <div>
                <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="Price" />
              </div>
            </div>
            <div className="col-3 m-2">
            <div>
                  <button type="submit" className="btn btn-info bg-info">Search</button>
                </div>
                </div>
      
          </div>
        </div>
      </div>
</div>
      )
}

      export default Carousel;
