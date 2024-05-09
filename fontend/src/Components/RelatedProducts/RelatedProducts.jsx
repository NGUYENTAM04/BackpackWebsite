import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
import { Link } from 'react-router-dom'

const RelatedProducts = () => {
  return (
    <div>
      <div className="relatedproducts">
        <h1>Những sản phẩm liên quan</h1>
        <div>
          <hr />
        </div>

        <div className="container mb-5" style={{}}>
          <div className="row">
            {data_product.map((item, i) => {
              
                return (
                  <div key={i} className="container mt-5 col-md-3">
                    <div className="card " style={{height:"500px"}}>
                      <img src={item.image} className="card-img-top pt-2 px-2 img-thumnail rounded" alt={item.name} style={{height:"300px"}} />
                      <div className="card-body">
                        <h5 className="card-title" style={{fontSize:"16px"}}>{item.name}</h5>
                      </div>
                      <div className='d-flex'>
                        <p className="card-text mx-4" style={{fontSize:"20px",color:"red"}}>{Intl.NumberFormat().format(item.new_price)}</p>
                        <p className="card-text mx-4" style={{ textDecoration: 'line-through' }}>{Intl.NumberFormat().format(item.old_price)}</p>

                      </div>
                        {/* <a href="#" className="btn btn-primary mt-2 my-2 mx-2">Xem chi tiết</a> */}
                        <Link to={`/product/${item.id}`} onClick={() => window.scroll(0, 0)} className="btn btn-primary mt-2 my-2 mx-2" style={{background:"#ad032f",border:"none"}}>Xem chi tiết</Link>
                    </div>
                  </div>
                    

                );
            }
            )}
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default RelatedProducts
