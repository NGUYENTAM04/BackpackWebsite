import React, { useEffect, useState } from 'react'
import './NewCollection.css'
// import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'
import { Link } from 'react-router-dom'

const NewCollection = () => {

  const[new_collection,setNewCollection] =useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/newcollections')
    .then((response)=>response.json())
    .then((data)=>setNewCollection(data));
  },[])

  return (
    <div>
      <div className="new-collections">
        <h1>SẢN PHẨM MỚI NHẤT</h1>
        <hr/>

        <div className="container mb-5" style={{}}>
          <div className="row">
            {new_collection.map((item, i) => {
              
                return (
                  <div key={i} className="container mt-5 col-md-3">
                    <div className="card " style={{height:"600px"}}>
                      <img src={item.image} className="card-img-top pt-2 px-2 img-thumnail rounded" alt={item.name} style={{height:"300px"}} />
                      <div className="card-body">
                        <h5 className="card-title" style={{fontSize:"16px"}}>{item.name}</h5>
                      </div>
                      <div >
                        <div className='d-flex justify-center align-center'>
                          <p className="card-text mx-4" style={{fontSize:"20px",color:"red"}}>{Intl.NumberFormat().format(item.new_price)}</p>
                          <p className="card-text mx-4" style={{fontSize: '15px', color: 'white',background: 'red',borderRadius: '10px',width: '50px',height: '25px', display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                            -{(((item.old_price-item.new_price)/item.old_price)*100).toFixed(0)}%
                          </p>

                        </div>

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

        {/* <div className="collections">
            {new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price}
                        old_price={item.old_price}/>
            })}
        </div> */}
    </div>
    </div>
  )
}

export default NewCollection
