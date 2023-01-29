import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Modal, Carousel } from 'react-bootstrap'
import * as Icon from 'react-bootstrap-icons';
import $ from 'jquery'
import './style.css'

const GallerySet = (e) => {
  const [galleryList, setGalleryList] = useState([]);
  const [galleryListtoCar, setGalleryListtoCar] = useState([]);

  const sayHello = (name) => {
    var v = (`.${name}`);
    //alert(v);
    if (name === 'LifeStyle') {
      $('.Dining').fadeOut(200);
      $('.ATM').fadeOut(200);
      $(v).fadeIn(500);
    } else if (name === 'Dining') {
      $('.LifeStyle').fadeOut(200);
      $('.ATM').fadeOut(200);
      $(v).fadeIn(500);
    } else if (name === 'ATM') {
      $('.LifeStyle').fadeOut(200);
      $('.Dining').fadeOut(200);
      $(v).show(100);
    }

  };
  useEffect(() => {
    Axios.get('http://backend.techms.ru.com/main/gallery').then((response) => {

      setGalleryList(response.data);
    });
  }, []);

  function showImage(x, y, z) {
    SetModalInfo(x);
    setShow(true);

    Axios.get(`http://backend.techms.ru.com/main/galleryShow/${y}`).then((response) => {

      setGalleryListtoCar(response.data);
    });

  }

  const [ModalInfo, SetModalInfo] = useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);




  return (

    <>
      <div className="container ">
        <div className="row galleryHeader">
          <div className="col-12 text-center">
            <h1 className="head">GALLERY</h1>
          </div>
        </div>
        <div className="row  text-center">
          <div className="col-sm-12 justify-content-center align-items-center cate">
            <input type="radio" id="exc" defaultChecked name="category" value="exc" onClick={() => {
              sayHello("LifeStyle");
            }} />
            <label htmlFor="exc" className="btn-lg category-item">LIFE STYLE</label>

            <input type="radio" id="adv" name="category" value="adv" onClick={() => {
              sayHello("Dining");
            }} />
            <label htmlFor="adv" className="btn-lg category-item">DINING</label>

            <input type="radio" id="spcl" name="category" value="spcl" onClick={() => {
              sayHello("ATM");
            }}

            />
            <label htmlFor="spcl" className="btn-lg category-item">ATMOSPHERE</label>
          </div>
        </div>

      </div>


      <div className="container">
        <div className="row myRowImage">


          {galleryList.map((val) => {
            const s = val.img_name;
            const pa = val.img_path;
            const cat = val.img_category;
            const imgid = val.img_id;

            const theCol = 'col-md-4 col-sm-6 myColImage ' + cat;
            return <div className={theCol} key={imgid}>

              <img
                src={pa}
                alt={s}
                className="theImage img-thumbnail"
                onClick={() => showImage(pa, cat, imgid)}
                width="200" height="400"
              />

            </div>


          })}

        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered className='theImageShowModal ' size="lg">
        <Modal.Body className='modalBod'>
          <Icon.XSquareFill className='closeMod' onClick={handleClose} />

          <Carousel
            controls={true}
            indicators={false}
            interval={null}
            fade
            prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
            nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
          >
            <Carousel.Item key={1}>


              <img
                className="testimonialImages d-block w-100 imgPreview"
                src={ModalInfo}
                alt="test"
              />


            </Carousel.Item>

            {galleryListtoCar.map(review => (
              <Carousel.Item key={review.img_id}>
                <img
                  className="testimonialImages d-block w-100 imgPreview"
                  src={review.img_path}
                  alt={review.img_category}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default GallerySet
