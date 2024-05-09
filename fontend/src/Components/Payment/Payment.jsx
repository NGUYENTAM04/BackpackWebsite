// //         import React, { useContext, useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import { ShopContext } from '../../Context/ShopContext';
// // import payment from "../Assets/payment.png"
// // import remove_icon from '../Assets/cart_cross_icon.png';

// // const Payment = () => {
// //   const { getTotalCartAmout, all_product, cartItems, remove_product, handleChange, handlePayment, buyerInfo } = useContext(ShopContext);

// //   return (
// //     <>
// //       <div style={{ margin: "2vh 0" }}>
// //         <div className='container'>
// //           <div className='row'>
// //             <div className="cartitems-total cartitems-promocode d-flex justify-content-center col-md-6 py-4 pb-4 mx-4" style={{ height: "56vh" }}>
// //               <h1>Tổng Thanh toán</h1>
// //               <div className="cartitems-total-item">
// //                 <p>Tổng</p>
// //                 <p>{Intl.NumberFormat().format(getTotalCartAmout())}</p>
// //               </div>
// //               <hr />
// //               <div className="cartitems-total-item">
// //                 <p>Phí vận chuyển</p>
// //                 <p>Miễn phí</p>
// //               </div>
// //               <hr />
// //               <div className="cartitems-total-item">
// //                 <h3>Thành tiền</h3>
// //                 <h3>{Intl.NumberFormat().format(getTotalCartAmout())}</h3>
// //               </div>
// //               <button onClick={handlePayment}>
// //                 Đặt hàng
// //               </button>
// //             </div>
// //             <div className="cartitems-total cartitems-promocode d-flex justify-content-center col-md-6 py-4 pb-4">
// //               <h1>Điền thông tin của bạn</h1>
// //               <hr />
// //               <div className="cartitems-total-item">
// //                 <p><b>Tên người nhận:</b></p>
// //                 <input type="text" name="name" placeholder="Nhập tên người nhận" style={{ width: "54vh" }} onChange={handleChange} value={buyerInfo.name} />
// //               </div>
// //               <div className="cartitems-total-item">
// //                 <p><b>Địa chỉ:</b></p>
// //                 <input type="text" name="address" placeholder="Nhập địa chỉ" style={{ width: "54vh" }} onChange={handleChange} value={buyerInfo.address} />
// //               </div>
// //               <div className="cartitems-total-item">
// //                 <p><b>Số điện thoại người nhận:</b></p>
// //                 <input type="text" name="phoneNumber" placeholder="Nhập số điện thoại người nhận" style={{ width: "54vh" }} onChange={handleChange} value={buyerInfo.phoneNumber} />
// //               </div>
// //               <div className="cartitems-total-item">
// //                 <img src={payment} alt="" style={{ width: "77vh" }} />
// //               </div>
// //             </div>

// //             <div className='container listproduct-allproducts mt-5' >
// //               <h1 style={{ marginBottom: "4vh" }}>
// //                 <u>
// //                   Danh sách sản phẩm bạn muốn mua
// //                 </u>

// //               </h1>
// //               <table class="table table-hover table-wrapper listproduct-format-main" style={{ fontSize: "18px" }}>
// //                 <thead>
// //                   <tr>
// //                     <th scope="col">Ảnh sản phẩm</th>
// //                     <th scope="col" style={{ width: '40vh' }}>Tên sản phẩm</th>
// //                     <th scope="col" >Giá cũ</th>
// //                     <th scope="col" >Giá mới</th>
// //                     <th scope="col" >Số lượng</th>
// //                     <th scope="col">Tổng</th>
// //                     <th scope="col">Xóa</th>

// //                   </tr>
// //                 </thead>
// //                 <tbody className='listproduct-format'>

// //                   {all_product.map((e) => {
// //                     if (cartItems[e.id] > 0) {
// //                       const quantity = cartItems[e.id];

// //                       return (

// //                         <tr>
// //                           <th scope="row"  ><img src={e.image} alt="" className="listproduct-product-icon" /></th>
// //                           <td>{e.name}</td>
// //                           <td>{Intl.NumberFormat().format(e.old_price)}</td>
// //                           <td>{Intl.NumberFormat().format(e.new_price)}</td>
// //                           <td >
// //                             <div >

// //                               <span style={{ padding: "0 3vh" }}>{cartItems[e.id]}</span>

// //                             </div>
// //                           </td>
// //                           <td>{Intl.NumberFormat().format(e.new_price)} x {cartItems[e.id]}={Intl.NumberFormat().format(e.new_price * cartItems[e.id])}</td>
// //                           <td><img src={remove_icon} onClick={() => { remove_product(e.id) }} alt="" className="" /></td>

// //                         </tr>


// //                       );
// //                     }
// //                     return null;
// //                   })}
// //                 </tbody>
// //               </table>

// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Payment;




// import React, { useContext, useState } from 'react';
// import { ShopContext } from '../../Context/ShopContext';
// import payment from "../Assets/payment.png"
// import remove_icon from '../Assets/cart_cross_icon.png';

// const Payment = () => {
//   const { getTotalCartAmout, all_product, cartItems, remove_product, handleChange, handlePayment, buyerInfo } = useContext(ShopContext);

//   return (
//     <>
//       <div style={{ margin: "2vh 0" }}>
//         <div className='container'>
//           <div className='row'>
//             <div className="cartitems-total cartitems-promocode d-flex justify-content-center col-md-6 py-4 pb-4 mx-4" style={{ height: "56vh" }}>
//               <h1>Tổng Thanh toán</h1>
//               <div className="cartitems-total-item">
//                 <p>Tổng</p>
//                 <p>{Intl.NumberFormat().format(getTotalCartAmout())}</p>
//               </div>
//               <hr />
//               <div className="cartitems-total-item">
//                 <p>Phí vận chuyển</p>
//                 <p>Miễn phí</p>
//               </div>
//               <hr />
//               <div className="cartitems-total-item">
//                 <h3>Thành tiền</h3>
//                 <h3>{Intl.NumberFormat().format(getTotalCartAmout())}</h3>
//               </div>
//               <button onClick={handlePayment}>
//                 Đặt hàng
//               </button>
//             </div>
//             <div className="cartitems-total cartitems-promocode d-flex justify-content-center col-md-6 py-4 pb-4">
//               <h1>Điền thông tin của bạn</h1>
//               <hr />
//               <div className="cartitems-total-item">
//                 <p><b>Tên người nhận:</b></p>
//                 <input type="text" name="name" placeholder="Nhập tên người nhận" style={{ width: "54vh" }} onChange={handleChange} value={buyerInfo.name} />
//               </div>
//               <div className="cartitems-total-item">
//                 <p><b>Email:</b></p>
//                 <input type="text" name="email" placeholder="Nhập email" style={{ width: "54vh" }} onChange={handleChange} value={buyerInfo.email} />
//               </div>
//               <div className="cartitems-total-item">
//                 <p><b>Địa chỉ:</b></p>
//                 <input type="text" name="address" placeholder="Nhập địa chỉ" style={{ width: "54vh" }} onChange={handleChange} value={buyerInfo.address} />
//               </div>
//               <div className="cartitems-total-item">
//                 <p><b>Số điện thoại người nhận:</b></p>
//                 <input type="text" name="phoneNumber" placeholder="Nhập số điện thoại người nhận" style={{ width: "54vh" }} onChange={handleChange} value={buyerInfo.phoneNumber} />
//               </div>
//               <div className="cartitems-total-item">
//                 <img src={payment} alt="" style={{ width: "77vh" }} />
//               </div>
//             </div>

//             <div className='container listproduct-allproducts mt-5' >
//               <h1 style={{ marginBottom: "4vh" }}>
//                 <u>
//                   Danh sách sản phẩm bạn muốn mua
//                 </u>

//               </h1>
//               <table class="table table-hover table-wrapper listproduct-format-main" style={{ fontSize: "18px" }}>
//                 <thead>
//                   <tr>
//                     <th scope="col">Ảnh sản phẩm</th>
//                     <th scope="col" style={{ width: '40vh' }}>Tên sản phẩm</th>
//                     <th scope="col" >Giá cũ</th>
//                     <th scope="col" >Giá mới</th>
//                     <th scope="col" >Số lượng</th>
//                     <th scope="col">Tổng</th>
//                     <th scope="col">Xóa</th>

//                   </tr>
//                 </thead>
//                 <tbody className='listproduct-format'>

//                   {all_product.map((e) => {
//                     if (cartItems[e.id] > 0) {
//                       const quantity = cartItems[e.id];

//                       return (

//                         <tr>
//                           <th scope="row"  ><img src={e.image} alt="" className="listproduct-product-icon" /></th>
//                           <td>{e.name}</td>
//                           <td>{Intl.NumberFormat().format(e.old_price)}</td>
//                           <td>{Intl.NumberFormat().format(e.new_price)}</td>
//                           <td >
//                             <div >

//                               <span style={{ padding: "0 3vh" }}>{cartItems[e.id]}</span>

//                             </div>
//                           </td>
//                           <td>{Intl.NumberFormat().format(e.new_price)} x {cartItems[e.id]}={Intl.NumberFormat().format(e.new_price * cartItems[e.id])}</td>
//                           <td><img src={remove_icon} onClick={() => { remove_product(e.id) }} alt="" className="" /></td>

//                         </tr>


//                       );
//                     }
//                     return null;
//                   })}
//                 </tbody>
//               </table>

//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Payment;



import React, { useContext, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import payment from "../Assets/payment.png"
import remove_icon from '../Assets/cart_cross_icon.png';

const Payment = () => {
  const { getTotalCartAmout, all_product, cartItems, remove_product, handleChange, handlePayment, buyerInfo } = useContext(ShopContext);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePaymentButtonClick = async () => {
    try {
      await handlePayment(); // Gọi hàm xử lý thanh toán
      setPaymentStatus('success'); // Cập nhật trạng thái thành công
    } catch (error) {
      console.error('Lỗi khi thanh toán:', error);
      setPaymentStatus('error'); // Cập nhật trạng thái lỗi
    }
  };

  return (
    <>
      <div style={{ margin: "2vh 0" }}>
        <div className='container'>
          <div className='row'>
            <div className="cartitems-total cartitems-promocode d-flex justify-content-center col-md-6 py-4 pb-4 mx-4" style={{ height: "56vh" }}>
              <h1>Tổng Thanh toán</h1>
              <div className="cartitems-total-item">
                <p>Tổng</p>
                <p>{Intl.NumberFormat().format(getTotalCartAmout())}</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Phí vận chuyển</p>
                <p>Miễn phí</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Thành tiền</h3>
                <h3>{Intl.NumberFormat().format(getTotalCartAmout())}</h3>
              </div>
              <button onClick={handlePaymentButtonClick}>
                Đặt hàng
              </button>
              {paymentStatus === 'success' && <p style={{ color: 'green' }} className='text-center'>Đặt hàng thành công!</p>}
              {paymentStatus === 'error' && <p style={{ color: 'red' }}>Có lỗi xảy ra khi đặt hàng</p>}
            </div>
            <div className="cartitems-total cartitems-promocode d-flex justify-content-center col-md-6 py-4 pb-4">
              <h1>Điền thông tin của bạn</h1>
              <hr />
              <div className="cartitems-total-item">
                <p><b>Tên người nhận:</b></p>
                <input type="text" name="name" placeholder="Nhập tên người nhận" style={{ width: "54vh" }} onChange={handleChange} value={buyerInfo.name} />
              </div>
              <div className="cartitems-total-item">
                <p><b>Email:</b></p>
                <input type="text" name="email" placeholder="Nhập email" style={{ width: "54vh" }} onChange={handleChange} value={buyerInfo.email} />
              </div>
              <div className="cartitems-total-item">
                <p><b>Địa chỉ:</b></p>
                <input type="text" name="address" placeholder="Nhập địa chỉ" style={{ width: "54vh" }} onChange={handleChange} value={buyerInfo.address} />
              </div>
              <div className="cartitems-total-item">
                <p><b>Số điện thoại người nhận:</b></p>
                <input type="text" name="phoneNumber" placeholder="Nhập số điện thoại người nhận" style={{ width: "54vh" }} onChange={handleChange} value={buyerInfo.phoneNumber} />
              </div>
              <div className="cartitems-total-item">
                <img src={payment} alt="" style={{ width: "77vh" }} />
              </div>
            </div>

            <div className='container listproduct-allproducts mt-5'>
              <h1 style={{ marginBottom: "4vh" }}>
                <u>
                  Danh sách sản phẩm bạn muốn mua
                </u>
              </h1>
              <table className="table table-hover table-wrapper listproduct-format-main" style={{ fontSize: "18px" }}>
                <thead>
                  <tr>
                    <th scope="col">Ảnh sản phẩm</th>
                    <th scope="col" style={{ width: '40vh' }}>Tên sản phẩm</th>
                    <th scope="col" >Giá cũ</th>
                    <th scope="col" >Giá mới</th>
                    <th scope="col" >Số lượng</th>
                    <th scope="col">Tổng</th>
                    <th scope="col">Xóa</th>
                  </tr>
                </thead>
                <tbody className='listproduct-format'>
                  {all_product.map((e) => {
                    if (cartItems[e.id] > 0) {
                      const quantity = cartItems[e.id];
                      return (
                        <tr key={e.id}>
                          <th scope="row"><img src={e.image} alt="" className="listproduct-product-icon" /></th>
                          <td>{e.name}</td>
                          <td>{Intl.NumberFormat().format(e.old_price)}</td>
                          <td>{Intl.NumberFormat().format(e.new_price)}</td>
                          <td>
                            <div>
                              <span style={{ padding: "0 3vh" }}>{cartItems[e.id]}</span>
                            </div>
                          </td>
                          <td>{Intl.NumberFormat().format(e.new_price)} x {cartItems[e.id]} = {Intl.NumberFormat().format(e.new_price * cartItems[e.id])}</td>
                          <td><img src={remove_icon} onClick={() => { remove_product(e.id) }} alt="" className="" /></td>
                        </tr>
                      );
                    }
                    return null;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
