
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.jpg';
import women_banner from './Components/Assets/banner_women.jpg';
import kid_banner from './Components/Assets/banner_kids.jpg';
import ArrowUp from './Components/ArrowUp/ArrowUp';
import Admin_Products from './Pages/Admin_Products';
import Admin_User from './Pages/Admin_User';

import AddProduct from './Admin/AddProduct/AddProduct'
// import ListProduct from '../../Components/ListProduct/ListProduct'
import ListProduct from './Admin/ListProduct/ListProduct'
import Popular from './Components/Popular/Popular';
import Payment from './Components/Payment/Payment';
import ListOrderUser from './Admin/ListOrderUser/ListOrderUser';
import Admin_Orders from './Pages/Admin_Orders';

function App() {
  return (
    <div >
     <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/men' element={<ShopCategory banner={men_banner} category="Nam"/>}/>
            <Route path='/women' element={<ShopCategory banner={women_banner} category="Nữ"/>}/>
            <Route path='/kids' element={<ShopCategory banner={kid_banner} category="Trẻ em"/>}/>

            <Route path="/product" element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
            </Route>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<LoginSignup/>}/> 

            <Route path='/admin' element={<Admin_Products/>}/>     

            <Route path='/admin/user' element={<Admin_User/>}/>
            <Route path='/admin/listproducts' element={<ListProduct/>}/> 
            <Route path='/popular' element={
                                    <div className='py-5'>
                                      <Popular/>

                                    </div>
                                    }/> 

            <Route path='payment' element={<Payment/>}/>
            <Route path='/admin/orderuser' element={<Admin_Orders/>}/>

        </Routes>

     </BrowserRouter>
        <Footer/>
     <ArrowUp />
    </div>
  );
}

export default App;
