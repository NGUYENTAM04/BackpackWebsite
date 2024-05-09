import React from 'react'
import './CSS/Admin_Products.css'
// import Sidebar from '../../Components/Sidebar/Sidebar'
import Sidebar from '../Admin/Sidebar/Sidebar'
import {Routes,Route} from 'react-router-dom'
// import AddProduct from '../../Components/AddProduct/AddProduct'
import AddProduct from '../Admin/AddProduct/AddProduct'
// import ListProduct from '../../Components/ListProduct/ListProduct'
import ListProduct from '../Admin/ListProduct/ListProduct'
import admin_icon from '../Components/Assets/admin_icon.png'
const Admin = () => {
  return (
    <div className='admin_products'>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-md-2'>
                      <Sidebar/>

                    </div>

                    <div className='col-md-5 mt-5 pt-5' style={{marginLeft:"0 !important",paddingLeft:"0 !important"}}>
                      <img src={admin_icon} alt="" style={{height:"70vh",width:"100vh"}}/>

                    </div>

                    <div className='col-md-5 my-3'>
                      <AddProduct/>

                    </div>

                    <div className='col-md-2'></div>

                    
                    <div className='col-md-10 my-3'>
                      <ListProduct/>

                    </div>
                  </div>
                </div> 
    </div>
  )
}

export default Admin
