import React, { useContext, useState } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import banner_cart from "../Assets/banner_cart.png"
import { Link } from 'react-router-dom'


  



const CartItems = () => {


  
  const {getTotalCartAmout,all_product,cartItems,minustoCart,addToCart,remove_product} =  useContext(ShopContext);

  //tăng giảm số lượng 

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  
  

  return (


    <div>
      <div className='container listproduct-allproducts mt-5' >
                <table class="table table-hover table-wrapper listproduct-format-main" style={{fontSize:"18px"}}>
                    <thead>
                        <tr>
                            <th scope="col">Ảnh sản phẩm</th>
                            <th scope="col" style={{width:'40vh'}}>Tên sản phẩm</th>
                            <th scope="col" >Giá cũ</th>
                            <th scope="col" >Giá mới</th>
                            <th scope="col" >Số lượng</th>
                            <th scope="col">Tổng</th>
                            <th scope="col">Xóa</th>
                        </tr>
                    </thead>
                    <tbody className='listproduct-format'>
                           
                        {all_product.map((e)=>{
                        if(cartItems[e.id]>0)
                        {
                          const quantity = cartItems[e.id];

                          <div>
                            <button onClick={decreaseQuantity}>-</button>
                                <span>{quantity}</span>
                            <button onClick={increaseQuantity}>+</button>
                          </div>
                        
                            return (
                            
                                <tr>
                                    <th scope="row"  ><img src={e.image} alt="" className="listproduct-product-icon"  /></th>
                                        <td>{e.name}</td>
                                        <td>{Intl.NumberFormat().format(e.old_price)}</td>
                                        <td>{Intl.NumberFormat().format(e.new_price)}</td>
                                        <td >
                                          <div >
                                            <div style={{border:" 1px gray solid"}} >
                                            <i class="fa-solid fa-minus" onClick={()=> {minustoCart(e.id)}}></i>
                                                <span style={{padding: "0 3vh"}}>{cartItems[e.id]}</span>
                                              <i class="fa-solid fa-plus" onClick={()=> {addToCart(e.id)}}></i>
                                            </div>

                                          </div>
                                        </td>
                                        <td>{Intl.NumberFormat().format(e.new_price)} x {cartItems[e.id]}={Intl.NumberFormat().format(e.new_price*cartItems[e.id])}</td>
                                        <td><img  src={remove_icon} onClick={()=> {remove_product(e.id)}} alt="" className="" /></td>
                                </tr>
                                
                            
                            );
                          }
                    return null;
              })} 
                  

                        
                    </tbody>
                </table>

            </div>
            <div>
            </div>

     
      <div className="cartitems-down">
      <div className="cartitems-banner w-100 mx-5 ">
            <div className="">
                <img src={banner_cart} className='w-100' alt="" />
          </div>
        </div>

        <div className="cartitems-total cartitems-promocode d-flex justify-content-center">
              <h1>Tổng Giỏ Hàng</h1>
              <div className="cartitems-total-item">
                <p>Tổng</p>
                <p>{Intl.NumberFormat().format(getTotalCartAmout())}</p>
              </div>
                <hr />
              <div className="cartitems-total-item">
                <p>Phí vận chuyển</p>
                <p>Miễn phí</p>
              </div>
                <hr/>
              <div className="cartitems-total-item">
                <h3>Thành tiền</h3>
                <h3>{Intl.NumberFormat().format(getTotalCartAmout())}</h3>
              </div>
              
              
                <button>
                    <Link to='/payment' style={{textDecoration:"none",color:"white"}}>Mua ngay</Link>
                </button>

            
          </div>
         
        
      </div>
      
      
    </div>
  )
}

export default CartItems
