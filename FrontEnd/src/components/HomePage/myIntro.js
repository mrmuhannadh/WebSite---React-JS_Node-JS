import React, { useEffect } from 'react';
import './myStyle.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const CompIntro = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>
      <div className="row theRow"  data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="200">
        <div className="col-md-12 text-center ">
          <h1>KALUNDEWA RETREAT</h1>
          <h4>TAGLINE</h4>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
            diam nonummy nibh euismod tincidunt ut sed diam nonummy
            nibh euismod tincidunt ut sed diam nonummy nibh euismod
            tincidunt ut sed diam nonummy nibh euismod tincidunt
            ut sed diam nonummy nibh euismod tincidunt ut sed diam
            nonummy nibh euismod tincidunt ut sed diam nonummy nibh
            euismod tincidunt ut</p>
        </div>

      </div>
    </>
  )
}

export default CompIntro
