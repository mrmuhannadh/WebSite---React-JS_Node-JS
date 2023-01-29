import React, { useState } from 'react'
import { Button, Modal, Carousel } from 'react-bootstrap'
import img1 from '../../images/Accomandation/Img1.jpg'
import images from './SliderOne'
import './Style.css'
import * as Icon from 'react-bootstrap-icons';

const TheCateSet = () => {

    const [showOne, setShowOne] = useState(false);
    const [showTwo, setShowTwo] = useState(false);

    const handleShowOne = () => setShowOne(true);
    const handleCloseOne = () => setShowOne(false);


    const handleShowTwo = () => setShowTwo(true);
    const handleCloseTwo = () => setShowTwo(false);


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
        <div className="container theCont">
            {/*start*/}

            <div className="row theBoxSets">
                <div className="col-md-7 leftSideBox g-0">
                    <img
                        src={img1}
                        className="theImgInside"
                        alt="img1"
                    />
                </div>

                <div className="col-md-5 rightSideBox text-center ">
                    <div className="contentInside">
                        <h3>KUMBAK CHALET</h3>
                        <div className="row d-flex justify-content-center align-items-end theTwoIconsSet">One Two</div>
                        <p className="textSet">
                            Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut
                            sed diam nonummy nibh euismod tincidunt
                            ut sed diam nonummy nibh
                            euismod tincidunt ut sed diam
                            nonummy nibh euismod tincidunt ut
                        </p>
                        <div className="row">
                            <div className="col  text-center">
                                <h6 className="exploreHead" onClick={handleShowOne}>EXPLORE</h6>
                            </div>
                        </div>
                        {/* Model for the First*/}
                        <Modal show={showOne} onHide={handleCloseOne} centered fullscreen >
                            <Modal.Header closeButton className="px-4">
                                <Modal.Title className="ms-auto">
                                    MAP - MAP ONE
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className='theModBodAcc'>
                                <div className='c'>
                                    <div className='row d-flex justify-content-center modRowAcc'>
                                        <div className='col-10 d-flex'>
                                            <Carousel
                                                activeIndex={index}
                                                fade
                                                className='courAcc '
                                                controls={false}
                                                onSelect={handleSelect}
                                            >
                                                {images.map(({ id, src, title, description }) => <Carousel.Item key={id}>
                                                    <div className='row' >
                                                        <div className='col-1 d-flex flex-column justify-content-center align-items-start'>
                                                            <Icon.CaretLeftFill type='button' onClick={onPrevClick} className="theBtnController" size={35} />
                                                        </div>
                                                        <div className='col-10'>
                                                            <img  src={src} title={title} alt={description} className="d-block w-100" />
                                                        </div>
                                                        <div className='col-1 d-flex flex-column justify-content-center align-items-end'>
                                                            <Icon.CaretRightFill type='button' onClick={onNextClick} className="theBtnController" size={35} />
                                                        </div>
                                                    </div>

                                                </Carousel.Item>)}
                                            </Carousel>
                                        </div>
                                    </div>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-12 text-center py-3'>
                                                <h3>THE FIRST</h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetuer
                                                    adipiscing elit, sed diam
                                                    nonummy nibh euismod tincidunt ut
                                                    sed diam nonummy nibh euismod tincidunt
                                                    ut sed diam nonummy nibh
                                                    euismod tincidunt ut sed diam
                                                    nonummy nibh euismod tincidunt ut
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" onClick={handleCloseOne}>
                                    Close
                                </Button>

                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
            {/*The end*/}
            {/*start*/}
            <div className="row theBoxSets">
                <div className="col-md-7 leftSideBox g-0">
                    <img
                        src={img1}
                        className="theImgInside"
                        alt="img1"
                    />
                </div>
                <div className="col-md-5 rightSideBox text-center ">
                    <div className="contentInside">
                        <h3>TWO CHALET</h3>
                        <div className="row d-flex justify-content-center align-items-end theTwoIconsSet">One Two</div>
                        <p className="textSet">
                            Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut
                            sed diam nonummy nibh euismod tincidunt
                            ut sed diam nonummy nibh
                            euismod tincidunt ut sed diam
                            nonummy nibh euismod tincidunt ut
                        </p>
                        <div className="row">
                            <div className="col  text-center">
                                <h6 className="exploreHead" onClick={handleShowTwo}>EXPLORE</h6>
                            </div>
                        </div>
                        {/* Model for the Secound*/}
                        <Modal show={showTwo} onHide={handleCloseTwo} centered fullscreen>
                            <Modal.Header closeButton>
                                <Modal.Title>MAP - MAP TWO</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="row">
                                    <div className="col">
                                        <img
                                            src={img1}
                                            className="mapImage"
                                            alt="img1"
                                        />
                                    </div>
                                </div>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseTwo}>
                                    Close
                                </Button>

                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
            {/*The end*/}
        </div>
    )
}

export default TheCateSet
