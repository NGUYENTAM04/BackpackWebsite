import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import cross_icon from '../../Components/Assets/cross_icon.png';
import edit_icon from '../../Components/Assets/edit_icon.png';

const ListProduct = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [editProductId, setEditProductId] = useState(null);
    const [editProductInfo, setEditProductInfo] = useState({
        name: "",
        old_price: "",
        new_price: "",
        category: ""
    });

    const fetchInfo = async () => {
        try {
            const response = await fetch('http://localhost:4000/allproducts');
            const data = await response.json();
            setAllProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchInfo();
    }, []);


    const remove_product = async (id) => {
        try {
            await fetch('http://localhost:4000/removeproduct', {
                method: 'DELETE',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: id })
                });
            await fetchInfo();
        } catch (error) {
            console.error('Error removing product:', error);
        }
    };

    const handleEditProduct = (id) => {
        const productToEdit = allProducts.find(product => product.id === id);
        if (productToEdit) {
            setEditProductId(id);
            setEditProductInfo({ 
                name: productToEdit.name,
                old_price: productToEdit.old_price,
                new_price: productToEdit.new_price,
                category: productToEdit.category
            });
        } else {
            console.error(`Product with id ${id} not found.`);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditProductInfo({
            ...editProductInfo,
            [name]: value
        });
    };

    const handleCancelEdit = () => {
        setEditProductId(null);
        setEditProductInfo({
            name: "",
            old_price: "",
            new_price: "",
            category: ""
        });
    };

    const handleSaveEdit = async () => {
        try {
            if (!editProductId) {
                console.error('No product selected for editing.');
                return;
            }

            const productId = parseInt(editProductId);
            await fetch(`http://localhost:4000/products/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(editProductInfo)
            });
            setEditProductId(null);
            setEditProductInfo({
                name: "",
                old_price: "",
                new_price: "",
                category: ""
            });
            await fetchInfo();
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div className='list-product'>
            <h1>Danh sách sản phẩm</h1>
            <div className='listproduct-allproducts'>
                <table className="table table-hover table-wrapper listproduct-format-main">
                    <thead>
                        <tr>
                            <th scope="col">Ảnh sản phẩm</th>
                            <th scope="col" style={{ width: '40vh' }}>Tên sản phẩm</th>
                            <th scope="col">Giá cũ</th>
                            <th scope="col">Giá mới</th>
                            <th scope="col">Loại (sản phẩm)</th>
                            <th scope="col">Chỉnh sửa</th>
                            <th scope="col">Xóa</th>
                        </tr>
                    </thead>
                    <tbody className='listproduct-format'>
                        {allProducts.map((product, index) => (
                            <tr key={index}>
                                <td><img src={product.image} alt="" className="listproduct-product-icon" /></td>
                                <td>
                                    {editProductId === product.id ? (
                                        <input type="text" name="name" value={editProductInfo.name} onChange={handleInputChange} />
                                    ) : (
                                        product.name
                                    )}
                                </td>
                                <td>
                                    {editProductId === product.id ? (
                                        <input type="text" name="old_price" value={editProductInfo.old_price} onChange={handleInputChange} />
                                    ) : (
                                        Intl.NumberFormat().format(product.old_price)
                                    )}
                                </td>
                                <td>
                                    {editProductId === product.id ? (
                                        <input type="text" name="new_price" value={editProductInfo.new_price} onChange={handleInputChange} />
                                    ) : (
                                        Intl.NumberFormat().format(product.new_price)
                                    )}
                                </td>
                                <td>
                                    {editProductId === product.id ? (
                                        <input type="text" name="category" value={editProductInfo.category} onChange={handleInputChange} />
                                    ) : (
                                        product.category
                                    )}
                                </td>
                                <td>
                                    {editProductId === product.id ? (
                                        <>
                                            <button className="btn btn-primary" onClick={handleSaveEdit}>Lưu</button>
                                            <button className="btn btn-secondary" onClick={handleCancelEdit}>Hủy</button>
                                        </>
                                    ) : (
                                        <img src={edit_icon} alt="Edit" className="listproduct-edit-icon" style={{ width: "2vh", height: "2vh", cursor: "pointer" }} onClick={() => handleEditProduct(product.id)} />
                                    )}
                                </td>
                                <td>
                                    <img src={cross_icon} alt="Delete" className="" onClick={() => remove_product(product.id)}  style={{cursor:"pointer"}}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListProduct;

    
                                                
            
