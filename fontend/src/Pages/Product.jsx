import React, {useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'
import {useParams} from 'react-router-dom'
import Breadcrum from '../Components/Breadcrum/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DecriptionBox from '../Components/DecriptionBox/DecriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'

const Product = () => {
      const {all_product} = useContext(ShopContext);
      const {productId} = useParams();
      const product = all_product.find((e)=> e.id === Number(productId))

  return (
    <div>
       <Breadcrum product = {product}/>
       <div>
          <ProductDisplay product = {product}/>
       </div>
       <div className='py-5 my-2'>
          <RelatedProducts/>

       </div>
       
    </div>
  )
}

export default Product
