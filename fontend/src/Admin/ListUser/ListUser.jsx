import React, { useEffect, useState } from 'react';
import './ListUser.css';
import AddProduct from '../AddProduct/AddProduct';
// import cross_icon from '../../Assets/cross_icon.png';
import cross_icon from '../../Components/Assets/cross_icon.png'

// function formatDate(date) {
//     // Định dạng lại ngày giờ ở đây
//     return date.toLocaleDateString("en-US");
// }

// Hàm renderCartData để hiển thị dữ liệu giỏ hàng
function renderCartData(cartData) {
    const cartItems = Object.entries(cartData);
    return (
        <ul>
            {cartItems.map(([productId, quantity]) => (
                <div key={productId}>Sản phẩm {productId}: {quantity}</div>
            ))}
        </ul>
    );
}

const ListUser = () => {
    const [allproducts, setAllProducts] = useState([]);

    const fetchInfo = async () => {
        await fetch('http://localhost:4000/allusers')
            .then((res) => res.json())
            .then((data) => {
                setAllProducts(data);
            });
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    const remove_product = async (id) => {
        await fetch('http://localhost:4000/removeuser', {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        });
        // After removal, fetch updated product list
        await fetchInfo();
    };

    return (
        <div className='list-product'>

            <h1 className='mb-4'>Danh sách người dùng </h1>
            <div className='listproduct-allproducts' >
                <table class="table table-hover table-wrapper listproduct-format-main">
                    <thead>
                        <tr>
                            <th scope="col">Tên người dùng</th>
                            <th scope="col" style={{width:'40vh'}}>Email</th>
                            <th scope="col" >Password</th>
                            {/* <th scope="col" >Giỏ hàng</th> */}
                            <th scope="col">Ngày đăng kí</th>
                            <th scope="col">Xóa</th>
                        </tr>
                    </thead>
                    <tbody className='listproduct-format'>
                           
                        {allproducts.map((item, index) => {
                            return (
                            
                                <tr>
                                    
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.password}</td>
                                        {/* <td>{renderCartData(item.cartData)}</td> */}
                                        <td>{new Date(item.date).toLocaleDateString("vi-VN")}</td>
                                        <td><img src={cross_icon} alt="" className="" onClick={() => remove_product(item.id)}  style={{cursor:"pointer"}}/></td>
                                </tr>
                                
                                
                            
                            );
                        })}

                        
                    </tbody>
                </table>

            </div>

       
        </div>
    );
};

export default ListUser

