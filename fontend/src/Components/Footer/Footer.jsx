import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import  pintester_icon from '../Assets/pintester_icon.png'
import  whatsapp_icon from '../Assets/whatsapp_icon.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Thông tin về Balo No.1</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus magna quis tincidunt ultrices.</p>
          </div>
          <div className="col-md-4">
            <h4>Nhấn nhanh vào đường Link</h4>
            <ul className="footer-links horizontal-nav">
              <li><a href="#">Shop</a></li>
              <li><a href="#">Thông tin</a></li>
              <li><a href="#">Dịch vụ</a></li>
              <li><a href="#">Liên Lạc</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4 style={{width:"50vh"}}>Theo dõi chúng tôi</h4>
            <ul className="social-icons">
            
              <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            </ul>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div> */}
      </div>
    </footer>

    // <div>
    //     <div className="footer">
    //         <div className="footer-logo">
    //             <img src={footer_logo} alt="" />
    //             <p>SHOPPER</p>
    //         </div>
    //         <ul className="footer-link">
    //             <li>Company</li>
    //             <li>Products</li>
    //             <li>Offices</li>
    //             <li>Contact</li>
    //         </ul>
    //         <div className="footer-social-icon">
    //             <div className="footer-icons-container">
    //             <img src={instagram_icon} alt="" />
    //             </div>
    //             <div className="footer-icons-container">
    //             <img src={pintester_icon} alt="" />
    //             </div>
    //             <div className="footer-icons-container">
    //             <img src={whatsapp_icon} alt="" />
    //             </div>
    //         </div>
    //         <div className="footer-copy-right">
    //             <hr />
    //             <p>Copyright @ 2023 - All Right Reserved.</p>
    //         </div>
    //     </div>
    // </div>
  )
}

export default Footer
