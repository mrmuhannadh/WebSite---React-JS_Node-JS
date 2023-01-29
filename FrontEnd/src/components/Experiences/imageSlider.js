import React from 'react'
import img1 from '../../images/Experiences/Slider/Slider/1.jpg';
import img2 from '../../images/Experiences/Slider/Slider/2.jpg';
import img3 from '../../images/Experiences/Slider/Slider/3.jpg';
import img4 from '../../images/Experiences/Slider/Slider/4.jpg';
import img5 from '../../images/Experiences/Slider/Slider/5.jpg';
import img6 from '../../images/Experiences/Slider/Slider/6.jpg';
import { Carousel } from 'react-bootstrap';

const TheImageSlider = () => {
    return (
        <div className="row sliderRow">
            <div className="col-md-4 px-0 text-center">
                <Carousel
                    variant="dark"
                    indicators={false}
                    controls={false}
                    fade
                >
                    <Carousel.Item>
                        <img
                            src={img1}
                            className="img-fluid"
                            alt="imgOne"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={img2}
                            className="img-fluid"
                            alt="imageTwo"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={img3}
                            className="img-fluid"
                            alt="imageThree"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="col-md-4 px-0 text-center">
                <Carousel
                    variant="dark"
                    indicators={false}
                    controls={false}
                    fade
                >
                    <Carousel.Item>
                        <img
                            src={img4}
                            className="img-fluid"
                            alt='img4'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={img5}
                            className="img-fluid"
                            alt='img5'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={img6}
                            className="img-fluid"
                            alt='img6'
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="col-md-4 px-0 text-center">
                <Carousel
                    variant="dark"
                    indicators={false}
                    controls={false}
                    fade
                >
                    <Carousel.Item>
                        <img
                            src={img1}
                            className="img-fluid"
                            alt='img1'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={img2}
                            className="img-fluid"
                            alt='img2'
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src={img3}
                            className="img-fluid"
                            alt='img3'
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default TheImageSlider
