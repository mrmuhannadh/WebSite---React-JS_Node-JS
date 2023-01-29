import React from 'react'
import GalleryAdd from '../components/Admin/GalleryAdd'
import GalleryList from '../components/Admin/GalleryList'
import AdminNav from '../components/Admin/nav'
import BackToTop from '../components/myTopNav/BackToTop'

const AdminGallery = () => {
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
          <AdminNav/>
          <GalleryAdd/>
          <GalleryList/>
          <BackToTop/>
        </div>
        )
    }

}

export default AdminGallery
