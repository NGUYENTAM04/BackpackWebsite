import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import  hero_image from '../Assets/hero_image.png'

import bannerMen from '../Assets/banner_mens.jpg'
import bannerWomen from '../Assets/banner_women.jpg'
import bannerKid from '../Assets/banner_kids.jpg'


const Hero = () => {
  return (
    <div>
        {/* <div className="hero">
            <div className="hero-left">
                <h2 />
                <div>
                <div className="hero-hand-icon">
                    <p>Mới </p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>sự lựa chọn</p>
                <p>cho mọi người</p>
                </div>
                <div className="hero-lastest-btn">
                <div>Bộ sưu tập mới nhất</div>
                <img src={arrow_icon} alt="" />
                </div>
            </div>
            
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>
        </div> */}

        {/* quảng cáo sản phẩm */}
            <div className='mb-5'>
            <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={bannerWomen} className="d-block w-100 " style={{height:"75vh"}} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={bannerMen} className="d-block w-100" style={{height:"75vh"}} alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={bannerKid} className="d-block w-100" style={{height:"75vh"}} alt="..." />
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>

            </div>
    </div>
  )
}

export default Hero
