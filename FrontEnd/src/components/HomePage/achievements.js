import React, { useEffect } from 'react';
import img1 from '../../images/Index/Achivements/1.png';
import img2 from '../../images/Index/Achivements/2.png';
import img3 from '../../images/Index/Achivements/3.png';
import img4 from '../../images/Index/Achivements/4.png';
import img5 from '../../images/Index/Achivements/5.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const MyachievementsList = () => {
    useEffect(() => {
        Aos.init();
      }, [])
  return (
    <div className="achiList">
      <div className="row theAchiList">
        <div className="col-md-12 text-center"  data-aos="fade-down" data-aos-offset="50" data-aos-easing="ease-in-sine" data-aos-duration="200">
            <h1>ACHIEVEMENTS</h1>
        </div>
      </div>
      <div className="container theContAchi">
        <div className="row the imagesSection text-center"  >
            <div className="col d-flex flex-column justify-content-center align-items-end  text-center g-0" data-aos="slide-left" data-aos-offset="50" data-aos-easing="ease-in-sine" data-aos-duration="250">
                <img 
                    src={img1}
                    className="theImgAchi"
                    alt="achi"
                />
            </div>
            <div className="col d-flex flex-column justify-content-center align-items-end  text-center g-0" data-aos="slide-left" data-aos-offset="50" data-aos-easing="ease-in-sine" data-aos-duration="225">
                <img 
                    src={img2}
                    className="theImgAchi"
                    alt="achi"
                />
            </div>
            <div className="col d-flex flex-column justify-content-center align-items-end  text-center g-0" data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="200">
                <img 
                    src={img3}
                    className="theImgAchi"
                    alt="achi"
                />
            </div>
            <div className="col d-flex flex-column justify-content-center align-items-end  text-center g-0"  data-aos="slide-right" data-aos-offset="50" data-aos-easing="ease-in-sine" data-aos-duration="250">
                <img 
                    src={img4}
                    className="theImgAchi"
                    alt="achi"
                />
            </div>
            <div className="col d-flex flex-column justify-content-center align-items-end  text-center "  data-aos="slide-right" data-aos-offset="50" data-aos-easing="ease-in-sine" data-aos-duration="250">
                <img 
                    src={img5}
                    className="theImgAchi"
                    alt="achi"
                />
            </div>
        </div>
      </div>
    </div>
  )
}

export default MyachievementsList
