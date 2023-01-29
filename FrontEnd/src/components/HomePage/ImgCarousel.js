import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/Index/slider/1.jpg';
import img2 from '../../images/Index/slider/2.jpg';
import img3 from '../../images/Index/slider/3.jpg';
import * as Icon from 'react-bootstrap-icons';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ImageSlider = () => {
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
    <>
      <div className="button-container">
        <div className="row" data-aos="fade-down" data-aos-offset="50" data-aos-easing="ease-in-sine" data-aos-duration="200">
          <div className="col text-center headAccom">
            <h1>ACCOMANDATION</h1>
          </div>
        </div>
      </div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        indicators={false}
        controls={false}
        fade
        data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="300"
      >
        <Carousel.Item className='some'>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption class="theSec d-none d-sm-none d-md-block d-lg-block" >
            <div className="row theLine">
              <div className="col-md-3 d-flex flex-column justify-content-center align-items-end  text-center">
                <div className="btn thePrev theContollerBox" onClick={onPrevClick}>
                  <div className="row thetestRow">
                    <div className="col-3 d-flex flex-column justify-content-center align-items-center">
                      <Icon.CaretLeftFill className="theBtnController" size={30} />
                    </div>
                    <div className="col-9 d-flex flex-column justify-content-center align-items-end">
                      Previous
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-md-6 text-center box">
                <h3>First slide label  </h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
              <div className="col-md-3 d-flex flex-column justify-content-center align-items-start  text-center">
                <div className="btn theNxt theContollerBox" onClick={onNextClick}>
                  <div className="row">
                    <div className="col-8 d-flex flex-column justify-content-center">
                      Next
                    </div>
                    <div className="col-3">
                      <Icon.CaretRightFill className="theBtnController" size={30} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
          <Carousel.Caption class="d-xs-block d-sm-block d-md-none d-lg-none">
            <div className="row theMobRow" >
              <div className="col-1 d-flex flex-column justify-content-center align-items-center ">
                <div className="btn thePrevMob" onClick={onPrevClick}>
                  <Icon.CaretLeftFill className="theBtnController" size={30} />
                </div>
              </div>
              <div className="col-10 text-center theDivMob">
                <h3>First slide label</h3>
                <p className="mobTextSlider">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
              <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                <div className="btn theNxtMob" onClick={onNextClick}>
                  <Icon.CaretRightFill className="theBtnController" size={30} />
                </div>
              </div>

            </div>
          </Carousel.Caption>
        </Carousel.Item>





        <Carousel.Item className='some'>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
          <Carousel.Caption class="theSec d-none d-sm-none d-md-block d-lg-block">
            <div className="row theLine">
              <div className="col-md-3 d-flex flex-column justify-content-center align-items-end  text-center">
                <div className="btn thePrev theContollerBox" onClick={onPrevClick}>
                  <div className="row thetestRow">
                    <div className="col-3 d-flex flex-column justify-content-center align-items-center">
                      <Icon.CaretLeftFill className="theBtnController" size={30} />
                    </div>
                    <div className="col-9 d-flex flex-column justify-content-center align-items-end">
                      Previous
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-md-6 text-center box">
                <h3>Secound slide label  </h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
              <div className="col-md-3 d-flex flex-column justify-content-center align-items-start  text-center">
                <div className="btn theNxt theContollerBox" onClick={onNextClick}>
                  <div className="row">
                    <div className="col-8 d-flex flex-column justify-content-center">
                      Next
                    </div>
                    <div className="col-3">
                      <Icon.CaretRightFill className="theBtnController" size={30} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
          <Carousel.Caption class="d-xs-block  d-sm-block d-md-none d-lg-none">
            <div className="row theMobRow" >
              <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                <div className="col-1 d-flex flex-column justify-content-center align-items-center pIcon">
                  <div className="btn thePrevMob" onClick={onPrevClick}>
                    <Icon.CaretLeftFill className="theBtnController" size={30} />
                  </div>
                </div>
              </div>
              <div className="col-10 text-center theDivMob">
                <h3>Secound slide label</h3>
                <p className="mobTextSlider">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
              <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                <div className="btn theNxtMob" onClick={onNextClick}>
                  <Icon.CaretRightFill className="theBtnController" size={30} />
                </div>
              </div>

            </div>
          </Carousel.Caption>
        </Carousel.Item>




        <Carousel.Item className='some'>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />

          <Carousel.Caption class="theSec d-none d-sm-none d-md-block d-lg-block">
            <div className="row theLine">
              <div className="col-md-3 d-flex flex-column justify-content-center align-items-end  text-center">
                <div className="btn thePrev theContollerBox" onClick={onPrevClick}>
                  <div className="row thetestRow">
                    <div className="col-3 d-flex flex-column justify-content-center align-items-center">
                      <Icon.CaretLeftFill className="theBtnController" size={30} />
                    </div>
                    <div className="col-9 d-flex flex-column justify-content-center align-items-end">
                      Previous
                    </div>
                  </div>

                </div>
              </div>
              <div className="col-md-6 text-center box">
                <h3>Third slide label  </h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
              <div className="col-md-3 d-flex flex-column justify-content-center align-items-start  text-center">
                <div className="btn theNxt theContollerBox" onClick={onNextClick}>
                  <div className="row">
                    <div className="col-8 d-flex flex-column justify-content-center">
                      Next
                    </div>
                    <div className="col-3">
                      <Icon.CaretRightFill className="theBtnController" size={30} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
          <Carousel.Caption class="d-xs-block  d-sm-block d-md-none d-lg-none">
            <div className="row theMobRow" >

              <div className="col-1 d-flex flex-column justify-content-center align-items-center pIcon">
                <div className="btn thePrevMob" onClick={onPrevClick}>
                  <Icon.CaretLeftFill className="theBtnController" size={30} />
                </div>
              </div>
              <div className="col-10 text-center theDivMob">
                <h3>Third slide label</h3>
                <p className="mobTextSlider">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
              <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                <div className="btn theNxtMob" onClick={onNextClick}>
                  <Icon.CaretRightFill className="theBtnController" size={30} />
                </div>
              </div>

            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default ImageSlider
