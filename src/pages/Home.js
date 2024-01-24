import React from 'react'
import Products from '../components/Products'

const Home = () => {
  return (
    <div >
    <div className='main'>
      <h2 className='headind'>Welcome to the Redux toolkit store</h2>
    </div>
    <div>
      <section>
        <h5>Products</h5>
        <Products/>
      </section>
      </div>
    </div>
  )
}

export default Home
