import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../images/Experiences/Slider/Slider/1.jpg';
import img2 from '../../images/Experiences/Slider/Slider/2.jpg';
import img3 from '../../images/Experiences/Slider/Slider/3.jpg';
import img4 from '../../images/Experiences/Slider/Slider/4.jpg';
import img5 from '../../images/Experiences/Slider/Slider/5.jpg';
import img6 from '../../images/Experiences/Slider/Slider/6.jpg';
import './DiningStyle.css'
export default class SliderDining extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 1000,
        cssEase: "linear"
      };
      return (
        <div>
          <div className="row m-1">
          <Slider {...settings}>
            
                <div className="col">
                    <img src={img1}
                    className="item"
                    alt="img1"
                    />
                </div>
                <div className="col">
                    <img src={img2}
                    className="item"
                    alt="img2"
                    />
                </div>
                <div className="col">
                    <img src={img3}
                    className="item"
                    alt="img3"
                    />
                </div>
                <div className="col">
                    <img src={img4}
                    className="item"
                    alt="img4"
                    />
                </div>
                <div className="col">
                    <img src={img5}
                    className="item"
                    alt="img5"
                    />
                </div>
                <div className="col">
                    <img src={img6}
                    className="item"
                    alt="img6"
                    />
                </div>
           
           
          </Slider>
           </div>
        </div>
      );
    }
  }