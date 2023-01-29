import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer';
import FooterOne from '../components/Footer_one';
import MyachievementsList from '../components/HomePage/achievements';
import MyDinning from '../components/HomePage/Dinning';
import ExperienceSet from '../components/HomePage/Experience';
import ImageSlider from '../components/HomePage/ImgCarousel';
import CompIntro from '../components/HomePage/myIntro';
import TopNav from '../components/myTopNav'
import BackToTop from '../components/myTopNav/BackToTop';
import ClickToWhatsApp from '../components/myTopNav/ClickToWhatsApp';
import vidBg from '../videos/Header/vid.mp4';
import { motion } from 'framer-motion'
import PropagateLoader from "react-spinners/BarLoader"
import headerlogo from '../images/Header/logo.png'

const Home = () => {
  const [loading, setLoading] = useState(false);

  const page_load_time = performance.getEntriesByType("navigation")[0];
  const time = `${page_load_time.loadEventEnd}`;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, time)
  }, [])
  return (
    
    <div className='App'>
      <meta name="viewport" content="width=device-width, initial-scale = 0.86, maximum-scale=3.0, minimum-scale=0.86"></meta>
      {
        loading ?
          <div className='row  d-flex flex-column justify-content-center align-items-center theRowToLoader'>
            <div className='col-12 d-flex flex-column justify-content-end align-items-center loadingArea'>
              <img src={headerlogo} width={70} height={70} alt="logo" />
              <PropagateLoader color={"blue"} width={"100%"} loading={loading} size={50} className='loadingIcon my-1' />
            </div>
          </div>
          :
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
          >
            <TopNav />
            {/* For the video */}
            <div className='main'>
              <video src={vidBg} autoPlay muted loop />
            </div>


            {/*Intro*/}
            <CompIntro />

            {/*My Cur*/}
            <div className="row theSlider" >
              <ImageSlider />
            </div>

            {/*My Dinning*/}
            <MyDinning />

            {/*My Exp */}
            <ExperienceSet />


            <MyachievementsList />
            <BackToTop />
            <ClickToWhatsApp />
            <Footer />


            <FooterOne />
          </motion.div>
      }

    </div>
  )
}

export default Home
