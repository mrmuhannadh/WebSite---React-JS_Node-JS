import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../../pages';
import TheAccomandation from '../../pages/accomandation';
import Experiences from '../../pages/experiences';
import Dinning from '../../pages/dinning';
import Blog from '../../pages/blog';
import Contact_us from '../../pages/contact_us';
import Gallery from '../../pages/gallery';
import Login from '../../pages/login';
import ErrorPage from '../../pages/ErrorPage';
import Dashboard from '../../pages/dashboard';
import AdminOffer from '../../pages/adminOffer';
import AdminGallery from '../../pages/adminGallery';
import Offers from '../../pages/offers';
import { AnimatePresence } from 'framer-motion';
function AnimationRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/accomandation' element={<TheAccomandation />} />
                <Route path='/experiences' element={<Experiences />} />
                <Route path='/dinning' element={<Dinning />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/offer' element={<Offers />} />
                <Route path='/contact' element={<Contact_us />} />
                <Route path='/login' element={<Login />} />
                <Route path='/dash' element={<Dashboard />} />
                <Route path='/adminoffer' element={<AdminOffer />} />
                <Route path='/admingallery' element={<AdminGallery />} />
                <Route path='/logout' element={<Home />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimationRoutes
