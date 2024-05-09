import React, { useEffect, useState } from 'react';

        const ListOrderUser = () => {
            const [orders, setOrders] = useState([]);

            useEffect(() => {
                const fetchOrders = async () => {
                    try {
                        const response = await fetch('http://localhost:4000/allorders');
                        const data = await response.json();
                        setOrders(data);
                    } catch (error) {
                        console.error('Error fetching orders:', error);
                    }
                };

                fetchOrders();
            }, []);

            // Hàm hiển thị danh sách sản phẩm trong giỏ hàng
            const renderCartItems = (cartItems) => {
                // Kiểm tra nếu cartItems không phải là một đối tượng JSON
                if (typeof cartItems !== 'object' || cartItems === null) {
                    return <span>Không có sản phẩm trong giỏ hàng</span>;
                }

                return (
                    <table className=''>
                        <thead>
                            <tr className='text-center'>
                                <th >Ảnh sản phẩm</th>
                                <th style={{ width: '20vh' }}>Tên sản phẩm</th>
                                <th style={{ width: '20vh' }}>Số lượng</th>
                                <th>Giá</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(cartItems).map(([productName, item], index) => (
                                <tr key={index} className='text-center'>
                                    {/* <td>{item.image}</td> */}
                                    <td><img src={item.image} alt={productName} style={{ width: '100px' }}/> </td>
                                    <td>{productName}</td>
                                    <td>{item.quantity}</td>
                                    <td>{Intl.NumberFormat().format(item.price)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                );
            };

            return (
                <>
                    <div>
                        <h1 className='mb-4'>Danh sách đơn hàng</h1>
                        <div className=''>
                            <table className="table table-hover table-wrapper table-bordered" >
                                <thead>
                                    <tr className='text-center'>
                                        <th>Tên</th>
                                        <th>Email</th>
                                        <th>Địa chỉ</th>
                                        <th>Số điện thoại</th>
                                        <th style={{ width: '60vh' }}>Giỏ hàng</th>
                                        <th>Tổng số tiền</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order, index) => (
                                        <tr key={index} className='text-center'>
                                            <td>{order.name}</td>
                                            <td>{order.email}</td>
                                            <td>{order.address}</td>
                                            <td>{order.phoneNumber}</td>
                                            <td>
                                                {renderCartItems(order.cartItems)}
                                            </td>
                                            <td>{ Intl.NumberFormat().format(order.totalAmount)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            );
        };

        export default ListOrderUser;


