import React, { useContext, useEffect, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_logo from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import all_product from '../Assets/all_product';

const Navbar = () => {
   const [menu, setMenu] = useState("shop");
   const { getTotalCartItems } = useContext(ShopContext);
   const menuRef = useRef();
   const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false); // Trạng thái đăng nhập của admin

   useEffect(() => {
     // Kiểm tra nếu đang ở trang admin thì đặt isAdminLoggedIn thành true
     const pathname = window.location.pathname;
     if (pathname === '/admin') {
       setIsAdminLoggedIn(true);
     } else {
       setIsAdminLoggedIn(false);
     }
   }, []);

   const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
   }

  //  Search
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  // Menu
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  const toggleAccountMenu = () => {
    setIsAccountMenuOpen(!isAccountMenuOpen);
  };

  //Reponsive
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  //search

  const [input, setInput] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (input === '') {
      setProducts([]);
    } else {
      const result = all_product.filter(item => item.name.toLowerCase().indexOf(input.toLowerCase()) !== -1);
      setProducts(result);
    }
  }, [input]);

  return (
    <div style={{paddingBottom: "6vh"}}>

      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" >
        <div className="container-fluid">
        <Link to="/">
          <a className="navbar-brand" href="#"><img src={logo} alt="" style={{width: "20vh", height: "10vh"}}/></a>
        </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item" onClick={()=>{setMenu("shop")}}>
                <Link style={{textDecoration:'none'}} to='/'><a className="nav-link" href="#" >Shop</a></Link>{menu==="shop"}
              </li>
              <li className="nav-item" onClick={()=>{setMenu("men")}}>
                <Link style={{textDecoration:'none'}} to='/men'><a className="nav-link" href="#">Balo Nam</a></Link> {menu==="men"}
              </li>
              <li className="nav-item" onClick={()=>{setMenu("women")}}>
                <Link style={{textDecoration:'none'}} to='/women'><a className="nav-link" href="#">Balo Nữ</a></Link> {menu==="women"}
              </li>
              <li className="nav-item"  onClick={()=>{setMenu("kids")}}>
                <Link style={{textDecoration:'none'}} to='/kids'><a className="nav-link" href="#">Balo Trẻ Em</a></Link> {menu==="kids"}
              </li>
              {isAdminLoggedIn &&
                <li className="nav-item" onClick={()=>{setMenu("admin")}}>
                  <Link style={{textDecoration:'none'}} to='/admin'><a className="nav-link" href="#">Quản lí admin</a></Link> {menu==="admin"}
                </li>
              }
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" onClick={toggleAccountMenu} aria-haspopup="true" aria-expanded={isAccountMenuOpen ? "true" : "false"}>
                  Tài khoản
                </a>
                <div className={`dropdown-menu ${isAccountMenuOpen ? "show" : ""}`} aria-labelledby="navbarDropdown">
                  {isAdminLoggedIn
                    ? <Link style={{textDecoration:'none'}} to='/' onClick={() => {setIsAdminLoggedIn(false)}}><a className="dropdown-item" href="#" >Đăng xuất </a></Link>
                    : <Link style={{textDecoration:'none'}} to='/login'><a className="dropdown-item" href="#">Đăng nhập</a></Link>
                  }
                </div>
              </li>
            </ul>
            <form className="form-inline">
              <div className="search-group">
                <input 
                  className="form-control mr-sm-2" type="search" id="searchInput" placeholder=" Tìm kiếm sản phẩm" aria-label="Search" style={{ display: isSearchVisible ? 'block' : 'none' ,borderRadius:"10px"}} 
                  value={input}
                  onChange={(e) => setInput(e.target.value)} 
                />
              </div>
              <button className="btn btn-light my-2 my-sm-0" type="button" id="searchButton" onMouseEnter={toggleSearch} style={{borderRadius:"10px"}}><i className="fas fa-search"></i></button>
            </form>
            <div className="cart-icon">
              <Link style={{textDecoration:'none'}} to='/cart'><a href="#" className="btn btn-link text-black" ><img src={cart_logo} alt="" style={{width:"30px"}}/></a></Link>
              <div className="cart-badge">{getTotalCartItems()}</div>
            </div>
          </div>
        </div>
      </nav>
      <div  className='search' style={{
        overflowY: "auto",
    zIndex: "3",
    width: "50%",
    overflowX: "hidden",
    maxHeight: "40vh",
    background: "rgba(203, 189, 189, 0.9)",
    borderRadius: "10px",
    marginTop: "8vh",
    position: "absolute",
    transform: "translateX(82%)",
      }}>
        <div className="container">
          <div className="row">
            {products.map(item => (
              <div key={item.id} className="col-md-4 my-3">
                <div className="d-flex">
                  <div className="col-md-3 mx-3">
                    <img src={item.image} className="img-fluid" alt="Placeholder" />
                  </div>
                  <div className="col-md-9">
                    <Link to={`/product/${item.id}`} onClick={() => window.scroll(0, 0)} style={{textDecoration:"none",color:"grey"}}><p className="mb-0"> {item.name}</p></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
