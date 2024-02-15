import React from 'react'
import Homeproducts from './Homeproducts.jsx'
import useFetch from '../hooks/useFetch.js'

const RelatedProducts = ({productID,categoryID}) => {
const {data} = useFetch(`/api/products?populate=*&filters[id][$ne]=${productID}&filters[categories][id]=${categoryID}&pagination[start]=0&pagination[limit]=4`)


  return (
    <div className='my-0 mx-auto max-w-[calc(100%-20px)] md:max-w-[1200px]'>
      <Homeproducts Heading='Related Products' products={data}/>
    </div>
  )
}

export default RelatedProducts
