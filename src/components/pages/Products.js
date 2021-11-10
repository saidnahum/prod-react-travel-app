import React from 'react';
import '../../App.css';

function Products() {
   return (
      <>
         <h1 
            className='products'
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/img-7.jpg'})` }}
         >
            PRDODUCTS
         </h1>
      </>
   )
}

export default Products;
