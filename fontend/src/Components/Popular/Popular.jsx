import React, { useEffect, useState } from 'react'
import './Popular.css'
// import data_product from '../Assets/data'
import Item from '../Item/Item'

import { Link } from 'react-router-dom'
import tam from '../Assets/banner_women.jpg'
import tam1 from '../Assets/banner_mens.jpg'
import tam2 from '../Assets/banner_kids.jpg'



const Popular = () => {
 //popular
const [popularProducts, setPopularProducts] = useState([]);

useEffect(() => {
  fetch('http://localhost:4000/popular')
    .then((response) => response.json())
    .then((data) => setPopularProducts(data));
}, []);

//populariwomen
const [populariwomenProducts, setPopulariWomenProducts] = useState([]);

useEffect(() => {
  fetch('http://localhost:4000/populariwomen')
    .then((response) => response.json())
    .then((data) => setPopulariWomenProducts(data));
}, []);

//popularimen
const [popularimenProducts, setPopulariMenProducts] = useState([]);

useEffect(() => {
  fetch('http://localhost:4000/popularimen')
    .then((response) => response.json())
    .then((data) => setPopulariMenProducts(data));
}, []);

//popularikids
const [popularikidsProducts, setPopulariKidsProducts] = useState([]);

useEffect(() => {
  fetch('http://localhost:4000/popularikids')
    .then((response) => response.json())
    .then((data) => setPopulariKidsProducts(data));
}, []);

  return (
    <div>
        <div className="popular">
            <h1>NHỮNG BỘ SƯU TẬP MỚI NHẤT</h1>
            <div>
              <hr ></hr>
            </div>

            <div id="carouselExample" className="carousel slide container-fluid">
              <div className="carousel-inner">
                <div className="carousel-item active mx-5 px-5">
                {/* _________ */}
                                                  <div className="container mb-5 d-flex" style={{}}>
                                                <div className="row">
                                                  {populariwomenProducts.map((item, i) => {
                                                    
                                                      return (
                                                        <div key={i} className="container mt-5 col-md-3 ">
                                                          <div className="card " style={{height:"520px"}}>
                                                            <img src={item.image} className="card-img-top pt-2 px-2 img-thumnail rounded" alt={item.name} style={{height:"300px"}} />
                                                            <div className="card-body">
                                                              <h5 className="card-title" style={{fontSize:"16px"}}>{item.name}</h5>
                                                              
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
                {/* _________ */}
                  {/* <img src={tam} className="d-block w-100" alt="..." /> */}
                </div>
                <div className="carousel-item">
                  {/* _____ */}
                          <div className="container mb-5 d-flex" style={{}}>
                      <div className="row " >
                        {popularimenProducts.map((item, i) => {
                          
                            return (
                              <div key={i} className="container mt-5 col-md-3  ">
                                <div className="card " style={{height:"520px"}}>
                                  <img src={item.image} className="card-img-top pt-2 px-2 img-thumnail rounded" alt={item.name} style={{height:"300px"}} />
                                  <div className="card-body">
                                    <h5 className="card-title" style={{fontSize:"16px"}}>{item.name}</h5>
                                    
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
                  {/* _____ */}
                  {/* <img src={tam1} className="d-block w-100" alt="..." /> */}
                </div>
                <div className="carousel-item">
                  {/* _______ */}
                                  <div className="container mb-5 d-flex w-100" style={{}}>
                              <div className="row">
                                {popularikidsProducts.map((item, i) => {
                                  
                                    return (
                                      <div key={i} className="container mt-5 col-md-3 ">
                                        <div className="card " style={{height:"520px"}}>
                                          <img src={item.image} className="card-img-top pt-2 px-2 img-thumnail rounded" alt={item.name} style={{height:"300px"}} />
                                          <div className="card-body">
                                            <h5 className="card-title" style={{fontSize:"16px"}}>{item.name}</h5>
                                            
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
                  {/* _______ */}
                  {/* <img src={tam2} className="d-block w-100" alt="..." /> */}
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon btn-secondary" ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon btn-secondary" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>











            

            
        </div>
    </div>
  )
}

export default Popular
