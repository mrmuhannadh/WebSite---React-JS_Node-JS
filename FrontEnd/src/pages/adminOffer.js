import React from 'react'
import AdminNav from '../components/Admin/nav'
import AddOffer from '../components/Admin/Offer/AddOffer'
import OfferList from '../components/Admin/Offer/OfferList'
import BackToTop from '../components/myTopNav/BackToTop'

const AdminOffer = () => {
  let user = localStorage.getItem('theUserName');
    if (user === null) {
        console.log("no user");
        return (
            <div>
                404 Error

                <br />
                <a href='/'>Home</a>
            </div>
        )
    } else {
      return (
        <div>
          <AdminNav />
          <AddOffer />
          <OfferList />
          <BackToTop />
        </div>
      )
    }
  
}

export default AdminOffer
