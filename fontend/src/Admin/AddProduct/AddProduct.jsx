import React, { useState, useEffect } from 'react';
import './AddProduct.css';
import upload_area from '../../Components/Assets/upload_area.svg';

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "",
    new_price: "",
    old_price: ""
  });
  const [reloadPage, setReloadPage] = useState(false); // Biến để đánh dấu có nên tải lại trang hay không

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  }

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  }

  const addProduct = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image);

    await fetch('http://localhost:4000/upload', {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
      body: formData
    })
      .then((resp) => resp.json())
      .then((data) => { responseData = data });

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch('http://localhost:4000/addproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.success) {
            alert("Sản phẩm đã được thêm");
            setReloadPage(true); // Đánh dấu rằng có nên tải lại trang
          } else {
            alert("Lỗi thêm sản phẩm");
          }
        })
        .catch((error) => console.error('Error adding product:', error));
    }
  }

  useEffect(() => {
    // Nếu biến reloadPage được đánh dấu là true, thì tải lại trang
    if (reloadPage) {
      window.location.reload();
    }
  }, [reloadPage]); // useEffect này chỉ chạy khi reloadPage thay đổi

  return (
    <div>
      <div className="add-product">
        <div className="addproduct-itemfield">
          <p><b>Tên sản phẩm</b></p>
          <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Nhập tên sản phẩm' />
        </div>
        <div className="addproduct-price">
          <div className="addproduct-itemfield">
            <p><b>Giá cũ</b></p>
            <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Nhập giá cũ' />
          </div>
          <div className="addproduct-itemfield">
            <p><b>Giá mới</b></p>
            <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Nhập giá mới' />
          </div>
        </div>
        <div className='row'>
          <div className="addproduct-itemfield col-md-6">
            <p><b>Loại (sản phẩm)</b></p>
            <select value={productDetails.category} onChange={changeHandler} name='category' className='add-product-selector' style={{width:"33vh"}} >
            
              <option>Lựa chọn loại sản phẩm</option>
              <option value="Nữ">Balo cho nữ </option>
              <option value="Nam">Balo cho nam</option>
              <option value="Trẻ em">Balo cho trẻ</option>
            </select>
          </div>
          <div className="addproduct-itemfield col-md-6">
            <label htmlFor="file-input" className='mt-5'>
              <img src={image ? URL.createObjectURL(image) : upload_area} className='addproduct-thumnail-img' alt="" />
            </label>
            <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
          </div>

        </div>
        <button onClick={addProduct} className='addproduct-btn'>Thêm sản phẩm</button>
      </div>
    </div>
  )
}

export default AddProduct;
