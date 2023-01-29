import React, { useState, useEffect } from 'react'
import ExpCategory from '../components/Experiences/ExpCategory'
import ExpTop from '../components/Experiences/ExpTop'
import TheImageSlider from '../components/Experiences/imageSlider'
import Footer from '../components/Footer'
import FooterOne from '../components/Footer_one'
import TopNav from '../components/myTopNav'
import BackToTop from '../components/myTopNav/BackToTop'
import { motion } from 'framer-motion'
import PropagateLoader from "react-spinners/BarLoader"
import headerlogo from '../images/Header/logo.png'
import ClickToWhatsApp from '../components/myTopNav/ClickToWhatsApp'

const Experiences = () => {
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
            <ExpTop />
            <ExpCategory />
            <TheImageSlider />
            <BackToTop />
            <ClickToWhatsApp />
            <Footer />
            <FooterOne />
          </motion.div>
      }

    </div>

  )
}

export default Experiences
