import React from 'react'
import AdminDashboard from '../components/Admin/adminDashboard';

import AdminNav from '../components/Admin/nav'

const Dashboard = () => {
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
                <AdminDashboard/>
                
            </div>
        )
    }


}

export default Dashboard
