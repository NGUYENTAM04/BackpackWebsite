// import React from 'react'
// import './Sidebar.css'
// import {Link} from 'react-router-dom'
// // import add_product_icon from '../../Assets/Product_Cart.svg'
// import add_product_icon from '../../Components/Assets/Product_Cart.svg'
// // import list_product_icon from '../../Assets/Product_list_icon.svg'
// import list_product_icon from '../../Components/Assets/Product_list_icon.svg'

// const Sidebar = () => {
//   return (
    
//     <div className='sidebar'>

    


// <div>
//     <div className="sidebar">
//     <div className="sidebar-item">Dashboard</div>
//     <div className="sidebar-item">Products</div>
//     <div className="sidebar-item">Orders</div>
//     <div className="sidebar-item">Customers</div>
//     <div className="sidebar-item">Reports</div>
//     <div className="sidebar-item">Settings</div>
//   </div>

//   <div className="content">
//     <h1>Main Content Area</h1>
//     <p>This is the main content area. You can put your content here.</p>
//   </div>

//   <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
//   <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
//   <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
// </div>












//         <Link to={'/admin'} style ={{textDecoration:"none"}}>
//             <div className="sidebar-item">
//                 <img src={add_product_icon} alt="" />
//                 <p>Quản lí sản phẩm</p>
//             </div>
//         </Link>
        
//         <Link to={'/admin/user'} style ={{textDecoration:"none"}}>
//             <div className="sidebar-item">
//                 <img src={list_product_icon} alt="" />
//                 <p>Quản lí người dùng </p>
//             </div>
//         </Link>
      
//     </div>
//   )
// }

// export default Sidebar
















// import React from 'react';

// const Sidebar = () => {
//   return (
//     <div>
//       <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
//       <style>
//         {`
//           body {
//             font-family: Arial, sans-serif;
//             margin: 0;
//             padding: 0;
//           }
//           .sidebar {
//             position: fixed;
//             top: 0;
//             left: 0;
//             height: 100%;
//             width: 250px;
//             background-color: #343a40;
//             padding-top: 70px;
//             transition: width 0.3s;
//             z-index: 1;
//             overflow-x: hidden;
//             box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
//           }
//           .sidebar:hover {
//             width: 300px;
//           }
//           .sidebar-item {
//             padding: 10px 15px;
//             color: #ffffff;
//             transition: background-color 0.3s;
//           }
//           .sidebar-item:hover {
//             background-color: #495057;
//           }
//           .sidebar-item:last-child {
//             border-bottom: none;
//           }
//           .content {
//             margin-left: 250px;
//             padding: 20px;
//             transition: margin-left 0.3s;
//           }
//           .sidebar:hover + .content {
//             margin-left: 300px;
//           }
//         `}
//       </style>

//       <div className="sidebar">
//         <div className="sidebar-item">Dashboard</div>
//         <div className="sidebar-item">Products</div>
//         <div className="sidebar-item">Orders</div>
//         <div className="sidebar-item">Customers</div>
//         <div className="sidebar-item">Reports</div>
//         <div className="sidebar-item">Settings</div>
//       </div>

//       <div className="content">
//         <h1>Main Content Area</h1>
//         <p>This is the main content area. You can put your content here.</p>
//       </div>

//       <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
//       <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
//       <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
//     </div>
//   );
// }

// export default Sidebar;








import React from 'react';
import {Link} from 'react-router-dom'
import Admin_User from '../../Pages/Admin_User';

const Sidebar = () => {
  return (
    <div>
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
          }
          .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 250px;
            background-color: #343a40;
            padding-top: 70px;
            transition: width 0.3s;
            z-index: 1;
            overflow-x: hidden;
            box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
          }
          .sidebar:hover {
            width: 300px;
          }
          .sidebar-item {
            padding: 10px 15px;
            color: #ffffff;
            transition: background-color 0.3s;
          }
          .sidebar-item:hover {
            background-color: #495057;
          }
          .sidebar-item:last-child {
            border-bottom: none;
          }
          .content {
            margin-left: 250px;
            padding: 20px;
            transition: margin-left 0.3s;
          }
          .sidebar:hover + .content {
            margin-left: 300px;
          }
        `}
      </style>

      <div className="sidebar">
        <div className="sidebar-item my-4"></div>
        <div className="sidebar-item">
            <Link to={'/admin'} style ={{textDecoration:"none",color:"white"}}>Quản lí sản phẩm</Link>
        </div>
        <div className="sidebar-item">
            <Link to={'/admin/user'} style ={{textDecoration:"none",color:"white"}}>Quản lí người dùng</Link>
        </div>
        <div className="sidebar-item">
            <Link to={'/admin/orderuser'} style ={{textDecoration:"none",color:"white"}}>Quản lí đơn đặt hàng</Link>
        </div>
        <div className="sidebar-item">Báo cáo</div>
        <div className="sidebar-item">Cài đặt</div>
      </div>


      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </div>
  );
}

export default Sidebar;
