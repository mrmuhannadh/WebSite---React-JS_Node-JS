import React from 'react'
import Footer from '../components/Footer'
import FooterOne from '../components/Footer_one'
import LoginBody from '../components/Login/loginBody'
import LoginNav from '../components/Login/LoginNav'
import { motion } from 'framer-motion'

const Login = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <LoginNav />
      <LoginBody />
      <FooterOne />
      <Footer />
    </motion.div>
  )
}

export default Login
