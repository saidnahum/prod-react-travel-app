import React from 'react'

function Services() {
   return (
      <>
         <h1 
            className='services'
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/img-2.jpg'})` }}
         >
            SERVICES
         </h1>
      </>
   )
}

export default Services
