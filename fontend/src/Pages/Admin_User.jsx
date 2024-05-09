import React from 'react'
import Sidebar from '../Admin/Sidebar/Sidebar'
import './CSS/Admin_User.css'
import ListUser from '../Admin/ListUser/ListUser'

const Admin_User = () => {
  return (
    <div className='admin_users'>
    <div className='mx-5'>
    <Sidebar></Sidebar>

    </div>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-10 my-4'>
                <ListUser></ListUser>

            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Admin_User
