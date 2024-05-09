import React from 'react'
import ListOrderUser from '../Admin/ListOrderUser/ListOrderUser'
import Sidebar from '../Admin/Sidebar/Sidebar'

const Admin_Orders = () => {
  return (
    <div>
    <div className='admin_users'>
    <div className='mx-5'>
    <Sidebar></Sidebar>

    </div>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-10 my-4'>
                <ListOrderUser></ListOrderUser>

            </div>
        </div>
    </div>
      
    </div>
      
    </div>
  )
}

export default Admin_Orders
