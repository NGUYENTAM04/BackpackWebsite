import React, {useContext, useState } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Sidebar from '../../Admin/Sidebar/Sidebar'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);


    <Sidebar/>
  return (
      <div className='container'>

<>
            <div className="product-container ">
                <div className="row">
                    <div className="col-md-4 px-5 " style={{height:"10vh"}}>
                        {/* <img src="../../../../../img/pic_1.png" className="product-image" alt="Product Image" /> */}
                        <Carousel>
                            <img src={product.image}  alt="" />
                            <img src={product.image} alt="" />
                            <img src={product.image} alt="" />
                            <img src={product.image} alt="" />
                        </Carousel>
                    </div>
                    <div className="col-md-7 py-4">
                        <h5 className="product-title" style={{fontSize:"30px"}}>{product.name}</h5>
                        <div className="product-rating text-end pb-5" style={{fontSize:"30px"}}>&#9733; &#9733; &#9733; &#9733; &#9734;</div>
                        <div className="product-price d-flex text-center" style={{display: "flex",justifyContent: "space-evenly",fontSize:"30px",color:"red"}}>{Intl.NumberFormat().format(product.new_price)} <span className="text-muted" style={{ textDecoration: 'line-through',fontSize:"30px" }}>{Intl.NumberFormat().format(product.old_price)}</span> <span className="text-muted px-2 pb-1 font-discount "  style={{ background: "red", borderRadius: "10px",fontSize:"30px",width:"20vh" }} >-{(((product.old_price-product.new_price)/product.old_price)*100).toFixed(0)}%</span></div>
                        
                        <div className="action-buttons d-flex w-100 mb-5 py-5 mt-5 justify-content-end">
                            <button className="action-button primary d-flex mx-3 justify-content-center" style={{flex:"1",height:"55px",textAlign:"center"}} onClick={() => { addToCart(product.id) }}>Thêm vào giỏ hàng</button>
                            <button className="action-button success d-flex justify-content-center" style={{flex:"1",textAlign:"center"}}>Mua ngay bây giờ</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    
</div>




  )
}

export default ProductDisplay
