import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/Index/Dinning/1.jfif';
import img2 from '../../images/Index/Dinning/2.jfif';
import img3 from '../../images/Index/Dinning/3.jfif';
import * as Icon from 'react-bootstrap-icons';
import Aos from 'aos';
import 'aos/dist/aos.css';

const MyDinning = () => {
  useEffect(() => {
    Aos.init();
    
    
  }, [])

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const onPrevClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else if (index === 0) setIndex(2);
  };
  const onNextClick = () => {
    if (index === 2) {
      setIndex(0);
    } else if (index === 0 || index > 0) setIndex(index + 1);
  };
  return (
    <div className="dinningSection" >
      <div className="row " >
        <div className="col-md-12 text-center">
          <h1  data-aos="fade-down" data-aos-offset="50" data-aos-easing="ease-in-sine" data-aos-duration="200">DINNIG</h1>
          <div className="row theDinningArea" data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="300">
            <div className="col-md-3 d-flex flex-column justify-content-center align-items-end  text-center">
              <div className="btn theContollerBoxDin d-none d-sm-none d-md-block d-lg-block" onClick={onPrevClick}>
                <Icon.CaretLeftFill className="theBtnController" size={50} />
              </div>
            </div>
            <div className="col-md-6 text-center theImageDiv" >
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                indicators={false}
                controls={false}
                fade
              >
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block theImg"
                    src={img1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <div className="info  d-flex flex-column justify-content-center text-center">
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>

                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block theImg"
                    src={img2}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <div className="info  d-flex flex-column justify-content-center  text-center">
                      <h3>Secound slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block theImg"
                    src={img3}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <div className="info  d-flex flex-column justify-content-center   text-center">
                      <h3>Third slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>

            </div>

            <div className="col-md-2 d-flex flex-column justify-content-center align-items-end">
              <div className="btn theNxtDin theContollerBoxDin d-none d-sm-none d-md-block d-lg-block" onClick={onNextClick}>
                <Icon.CaretRightFill className="theBtnController" size={50} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="btn theContollerBoxDin d-xs-block d-sm-block d-md-none d-lg-none" onClick={onPrevClick}>
                <Icon.CaretLeftFill className="theBtnController" size={50} />
              </div>
            </div>
            <div className="col">
              <div className="btn theNxtDin theContollerBoxDin d-xs-block d-sm-block d-md-none d-lg-none" onClick={onNextClick}>
                <Icon.CaretRightFill className="theBtnController" size={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyDinning
