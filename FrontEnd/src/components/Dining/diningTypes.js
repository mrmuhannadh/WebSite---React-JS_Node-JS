import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import img1 from '../../images/Dinning/Types/1.jpg'
import img2 from '../../images/Dinning/Types/3.jpg'
const DiningTypes = () => {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);



  return (
    <div>
      <div className="container px-4">
        <div className="row gx-5 theTypesRow justify-content-center">
          <div className="col-md-5 theBox">
            <div className="p-0 theType d-flex flex-column justify-content-center align-items-center">
              <div className="row">
                <img
                  src={img1}
                  className="diningImage"
                  alt="diningimage"
                />
              </div>
              <div className="row text-center m-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit, sed diam nonummy nibh euismod tincidunt
                  ut sed diam nonummy nibh euismod tincidunt
                  ut sed diam
                </p>
                <div className="col d-flex flex-column align-items-center">
                  <div className="row">Type : Fusion Resturant</div>
                  <div className="row">Type of Dining : International A la Carte</div>
                  <div className="row">Location : In house 7th floor</div>
                </div>
                <div className="row">
                  <div className="col text-center colFind">
                    <h6 className="exploreHead" onClick={() => setSmShow(true)}>FIND ME</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Model for the First*/}
          <Modal show={smShow} onHide={() => setSmShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>MAP - MAP ONE</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col">
                  <img
                    src={img1}
                    className="mapImage"
                    alt="mapImage"
                  />
                </div>
              </div>

            </Modal.Body>
            <Modal.Footer>
         
         

            </Modal.Footer>
          </Modal>
          <div className="col-md-5 theBox">
            <div className="p-0 theType d-flex flex-column justify-content-center align-items-center">
              <div className="row">
                <img
                  src={img2}
                  className="diningImage"
                  alt="mapImage"
                />
              </div>
              <div className="row text-center m-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing
                  elit, sed diam nonummy nibh euismod tincidunt
                  ut sed diam nonummy nibh euismod tincidunt
                  ut sed diam
                </p>
                <div className="col d-flex flex-column align-items-center">
                  <div className="row">Type : Fusion Resturant</div>
                  <div className="row">Type of Dining : International A la Carte</div>
                  <div className="row">Location : In house 7th floor</div>
                </div>
                <div className="row">
                  <div className="col text-center colFind">
                    <h6 className="exploreHead" onClick={() => setLgShow(true)}>FIND ME</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Model for the Secound*/}
          <Modal show={lgShow} onHide={() => setLgShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>MAP - MAP TWO</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col">
                  <img
                    src={img2}
                    className="mapImage"
                    alt="mapImage"
                  />
                </div>
              </div>

            </Modal.Body>
            <Modal.Footer>
              
              

            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default DiningTypes
