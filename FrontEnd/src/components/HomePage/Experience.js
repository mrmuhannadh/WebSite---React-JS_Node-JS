import React, { useEffect } from 'react';
import img1 from '../../images/Index/Experience/1.jpg';
import img2 from '../../images/Index/Experience/2.jpg';
import img3 from '../../images/Index/Experience/3.webp';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ExperienceSet = () => {
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div className="exp">
      <div className="row theExpSet">
        <div className="col text-center">
          <h1 data-aos="fade-down" data-aos-offset="50" data-aos-easing="ease-in-sine" data-aos-duration="200">EXPERIENCE</h1>
        </div>
      </div>
      <div className="row expImgArea g-0" data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="300">
        <div className="col">
          <div className="row g-0">
            <div className="col-md-4 d-flex flex-column justify-content-end align-items-center imgArea">
              <div className="theData">
                <h4>BIRD WATCHING</h4>
                <p>Hello welocome to the bird watching</p>
              </div>
              <img
                src={img1}
                className="expImage"
                alt='birdWatch'
              />
              <div className='row layer'>
                
              </div>
            </div>
            <div className="col-md-4 d-flex flex-column justify-content-end align-items-center imgArea">
              <div className="theData">
                <h4>BIRD WATCHING</h4>
                <p>Hello welocome to the bird watching</p>
              </div>
              <img
                src={img2}
                className="expImage"
                alt='bw'
              />

            </div>
            <div className="col-md-4 d-flex flex-column justify-content-end align-items-center imgArea">
              <div className="theData">
                <h4>BIRD WATCHING</h4>
                <p>Hello welocome to the bird watching</p>
              </div>
              <img
                src={img3}
                className="expImage"
                alt='bw'
              />


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceSet
