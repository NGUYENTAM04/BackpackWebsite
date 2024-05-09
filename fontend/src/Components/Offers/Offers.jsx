import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
import { Link } from 'react-router-dom'

const Offers = () => {
  return (
    <div>
      <div className="offers">
        <div className="offers-left">
          <h1>SẢN PHẨM MỚI NHẤT CHỈ DÀNH CHO BẠN</h1>
          <p> TRÊN SẢN PHẨM BÁN HÀNG</p>
          <div className='d-flex justify-content-center'>

            <Link to='/popular'>
              <button>Khám phá ngay</button>

            </Link>
          </div>
        </div>
        <div className="offers-right">
          <img src={exclusive_image} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Offers
