import './ExpStyle.css';
import $ from 'jquery'
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Catdata from './Values';
import * as Icon from 'react-bootstrap-icons';
import Eximg1 from '../../images/Experiences/Slider/Exc/1.jpg';
import Eximg2 from '../../images/Experiences/Slider/Exc/2.jpg';
import Eximg3 from '../../images/Experiences/Slider/Exc/3.jpg';
import Advimg1 from '../../images/Experiences/Slider/Adv/1.jpg';
import Advimg2 from '../../images/Experiences/Slider/Adv/2.jpg';
import Advimg3 from '../../images/Experiences/Slider/Adv/3.jpg';

const ExpCategory = () => {
    const [data, setData] = useState(Catdata);

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

    const sayHello = (name) => {
        var v = (`.${name}`);
        //alert(v);

        if (name == 'Adv') {
            $('.Exp').hide(100);
            $(v).show(100);
        } else if (name == 'Exp') {
            $('.Adv').hide(100);
            $(v).show(100);
        }
    };


    const [selected, setSelected] = useState('yes');
    return (
        <>
            <div className="container ">

                <div className="row  text-center">
                    <div className="col-sm-12 justify-content-center align-items-center cate">
                        <input type="radio" id="exc" defaultChecked name="category" value="exc" onClick={() => {
                            sayHello("Exp");
                        }} />
                        <label htmlFor='exc'  className="btn-lg category-item">EXCURSIONS</label>
                   
                        <input type="radio" id="adv" name="category" value="adv" onClick={() => {
                            sayHello("Adv");
                        }} />
                        <label htmlFor='adv'  className="btn-lg category-item">ADVENTURE</label>
                   
                        <input type="radio" id="spcl" name="category" value="spcl" 
                        
                        />
                        <label htmlFor='spcl' className="btn-lg category-item">SPECIALS</label>
                    </div>
                </div>

            </div>
            <div className="row m-2">
                <div className="col-md-1 d-flex flex-column justify-content-center align-items-center">
                    <div className='btn' className=" d-none d-sm-none d-md-block d-lg-block" onClick={onPrevClick}>
                        <Icon.CaretLeftFill className="theBtnController" size={50} />
                    </div>
                </div>
                <div className="col-md-10 d-flex flex-column ">
                    {/* EXCURSIONS */}
                    <div className="Exp">
                        <Carousel
                            activeIndex={index}
                            onSelect={handleSelect}
                            indicators={false}
                            controls={false}
                            fade
                        >
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block theImage"
                                    src={Eximg1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <div className="d-none d-sm-none d-md-block d-lg-block">
                                        <div className="info  d-flex flex-column justify-content-center  ">
                                            <h3>First slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </div>
                                    </div>
                                    <div className="d-xs-block d-sm-block d-md-none d-lg-none">
                                        <div className="row theMobSet d-flex flex-column justify-content-center  ">
                                            <h3>First slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </div>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block theImage"
                                    src={Eximg2}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <div className="d-none d-sm-none d-md-block d-lg-block">
                                        <div className="info  d-flex flex-column justify-content-center  ">
                                            <h3>Secound slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </div>
                                    </div>
                                    <div className="d-xs-block d-sm-block d-md-none d-lg-none">
                                        <div className="row theMobSet d-flex flex-column justify-content-center  ">
                                            <h3>Secound slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </div>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block theImage"
                                    src={Eximg3}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <div className="d-none d-sm-none d-md-block d-lg-block">
                                        <div className="info  d-flex flex-column justify-content-center  ">
                                            <h3>Third slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </div>
                                    </div>
                                    <div className="d-xs-block d-sm-block d-md-none d-lg-none">
                                        <div className="row theMobSet d-flex flex-column justify-content-center  ">
                                            <h3>Third slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </div>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>


                    {/* Adventure */}
                    <div className="Adv">
                        <Carousel
                            activeIndex={index}
                            onSelect={handleSelect}
                            indicators={false}
                            controls={false}
                            fade
                        >
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block theImage"
                                    src={Advimg1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <div className="d-none d-sm-none d-md-block d-lg-block">
                                        <div className="info  d-flex flex-column justify-content-center  ">
                                            <h3>First slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </div>
                                    </div>
                                    <div className="d-xs-block d-sm-block d-md-none d-lg-none">
                                        <div className="row theMobSet d-flex flex-column justify-content-center  ">
                                            <h3>First slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </div>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block theImage"
                                    src={Advimg2}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <div className="d-none d-sm-none d-md-block d-lg-block">
                                        <div className="info  d-flex flex-column justify-content-center  ">
                                            <h3>Secound slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </div>
                                    </div>
                                    <div className="d-xs-block d-sm-block d-md-none d-lg-none">
                                        <div className="row theMobSet d-flex flex-column justify-content-center  ">
                                            <h3>Secound slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </div>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block theImage"
                                    src={Advimg3}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <div className="d-none d-sm-none d-md-block d-lg-block">
                                        <div className="info  d-flex flex-column justify-content-center  ">
                                            <h3>Third slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </div>
                                    </div>
                                    <div className="d-xs-block d-sm-block d-md-none d-lg-none">
                                        <div className="row theMobSet d-flex flex-column justify-content-center  ">
                                            <h3>Third slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </div>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>



                <div className="col-md-1 d-flex flex-column justify-content-center align-items-center">
                    <div className='btn' className=" d-none d-sm-none d-md-block d-lg-block" onClick={onNextClick}>
                        <Icon.CaretRightFill className="theBtnController" size={50} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className='btn' className=" theContollerBoxDin d-xs-block  d-sm-block d-md-none d-lg-none" onClick={onPrevClick}>
                            <Icon.CaretLeftFill className="theBtnController" size={50} />
                        </div>
                    </div>
                    <div className="col">
                        <div className='btn' className="theNxtDinEx theContollerBoxDin d-xs-block  d-sm-block d-md-none d-lg-none" onClick={onNextClick}>
                            <Icon.CaretRightFill className="theBtnController" size={50} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExpCategory
