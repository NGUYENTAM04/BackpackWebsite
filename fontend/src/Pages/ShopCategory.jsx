import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
import { Link } from 'react-router-dom';
import hero_image from '../Components/Assets/banner_.png';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [sortByPrice, setSortByPrice] = useState('none');

  const handleSortChange = (sortBy) => {
    setSortByPrice(sortBy);
  };

  const sortedProducts = [...all_product].sort((a, b) => {
    if (sortByPrice === 'ascending') {
      return a.new_price - b.new_price;
    } else if (sortByPrice === 'descending') {
      return b.new_price - a.new_price;
    } else {
      return 0;
    }
  });

  return (
    <div>
      <img src={props.banner} alt="" style={{ width: '100%', height: '600px' }} />
      <div className='container mt-5'>
        <div className="dropdown text-end">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Lọc giá sản phẩm
          </button>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item" onClick={() => handleSortChange('descending')}>Từ cao đến thấp</button></li>
            <li><button className="dropdown-item" onClick={() => handleSortChange('ascending')}>Từ thấp đến cao</button></li>
          </ul>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row">
          {sortedProducts.map((item, i) => {
            if (props.category === item.category) {
              return (
                <div key={i} className="container mt-5 col-md-3">
                  <div className="card" style={{ height: "520px" }}>
                    <img src={item.image} className="card-img-top pt-2 px-2 img-thumnail rounded" alt={item.name} style={{ height: "300px" }} />
                    <div className="card-body">
                      <h5 className="card-title" style={{ fontSize: "16px" }}>{item.name}</h5>
                    </div>
                    <div>
                      <div className='d-flex justify-center align-center'>
                        <p className="card-text mx-4" style={{ fontSize: "20px", color: "red" }}>{Intl.NumberFormat().format(item.new_price)}</p>
                        <p className="card-text mx-4" style={{ fontSize: '15px', color: 'white', background: 'red', borderRadius: '10px', width: '50px', height: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          -{(((item.old_price - item.new_price) / item.old_price) * 100).toFixed(0)}%
                        </p>
                      </div>
                      <p className="card-text mx-4" style={{ textDecoration: 'line-through' }}>{Intl.NumberFormat().format(item.old_price)}</p>
                    </div>
                    <Link to={`/product/${item.id}`} onClick={() => window.scroll(0, 0)} className="btn btn-primary mt-2 my-2 mx-2" style={{ background: "#ad032f", border: "none" }}>Xem chi tiết</Link>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default ShopCategory;
